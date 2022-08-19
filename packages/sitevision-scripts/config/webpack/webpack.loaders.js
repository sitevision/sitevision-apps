const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const svgToMiniDataURI = require('mini-svg-data-uri');
const properties = require('../../util/properties');

const packageJson = properties.getPackageJSON();

module.exports = {
  getBabelLoader: () => ({
    test: /\.jsx?$/,
    use: {
      loader: 'babel-loader',
      options: packageJson.babel || {
        presets: ['@sitevision/babel-preset-react-server'],
      },
    },
  }),

  getClientBabelLoader: () => ({
    test: /\.(js|jsx)?$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: packageJson.babel || {
        presets: ['@sitevision/babel-preset-react-client'],
      },
    },
  }),

  getCssLoader: (cssPrefix, emit) => ({
    test: /\.((c|sa|sc)ss)$/i,
    oneOf: [
      {
        resourceQuery: /raw/,
        sideEffects: true,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        resourceQuery: /nomodules/,
        sideEffects: true,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
      {
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              emit,
            },
          },
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentHashSalt: cssPrefix,
              },
            },
          },
          'postcss-loader',
          'sass-loader',
        ],
      },
    ],
  }),

  getSvgLoader: () => ({
    test: /\.svg$/i,
    type: 'asset/inline',
    generator: {
      dataUrl: (content) => svgToMiniDataURI(content.toString()),
    },
  }),

  getFontLoader: (publicPath) => {
    return {
      test: /\.(woff|woff2|eot|ttf|otf)$/i,
      type: 'asset/resource',
      generator: {
        filename: 'generated/font/[name][ext]',
        outputPath: 'resource',
        publicPath,
      },
    };
  },

  getImageLoader: (publicPath) => ({
    test: /\.(png|jpg|gif)$/i,
    type: 'asset',
    parser: {
      dataUrlCondition: {
        maxSize: 8 * 1024, // 8kb
      },
    },
    generator: {
      filename: 'generated/image/[name][ext]',
      outputPath: 'resource',
      publicPath,
    },
  }),

  getJsModuleLoader: () => ({
    type: 'javascript/auto',
    test: /\.m?(js|jsx)/,
    resolve: {
      fullySpecified: false,
    },
  }),

  getJsonLoader: () => ({
    type: 'javascript/auto',
    test: /\.json$/,
    loader: 'json-loader',
  }),
};
