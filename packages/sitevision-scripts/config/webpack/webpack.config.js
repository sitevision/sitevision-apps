const process = require('process');
const path = require('path');
const fs = require('fs-extra');
const { getServerConfig } = require('./webpack.config.server');
const { getClientConfig } = require('./webpack.config.client');
const { getHooksConfig } = require('./webpack.config.hooks');

const getWebAppConfig = ({
  cwd,
  dev,
  cssPrefix,
  serverSideOnly,
  outputPath,
}) => {
  const mainEntry = path.resolve(cwd, 'src', 'main.js');
  const indexEntry = path.resolve(cwd, 'src', 'index.js');

  if (!fs.existsSync(indexEntry)) {
    throw Error('Missing index.js');
  }

  if (!fs.existsSync(mainEntry)) {
    throw Error('Missing main.js');
  }

  const config = [
    getServerConfig({
      indexEntry,
      outputPath,
      cwd,
      dev,
      cssPrefix,
      serverSideOnly,
    }),
    getClientConfig({ mainEntry, outputPath, dev, cssPrefix, serverSideOnly }),
  ];

  const hooksEntry = path.resolve(cwd, 'src', 'hooks.js');
  if (fs.existsSync(hooksEntry)) {
    config.push(getHooksConfig({ hooksEntry, outputPath, dev }));
  }

  return config;
};

const getRestAppConfig = ({ cwd, outputPath }) => {
  const indexEntry = path.resolve(cwd, 'src', 'index.js');

  if (!fs.existsSync(indexEntry)) {
    throw Error('Missing index.js');
  }

  return [
    getServerConfig({
      indexEntry,
      outputPath,
      cwd,
    }),
  ];
};

module.exports = ({ restApp, dev, cssPrefix, serverSideOnly }) => {
  const cwd = process.cwd();

  const outputPath = path.resolve(cwd, 'build');

  return restApp
    ? getRestAppConfig({ cwd, outputPath })
    : getWebAppConfig({ cwd, cssPrefix, serverSideOnly, dev, outputPath });
};
