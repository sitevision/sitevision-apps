const { getJsModuleLoader, getBabelLoader } = require('./webpack.loaders');
const { getExternals } = require('./utils');

const getHooksConfig = ({ hooksEntry, outputPath }) => ({
  mode: 'production',
  devtool: undefined,
  entry: hooksEntry,
  output: {
    path: outputPath,
    filename: 'hooks.js',
    iife: true,
  },
  module: {
    rules: [getJsModuleLoader(), getBabelLoader()],
  },
  externals: [getExternals('commonjs')],
});

module.exports = { getHooksConfig };
