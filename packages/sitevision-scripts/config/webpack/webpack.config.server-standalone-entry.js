import {
  getJsModuleLoader,
  getBabelLoader,
  getTypeScriptLoader,
  getJsonLoader,
} from './webpack.loaders.js';
import { getExternals, getServerOptimization } from './utils.js';

export const getServerStandaloneEntryConfig = ({
  entry,
  outputPath,
  outputFilename,
}) => ({
  mode: 'production',
  devtool: undefined,
  entry,
  output: {
    path: outputPath,
    filename: outputFilename,
    iife: true,
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.wasm'],
  },
  module: {
    rules: [
      getJsModuleLoader(),
      getTypeScriptLoader(true),
      getBabelLoader(),
      getJsonLoader(),
    ],
  },
  externals: [getExternals('commonjs')],
  optimization: getServerOptimization(),
});
