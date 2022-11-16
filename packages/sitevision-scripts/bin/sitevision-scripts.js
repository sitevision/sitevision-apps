#!/usr/bin/env node
process.on('unhandledRejection', (err) => {
  throw err;
});

import spawn from 'cross-spawn';
import * as properties from '../util/properties.js';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const args = process.argv.slice(2);

const scriptIndex = args.findIndex(
  (x) =>
    x === 'build' ||
    x === 'create-addon' ||
    x === 'deploy' ||
    x === 'deploy-prod' ||
    x === 'dev' ||
    x === 'sign' ||
    x === 'zip' ||
    x === 'setup-dev-properties' ||
    x === 'test'
);
const script = scriptIndex === -1 ? args[0] : args[scriptIndex];
const nodeArgs = scriptIndex > 0 ? args.slice(0, scriptIndex) : [];
const scriptArgs = args.slice(scriptIndex + 1);

const executeScript = (script) => {
  const result = spawn.sync(
    'node',
    nodeArgs.concat(require.resolve('../scripts/' + script)).concat(scriptArgs),
    { stdio: 'inherit' }
  );
  if (result.signal) {
    if (result.signal === 'SIGKILL') {
      console.log(
        'The build failed because the process exited too early. ' +
          'This probably means the system ran out of memory or someone called ' +
          '`kill -9` on the process.'
      );
    } else if (result.signal === 'SIGTERM') {
      console.log(
        'The build failed because the process exited too early. ' +
          'Someone might have called `kill` or `killall`, or the system could ' +
          'be shutting down.'
      );
    }
    process.exit(1);
  }
  return result;
};

switch (script) {
  case 'create-addon':
  case 'deploy':
  case 'deploy-prod':
  case 'sign':
  case 'dev':
  case 'zip':
  case 'test':
  case 'setup-dev-properties': {
    const result = executeScript(script);
    process.exit(result.status);
    break;
  }
  case 'build': {
    const steps = [];
    if (properties.getManifest().bundled) {
      steps.push('build');
    } else {
      if (properties.getTranspile()) {
        steps.push('transpile');
      }
      steps.push('copy-to-build');
    }

    steps.push('zip');

    if (scriptArgs[0] === 'deploy' || scriptArgs[0] === 'force-deploy') {
      steps.push('deploy');
    }
    steps.push('util/cleanup');

    steps.forEach((step) => {
      const result = executeScript(step);
      if (result.status !== 0) {
        process.exit(result.status);
      }
    });
    process.exit(0);
    break;
  }
  default:
    console.log('Unknown script "' + script + '".');
    break;
}
