module.exports = function () {
  return {
    presets: [
      [
        '@babel/preset-env',
        {
          corejs: { version: '3' },
          useBuiltIns: 'usage',
          targets: {
            browsers: 'defaults',
          },
        },
      ],
      '@babel/preset-react',
    ],
  };
};
