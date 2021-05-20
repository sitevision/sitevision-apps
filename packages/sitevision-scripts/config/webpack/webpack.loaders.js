const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const svgToMiniDataURI = require('mini-svg-data-uri');

module.exports = {
  getBabelLoader: () => ({
    test: /\.jsx?$/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@sitevision/babel-preset-react-server'],
      },
    },
  }),

  getClientBabelLoader: () => ({
    test: /\.(js|jsx)?$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@sitevision/babel-preset-react-client'],
      },
    },
  }),

  getCssLoader: (cssPrefix) => ({
    test: /\.((c|sa|sc)ss)$/i,
    oneOf: [
      {
        resourceQuery: /raw/,
        sideEffects: true,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentHashPrefix: cssPrefix,
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
    use: [
      {
        loader: 'url-loader',
        options: {
          generator: (content) => svgToMiniDataURI(content.toString()),
        },
      },
    ],
  }),

  getImageLoader: () => ({
    test: /\.(png|jpg|gif)$/i,
    use: [
      {
        loader: 'url-loader',
        options: {
          limit: 8192,
        },
      },
    ],
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
