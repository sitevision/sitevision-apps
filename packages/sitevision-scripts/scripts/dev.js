import path from 'path';
import spawn from 'cross-spawn';
import fs from 'fs-extra';
import * as properties from '../util/properties.js';
import resolveBin from 'resolve-bin';
import webpack from 'webpack';
import { copyChunksToResources } from './util/copychunks.js';
import { getDirname } from '../util/dirname.js';

const __dirname = getDirname(import.meta.url);

const SITEVISION_SCRIPTS_PATH = path.resolve(
  __dirname,
  '..',
  'bin',
  'sitevision-scripts.js'
);

const SPAWN_PROPERTIES = {
  stdio: 'inherit',
};

(async function () {
  const manifest = properties.getManifest();
  if (manifest.bundled) {
    const { default: webpackConfig } = await import(
      '../config/webpack/webpack.config.js'
    );

    const compiler = webpack(
      webpackConfig({
        dev: true,
        cssPrefix: manifest.id,
        restApp: properties.getAppType() === 'rest',
      })
    );

    console.log('Building...', compiler);

    compiler.watch(
      {
        ignored: ['**/dist/**', '**/build/**', '**/node_modules/**'],
      },
      (err, stats) => {
        if (err) {
          console.error(err);
          return;
        }

        console.log(stats.toString({ colors: true }));
        copyChunksToResources(properties.BUILD_DIR_PATH);

        spawn.sync('node', [SITEVISION_SCRIPTS_PATH, 'zip'], SPAWN_PROPERTIES);
        spawn.sync(
          'node',
          [SITEVISION_SCRIPTS_PATH, 'deploy', 'force'],
          SPAWN_PROPERTIES
        );
      }
    );

    process.on('SIGINT', () => {
      console.log('cleaning up...');
      compiler.close((err) => {
        if (err) {
          console.error(err);
        }

        fs.existsSync(properties.BUILD_DIR_PATH) &&
          fs.removeSync(properties.BUILD_DIR_PATH);
      });
    });
    // watchInstance.close((err) => {
    //   if (err) {
    //     console.error(err);
    //   }

    //   fs.existsSync(properties.BUILD_DIR_PATH) &&
    //     fs.removeSync(properties.BUILD_DIR_PATH);
    // });
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
