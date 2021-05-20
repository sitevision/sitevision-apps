const process = require('process');
const path = require('path');
const fs = require('fs-extra');
const { getServerConfig } = require('./webpack.config.server');
const { getClientConfig } = require('./webpack.config.client');
const { getHooksConfig } = require('./webpack.config.hooks');

module.exports = () => {
  const cwd = process.cwd();
  const indexEntry = path.resolve(cwd, 'src', 'index.js');
  const mainEntry = path.resolve(cwd, 'src', 'main.js');

  const outputPath = path.resolve(cwd, 'build');

  if (!fs.existsSync(indexEntry)) {
    throw Error('Missing index.js');
  }

  if (!fs.existsSync(mainEntry)) {
    throw Error('Missing main.js');
  }

  const config = [
    getServerConfig({ indexEntry, outputPath, cwd }),
    getClientConfig({ mainEntry, outputPath }),
  ];

  const hooksEntry = path.resolve(cwd, 'src', 'hooks.js');
  if (fs.existsSync(hooksEntry)) {
    config.push(getHooksConfig({ hooksEntry, outputPath }));
  }

  return config;
};
