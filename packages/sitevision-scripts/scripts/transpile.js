import path from 'path';
import spawn from 'cross-spawn';
import * as properties from '../util/properties.js';
import chalk from 'chalk';
import resolveBin from 'resolve-bin';
import { getDirname } from '../util/dirname.js';

(function () {
  const child = spawn(
    resolveBin.sync('@babel/cli', { executable: 'babel' }),
    [
      properties.SRC_DIR_PATH,
      '--out-dir',
      properties.BUILD_DIR_PATH,
      '--copy-files',
      '--config-file',
      path.resolve(
        getDirname(import.meta.url),
        '..',
        'config',
        'babel-config.json'
      ),
    ],
    {
      stdio: 'inherit',
    }
  );
  child.on('close', (code) => {
    if (code !== 0) {
      console.error(`${chalk.red('Failed to transpile /src using babel')}`);
      process.exit(1);
    }
  });
})();
