import process from 'process';
import path from 'path';
import fs from 'fs-extra';
import { getServerConfig } from './webpack.config.server.js';
import { getClientConfig } from './webpack.config.client.js';
import { getServerStandaloneEntryConfig } from './webpack.config.server-standalone-entry.js';

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
    config.push(
      getServerStandaloneEntryConfig({ entry: hooksEntry, outputPath })
    );
  }

  const headlessEntry = path.resolve(cwd, 'src', 'headless.js');
  if (fs.existsSync(headlessEntry)) {
    config.push(
      getServerStandaloneEntryConfig({ entry: headlessEntry, outputPath })
    );
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

export default ({ restApp, dev, cssPrefix, serverSideOnly }) => {
  const cwd = process.cwd();

  const outputPath = path.resolve(cwd, 'build');

  return restApp
    ? getRestAppConfig({ cwd, outputPath })
    : getWebAppConfig({ cwd, cssPrefix, serverSideOnly, dev, outputPath });
};
