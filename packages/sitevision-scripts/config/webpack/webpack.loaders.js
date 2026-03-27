import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import svgToMiniDataURI from 'mini-svg-data-uri';
import { createRequire } from 'module';
import * as properties from '../../util/properties.js';

const require = createRequire(import.meta.url);

const resolvePackage = (packageName) => require.resolve(packageName);

export const getTypeScriptLoader = (server) => ({
  test: /\.tsx?$/,
  use: {
    loader: resolvePackage('ts-loader'),
    options: {
      ...(server
        ? {
            compilerOptions: {
              target: 'es5',
            },
          }
        : {}),
    },
  },
});

export const getBabelLoader = () => ({
  test: /\.jsx?$/,
  use: {
    loader: resolvePackage('babel-loader'),
    options: properties.getCustomProperty('babel') || {
      presets: [resolvePackage('@sitevision/babel-preset-react-server')],
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
    loader: resolvePackage('babel-loader'),
    options: properties.getCustomProperty('babel') || {
      presets: [resolvePackage('@sitevision/babel-preset-react-client')],
    },
  },
});

export const getCssLoader = (cssPrefix, emit) => {
  const miniCssExtractLoader = {
    loader: MiniCssExtractPlugin.loader,
    options: {
      emit,
    },
  };

  return {
    test: /\.((c|sa|sc)ss)$/i,
    oneOf: [
      {
        resourceQuery: /raw/,
        sideEffects: true,
        use: [miniCssExtractLoader, resolvePackage('css-loader')],
      },
      {
        resourceQuery: /nomodules/,
        sideEffects: true,
        use: [
          miniCssExtractLoader,
          resolvePackage('css-loader'),
          resolvePackage('postcss-loader'),
          resolvePackage('sass-loader'),
        ],
      },
      {
        use: [
          miniCssExtractLoader,
          {
            loader: resolvePackage('css-loader'),
            options: {
              modules: {
                localIdentHashSalt: cssPrefix,
                namedExport: false,
              },
            },
          },
          resolvePackage('postcss-loader'),
          resolvePackage('sass-loader'),
        ],
      },
    ],
  };
};

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
  loader: resolvePackage('json-loader'),
});
