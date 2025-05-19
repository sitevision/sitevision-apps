import * as properties from '../util/properties.js';
import webpack from 'webpack';
import { copyChunksToResources } from './util/copychunks.js';
import { getFullAppId } from './util/id.js';

(async function () {
  const manifest = properties.getManifest();
  if (!manifest.bundled) {
    throw Error('This app cannot be built with this script');
  }

  const { default: webpackConfig } = await import(
    '../config/webpack/webpack.config.js'
  );

  const appId = getFullAppId(manifest.id);

  webpack(
    webpackConfig({
      dev: false,
      cssPrefix: appId,
      restApp: properties.getAppType() === 'rest',
    })
  ).run((err, stats) => {
    if (err) {
      console.error(err);
      return;
    }

    console.log(stats.toString({ colors: true }));

    copyChunksToResources(properties.BUILD_DIR_PATH);
  });
})();
