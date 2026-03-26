module.exports = function () {
  return {
    presets: [
      [
        require.resolve('@babel/preset-env'),
        {
          corejs: { version: '3' },
          useBuiltIns: 'usage',
          targets: {
            browsers: 'defaults',
          },
        },
      ],
      require.resolve('@babel/preset-react'),
    ],
  };
};
