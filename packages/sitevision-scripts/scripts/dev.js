const path = require('path');
const spawn = require('cross-spawn');
const properties = require('../util/properties');
const resolveBin = require('resolve-bin');
const webpack = require('webpack');

const SITEVISION_SCRIPTS_PATH = path.resolve(
  __dirname,
  '..',
  'bin',
  'sitevision-scripts.js'
);

(function () {
  if (properties.getManifest().bundled) {
    const webpackConfig = require(path.join(
      __dirname,
      '..',
      'config',
      'webpack',
      'webpack.config.js'
    ));

    webpack(webpackConfig()).watch(
      {
        ignored: ['dist/**', 'build/**', 'node_modules/**'],
      },
      (err, stats) => {
        if (err) {
          console.error(err);
          return;
        }

        console.log(stats.toString({ colors: true }));

        spawn.sync('node', [SITEVISION_SCRIPTS_PATH, 'zip'], {
          stdio: 'inherit',
        });
        spawn.sync('node', [SITEVISION_SCRIPTS_PATH, 'deploy', 'force'], {
          stdio: 'inherit',
        });
      }
    );
  } else {
    spawn(
      resolveBin.sync('nodemon'),
      [
        '--watch',
        properties.SRC_DIR_PATH,
        '-e',
        'js,html,css,less,json',
        SITEVISION_SCRIPTS_PATH,
        'build',
        'force-deploy',
      ],
      {
        stdio: 'inherit',
      }
    );
  }
})();
