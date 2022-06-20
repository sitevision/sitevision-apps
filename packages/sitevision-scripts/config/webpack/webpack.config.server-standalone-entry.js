const path = require('path');
const { getJsModuleLoader, getBabelLoader } = require('./webpack.loaders');
const { getExternals } = require('./utils');
const TerserPlugin = require('terser-webpack-plugin');

const getServerStandaloneEntryConfig = ({ entry, outputPath }) => ({
  mode: 'production',
  devtool: undefined,
  entry,
  output: {
    path: outputPath,
    filename: entry.substring(entry.lastIndexOf(path.sep) + 1),
    iife: true,
  },
  module: {
    rules: [getJsModuleLoader(), getBabelLoader()],
  },
  externals: [getExternals('commonjs')],
  optimization: {
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          ecma: 5,
        },
      }),
    ],
  },
});

module.exports = { getServerStandaloneEntryConfig };
