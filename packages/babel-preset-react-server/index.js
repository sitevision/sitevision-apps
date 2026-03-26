module.exports = function () {
  return {
    presets: [
      require.resolve('@babel/preset-env'),
      require.resolve('@babel/preset-react'),
      require.resolve('@babel/preset-typescript'),
    ],
  };
};
