import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import svgToMiniDataURI from 'mini-svg-data-uri';
import * as properties from '../../util/properties.js';

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
    options: properties.getCustomProperty('babel') || {
      presets: ['@sitevision/babel-preset-react-server'],
    },
  },
});

const transpilePackagesValue =
  properties.getCustomProperty('transpilePackages');
const transpilePackages = Array.isArray(transpilePackagesValue)
  ? transpilePackagesValue
  : [];

export const getClientBabelLoader = () => ({
  test: /\.(js|jsx)?$/,
  exclude: (file) => {
    if (/\/node_modules\//.test(file)) {
      if (transpilePackages.length === 0) {
        return true;
      }

      return !transpilePackages.some((transpilePackage) =>
        file.includes(`/node_modules/${transpilePackage}/`)
      );
    }

    return false;
  },
  use: {
    loader: 'babel-loader',
    options: properties.getCustomProperty('babel') || {
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
