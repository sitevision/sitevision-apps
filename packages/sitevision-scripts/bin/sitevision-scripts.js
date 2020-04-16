#!/usr/bin/env node
process.on('unhandledRejection', (err) => {
  throw err;
});

const spawn = require('cross-spawn');
const args = process.argv.slice(2);
const properties = require('../util/properties');

const scriptIndex = args.findIndex(
  (x) =>
    x === 'build' ||
    x === 'create-addon' ||
    x === 'deploy' ||
    x === 'deploy-prod' ||
    x === 'dev' ||
    x === 'sign' ||
    x === 'zip'
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
  case 'zip': {
    const result = executeScript(script);
    process.exit(result.status);
    break;
  }
  case 'build': {
    const devProps = properties.getDevProperties();
    const steps = ['zip'];
    if (scriptArgs[0] === 'deploy' || scriptArgs[0] === 'force-deploy') {
      steps.push('deploy');
    }
    if (devProps.transpile) {
      steps.unshift('transpile');
      steps.push('util/cleanup');
    }

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
