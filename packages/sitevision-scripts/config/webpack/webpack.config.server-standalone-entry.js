const path = require('path');
const { getJsModuleLoader, getBabelLoader } = require('./webpack.loaders');
const { getExternals, getServerOptimization } = require('./utils');

const getServerStandaloneEntryConfig = ({ entry, outputPath }) => ({
  mode: 'production',
  devtool: undefined,
  entry,
  output: {
    path: outputPath,
    filename: path.basename(entry),
    iife: true,
  },
  module: {
    rules: [getJsModuleLoader(), getBabelLoader()],
  },
  externals: [getExternals('commonjs')],
  optimization: getServerOptimization(),
});

module.exports = { getServerStandaloneEntryConfig };
