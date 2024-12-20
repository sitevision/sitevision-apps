import TerserPlugin from 'terser-webpack-plugin';
import { getPackageJson } from '../../util/properties.js';

const REACT_DEPS_17 = /^(react|react-dom)$/;
const REACT_18_AND_UP_DEPS =
  /^(react|react-dom|react\/jsx-runtime|react-dom\/client)$/;

export const getReactMajorVersion = () => {
  const dependencies = getPackageJson().dependencies;
  const match = dependencies.react.match(/^(\d+)\./);
  return match ? Number(match[1]) : null;
};

export const getExternals = (type, useExternalLibs) =>
  function externals({ request }, callback) {
    if (useExternalLibs && type === 'amd') {
      if (getReactMajorVersion() >= 18) {
        if (REACT_18_AND_UP_DEPS.test(request)) {
          return callback(null, request, type);
        }
      }

      if (REACT_DEPS_17.test(request)) {
        return callback(null, request, type);
      }
    }

    const match = request.match(
      /^@sitevision\/api\/(?:client|common|server)\/(.*)$/
    );
    if (match) {
      // Externalize to a amd module using the request path
      return callback(null, match[1], type);
    }

    // Continue without externalizing the import
    callback();
  };

export const getServerOptimization = () => ({
  minimizer: [
    new TerserPlugin({
      terserOptions: {
        ecma: 5,
      },
    }),
  ],
});
