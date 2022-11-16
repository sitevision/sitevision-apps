import path from 'path';
import { getJsModuleLoader, getBabelLoader } from './webpack.loaders.js';
import { getExternals, getServerOptimization } from './utils.js';

export const getServerStandaloneEntryConfig = ({ entry, outputPath }) => ({
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
