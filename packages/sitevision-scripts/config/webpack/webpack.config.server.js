const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');
const { getExternals } = require('./utils');
const babel = require('@babel/core');
const {
  getJsModuleLoader,
  getBabelLoader,
  getSvgLoader,
  getImageLoader,
  getCssLoader,
} = require('./webpack.loaders');

const getServerConfig = ({
  serverSideOnly,
  cwd,
  indexEntry,
  outputPath,
  cssPrefix,
}) => {
  return {
    mode: 'production',
    devtool: undefined,
    entry: indexEntry,
    output: {
      path: outputPath,
      filename: 'index.js',
      iife: true,
    },
    plugins: [
      new CopyWebpackPlugin({
        patterns: [
          {
            info: { minimized: true },
            from: './src/config/',
            to: './config',
            transform: (content, absolutePath) => {
              const { ext: extension } = path.parse(absolutePath);

              if (extension === '.js') {
                const result = babel.transformSync(content, {
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
            from: path.join(cwd, 'i18n'),
            to: './i18n',
          },
        ],
      }),
      new MiniCssExtractPlugin({ filename: './css/[name].css' }),
    ],
    module: {
      rules: [
        getJsModuleLoader(),
        getBabelLoader(),
        getCssLoader(cssPrefix, serverSideOnly),
        getImageLoader(),
        getSvgLoader(),
      ],
    },
    externals: [getExternals('commonjs')],
  };
};

module.exports = {
  getServerConfig,
};
