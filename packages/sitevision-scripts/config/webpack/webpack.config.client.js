import * as properties from '../../util/properties.js';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import {
  getJsModuleLoader,
  getClientBabelLoader,
  getCssLoader,
  getImageLoader,
  getSvgLoader,
  getJsonLoader,
  getFontLoader,
  getTypeScriptLoader,
} from './webpack.loaders.js';
import { getExternals } from './utils.js';

export const getClientConfig = ({
  dev,
  mainEntry,
  outputPath,
  serverSideOnly,
  cssPrefix,
}) => {
  const manifest = properties.getManifest();
  const appId = manifest.id;
  const appVersion = manifest.version;
  const publicPath = `/webapp-files/${appId}/${appVersion}/`;

  return {
    mode: dev ? 'development' : 'production',
    devtool: dev ? 'eval-cheap-module-source-map' : undefined,
    entry: mainEntry,
    output: {
      path: outputPath,
      libraryTarget: 'amd',
      environment: {
        arrowFunction: false,
        const: false,
        destructuring: false,
        forOf: false,
      },
      publicPath,
      filename: (pathData) => {
        if (pathData.chunk.name === 'main') {
          return 'main.js';
        }

        return dev ? 'chunk-[name].js' : 'chunk-[name]-[chunkhash:5].js';
      },
      chunkFilename: dev ? 'chunk-[name].js' : 'chunk-[name]-[chunkhash:5].js',
    },
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.wasm'],
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: './css/[name].css',
        chunkFilename: dev
          ? 'chunk-[name].css'
          : 'chunk-[name]-[chunkhash:5].css',
      }),
    ],
    module: {
      rules: [
        getJsModuleLoader(),
        getTypeScriptLoader(),
        getClientBabelLoader(),
        getCssLoader(cssPrefix, !serverSideOnly),
        getImageLoader(publicPath),
        getSvgLoader(),
        getJsonLoader(),
        getFontLoader(publicPath),
      ],
    },
    externals: [getExternals('amd', true)],
  };
};
