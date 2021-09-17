const babelJest = require('babel-jest').default;

module.exports = babelJest.createTransformer({
  presets: [require.resolve('@sitevision/babel-preset-react-server')],
  babelrc: false,
  configFile: false,
});
