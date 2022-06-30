const path = require('path');
const spawn = require('cross-spawn');
const properties = require('../util/properties');
const resolveBin = require('resolve-bin');
const webpack = require('webpack');
const { copyChunksToResources } = require('./util/copychunks');

const SITEVISION_SCRIPTS_PATH = path.resolve(
  __dirname,
  '..',
  'bin',
  'sitevision-scripts.js'
);

const SPAWN_PROPERTIES = {
  stdio: 'inherit',
};

(function () {
  const manifest = properties.getManifest();
  if (manifest.bundled) {
    const webpackConfig = require(path.join(
      __dirname,
      '..',
      'config',
      'webpack',
      'webpack.config.js'
    ));

    webpack(
      webpackConfig({
        dev: true,
        cssPrefix: manifest.id,
        restApp: properties.getAppType() === 'rest',
      })
    ).watch(
      {
        ignored: ['**/dist/**', '**/build/**', '**/node_modules/**'],
      },
      (err, stats) => {
        if (err) {
          console.error(err);
          return;
        }

        copyChunksToResources(properties.BUILD_DIR_PATH);
        console.log(stats.toString({ colors: true }));

        spawn.sync('node', [SITEVISION_SCRIPTS_PATH, 'zip'], SPAWN_PROPERTIES);
        spawn.sync(
          'node',
          [SITEVISION_SCRIPTS_PATH, 'deploy', 'force'],
          SPAWN_PROPERTIES
        );
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
      SPAWN_PROPERTIES
    );
  }
})();
