import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import path from 'path';
import { getExternals, getServerOptimization } from './utils.js';
import babel from '@babel/core';
import * as properties from '../../util/properties.js';
import {
  getJsModuleLoader,
  getBabelLoader,
  getSvgLoader,
  getImageLoader,
  getCssLoader,
  getFontLoader,
  getTypescriptLoader,
} from './webpack.loaders.js';

export const getServerConfig = ({
  serverSideOnly,
  cwd,
  indexEntry,
  outputPath,
  cssPrefix,
}) => {
  const manifest = properties.getManifest();
  const appId = manifest.id;
  const appVersion = manifest.version;
  const publicPath = `/webapp-files/${appId}/${appVersion}/`;

  return {
    mode: 'production',
    devtool: undefined,
    entry: indexEntry,
    output: {
      path: outputPath,
      filename: 'index.js',
      iife: true,
    },
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.wasm'],
    },
    plugins: [
      new CopyWebpackPlugin({
        patterns: [
          {
            noErrorOnMissing: true,
            info: { minimized: true },
            from: './src/config/',
            to: './config',
            transform: (content, absolutePath) => {
              const { ext: extension, base: filename } =
                path.parse(absolutePath);

              if (extension === '.js') {
                const result = babel.transformSync(content, {
                  filename,
                  compact: false,
                  presets: ['@sitevision/babel-preset-react-server'],
                });
                return result.code;
              }

              return content;
            },
          },
          {
            from: path.join(cwd, 'manifest.json'),
          },
          {
            noErrorOnMissing: true,
            from: path.join(cwd, 'appDataDefaults.json'),
          },
          {
            noErrorOnMissing: true,
            from: path.join(cwd, 'i18n'),
            to: './i18n',
          },
          {
            noErrorOnMissing: true,
            from: path.join(cwd, 'resource'),
            to: './resource',
          },
        ],
      }),
      new MiniCssExtractPlugin({ filename: './css/[name].css' }),
    ],
    module: {
      rules: [
        getJsModuleLoader(),
        getTypescriptLoader(),
        getBabelLoader(),
        getCssLoader(cssPrefix, serverSideOnly),
        getImageLoader(publicPath),
        getSvgLoader(),
        getFontLoader(publicPath),
      ],
    },
    externals: [getExternals('commonjs')],
    optimization: getServerOptimization(),
  };
};
