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
}) => ({
  mode: dev ? 'development' : 'production',
  devtool: dev ? 'eval-cheap-module-source-map' : undefined,
  entry: mainEntry,
  output: {
    path: outputPath,
    filename: 'main.js',
    libraryTarget: 'amd',
    environment: {
      arrowFunction: false,
      const: false,
      destructuring: false,
      forOf: false,
    },
  },
  plugins: [
    new MiniCssExtractPlugin(
      serverSideOnly
        ? undefined
        : {
            filename: './css/[name].css',
          }
    ),
  ],
  module: {
    rules: [
      getJsModuleLoader(),
      getClientBabelLoader(),
      getCssLoader(cssPrefix),
      getImageLoader(),
      getSvgLoader(),
      getJsonLoader(),
    ],
  },
  externals: [getExternals('amd', true)],
});

module.exports = { getClientConfig };
