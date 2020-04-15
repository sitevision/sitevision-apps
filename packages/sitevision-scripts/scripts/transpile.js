const path = require('path');
const spawn = require('cross-spawn');
const properties = require('../util/properties');
const chalk = require('chalk');

(function () {
  const devProps = properties.getDevProperties();
  const child = spawn(
    path.resolve(__dirname, '../node_modules/.bin/babel'),
    [
      properties.SRC_DIR_PATH,
      '--out-dir',
      properties.SRC_TRANSPILED_DIR_PATH,
      '--copy-files',
      '--config-file',
      path.resolve(__dirname, `../config/${devProps.type}-babel-config.json`),
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
