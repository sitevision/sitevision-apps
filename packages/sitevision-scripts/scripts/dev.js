const path = require('path');
const spawn = require('cross-spawn');
const properties = require('../util/properties');
const resolveBin = require('resolve-bin');

(function () {
  spawn(
    resolveBin.sync('nodemon'),
    [
      '--watch',
      properties.SRC_DIR_PATH,
      '-e',
      'js,html,css,less,json',
      path.resolve(__dirname, '..', 'bin', 'sitevision-scripts.js'),
      'build',
      'force-deploy',
    ],
    {
      stdio: 'inherit',
    }
  );
})();
