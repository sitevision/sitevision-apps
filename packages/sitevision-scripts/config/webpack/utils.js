import TerserPlugin from 'terser-webpack-plugin';

export const getExternals = (type, useExternalLibs) =>
  function externals({ request }, callback) {
    if (useExternalLibs && type === 'amd') {
      if (/^react$|^react-dom$/.test(request)) {
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
