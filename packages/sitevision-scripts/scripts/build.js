import * as properties from '../util/properties.js';
import webpack from 'webpack';
import { copyChunksToResources } from './util/copychunks.js';
import { getFullAppId } from './util/id.js';
import { legacyAppUnsupportedMessage } from './util/legacy.js';

(async function () {
  const manifest = properties.getManifest();
  if (!manifest.bundled) {
    throw Error(legacyAppUnsupportedMessage);
  }

  const { default: webpackConfig } = await import(
    '../config/webpack/webpack.config.js'
  );

  const appId = getFullAppId(manifest.id);

  webpack(
    webpackConfig({
      dev: false,
      cssPrefix: appId,
      serverApp: ['rest', 'mcpServer'].includes(properties.getAppType()),
    })
  ).run((err, stats) => {
    if (err) {
      console.error(err);
      return;
    }

    console.log(stats.toString({ colors: true }));

    if (stats.hasErrors()) {
      process.exit(1);
    }

    copyChunksToResources(properties.BUILD_DIR_PATH);
  });
})();
