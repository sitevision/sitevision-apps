const path = require('path');
const properties = require('../util/properties');
const webpack = require('webpack');

(function () {
  const manifest = properties.getManifest();
  if (!manifest.bundled) {
    throw Error('This app cannot be built with this script');
  }

  const webpackConfig = require(path.join(
    __dirname,
    '..',
    'config',
    'webpack',
    'webpack.config.js'
  ));

  webpack(
    webpackConfig({
      dev: false,
      cssPrefix: manifest.id,
      restApp: properties.getAppType() === 'rest',
    })
  ).run((err, stats) => {
    if (err) {
      console.error(err);
      return;
    }

    console.log(stats.toString({ colors: true }));
  });
})();
