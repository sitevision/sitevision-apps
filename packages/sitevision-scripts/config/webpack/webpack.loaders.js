import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import svgToMiniDataURI from 'mini-svg-data-uri';
import * as properties from '../../util/properties.js';

const packageJson = properties.getPackageJson();

export const getTypeScriptLoader = (server) => ({
  test: /\.tsx?$/,
  use: {
    loader: 'ts-loader',
    options: server
      ? {
          compilerOptions: {
            target: 'es5',
          },
        }
      : undefined,
  },
});

export const getBabelLoader = () => ({
  test: /\.jsx?$/,
  use: {
    loader: 'babel-loader',
    options: packageJson.babel || {
      presets: ['@sitevision/babel-preset-react-server'],
    },
  },
});

export const getClientBabelLoader = () => ({
  test: /\.(js|jsx)?$/,
  exclude: /node_modules/,
  use: {
    loader: 'babel-loader',
    options: packageJson.babel || {
      presets: ['@sitevision/babel-preset-react-client'],
    },
  },
});

export const getCssLoader = (cssPrefix, emit) => ({
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
});

export const getSvgLoader = () => ({
  test: /\.svg$/i,
  type: 'asset/inline',
  generator: {
    dataUrl: (content) => svgToMiniDataURI(content.toString()),
  },
});

export const getFontLoader = (publicPath) => {
  return {
    test: /\.(woff|woff2|eot|ttf|otf)$/i,
    type: 'asset/resource',
    generator: {
      filename: 'generated/font/[name][ext]',
      outputPath: 'resource',
      publicPath,
    },
  };
};

export const getImageLoader = (publicPath) => ({
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
});

export const getJsModuleLoader = () => ({
  type: 'javascript/auto',
  test: /\.m?(js|jsx)/,
  resolve: {
    fullySpecified: false,
  },
});

export const getJsonLoader = () => ({
  type: 'javascript/auto',
  test: /\.json$/,
  loader: 'json-loader',
});
