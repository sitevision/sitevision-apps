import path from 'path';
import {
  getJsModuleLoader,
  getBabelLoader,
  getTypeScriptLoader,
} from './webpack.loaders.js';
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
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.wasm'],
  },
  module: {
    rules: [getJsModuleLoader(), getTypeScriptLoader(true), getBabelLoader()],
  },
  externals: [getExternals('commonjs')],
  optimization: getServerOptimization(),
});
