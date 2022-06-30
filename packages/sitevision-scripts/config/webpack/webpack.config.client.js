const properties = require('../../util/properties');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {
  getJsModuleLoader,
  getClientBabelLoader,
  getCssLoader,
  getImageLoader,
  getSvgLoader,
  getJsonLoader,
} = require('./webpack.loaders');
const { getExternals } = require('./utils');

const getClientConfig = ({
  dev,
  mainEntry,
  outputPath,
  serverSideOnly,
  cssPrefix,
}) => {
  const manifest = properties.getManifest();
  const appId = manifest.id;
  const appVersion = manifest.version;

  return {
    mode: dev ? 'development' : 'production',
    devtool: dev ? 'eval-cheap-module-source-map' : undefined,
    entry: mainEntry,
    output: {
      path: outputPath,
      libraryTarget: 'amd',
      environment: {
        arrowFunction: false,
        const: false,
        destructuring: false,
        forOf: false,
      },
      publicPath: `/webapp-files/${appId}/${appVersion}/`,
      filename: (pathData) => {
        if (pathData.chunk.name === 'main') {
          return 'main.js';
        }

        return dev ? 'chunk-[name].js' : 'chunk-[name]-[chunkhash:5].js';
      },
      chunkFilename: dev ? 'chunk-[name].js' : 'chunk-[name]-[chunkhash:5].js',
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: './css/[name].css',
        chunkFilename: dev
          ? 'chunk-[name].css'
          : 'chunk-[name]-[chunkhash:5].css',
      }),
    ],
    module: {
      rules: [
        getJsModuleLoader(),
        getClientBabelLoader(),
        getCssLoader(cssPrefix, !serverSideOnly),
        getImageLoader(),
        getSvgLoader(),
        getJsonLoader(),
      ],
    },
    externals: [getExternals('amd', true)],
  };
};

module.exports = { getClientConfig };
