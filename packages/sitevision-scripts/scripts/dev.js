import path from 'path';
import spawn from 'cross-spawn';
import fs from 'fs-extra';
import chalk from 'chalk';
import * as properties from '../util/properties.js';
import webpack from 'webpack';
import { copyChunksToResources } from './util/copychunks.js';
import { getDirname } from '../util/dirname.js';
import { getFullAppId } from './util/id.js';
import { legacyAppUnsupportedMessage } from './util/legacy.js';

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

const cleanupDevDist = () => {
  if (fs.existsSync(properties.DIST_DIR_PATH)) {
    console.log(`Removing ${chalk.green('/' + path.basename(properties.DIST_DIR_PATH))} to ensure future builds are fresh and to prevent accidental signing of an unminified, sourcemapped build.`);
    fs.removeSync(properties.DIST_DIR_PATH);
  }
};

(async function () {
  const manifest = properties.getManifest();
  if (!manifest.bundled) {
    throw Error(legacyAppUnsupportedMessage);
  }

  const { default: webpackConfig } = await import(
    '../config/webpack/webpack.config.js'
  );

  const appId = getFullAppId(manifest.id);
  const compiler = webpack(
    webpackConfig({
      dev: true,
      cssPrefix: appId,
      serverApp: ['rest', 'mcpServer'].includes(properties.getAppType()),
    })
  );

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

      cleanupDevDist();
    }
  );

  // NOTE: This shutdown hook is unreliable because spawn.sync blocks the event loop,
  // preventing the async compiler.close() callback from completing on SIGINT.
  // Do not depend on it for cleanup (which is why cleanupDevDist() is not called here).
  process.on('SIGINT', () => {
    compiler.close((err) => {
      if (err) {
        console.error(err);
      }

      fs.existsSync(properties.BUILD_DIR_PATH) &&
        fs.removeSync(properties.BUILD_DIR_PATH);
    });
  });
})();
