import process from 'process';
import path from 'path';
import fs from 'fs-extra';
import { getServerConfig } from './webpack.config.server.js';
import { getClientConfig } from './webpack.config.client.js';
import { getServerStandaloneEntryConfig } from './webpack.config.server-standalone-entry.js';
import { getAppType, getManifest } from '../../util/properties.js';
import { getFullAppId } from '../../scripts/util/id.js';

const getEntry = (name, silent) => {
  let entry;
  ['.js', '.ts', '.tsx', '.jsx'].find((ext) => {
    entry = path.join(process.cwd(), 'src', `${name}${ext}`);
    if (fs.existsSync(entry)) {
      return true;
    }
  });

  if (!entry && !silent) {
    throw Error(`Missing ${name}.js/.jsx/.ts/.tsx`);
  }

  return entry;
};

const getWebAppConfig = ({ cwd, dev, cssPrefix, outputPath }) => {
  const mainEntry = getEntry('main', true);
  const indexEntry = getEntry('index');
  const hasMainEntry = fs.existsSync(mainEntry);
  const appType = getAppType();
  const manifest = getManifest();
  const { id: manifestId, version: manifestVersion } = manifest;
  const appId = getFullAppId(manifestId);
  const publicPath = `/webapp-files/${appId}/${manifestVersion}/`;

  fs.ensureDirSync(outputPath);

  const config = [
    getServerConfig({
      indexEntry,
      outputPath,
      cwd,
      dev,
      cssPrefix,
      serverSideOnly: !hasMainEntry,
      publicPath,
      appId,
    }),
  ];

  if (hasMainEntry) {
    config.push(
      getClientConfig({
        mainEntry,
        outputPath,
        dev,
        cssPrefix,
        serverSideOnly: false,
        publicPath,
      })
    );
  } else if (appType === 'widget') {
    throw new Error('Missing main.js/.jsx/.ts/.tsx, required for widget apps');
  }

  const hooksEntry = getEntry('hooks', true);
  if (fs.existsSync(hooksEntry)) {
    config.push(
      getServerStandaloneEntryConfig({
        entry: hooksEntry,
        outputPath,
        outputFilename: 'hooks.js',
      })
    );
  }

  const headlessEntry = getEntry('headless', true);
  if (fs.existsSync(headlessEntry)) {
    config.push(
      getServerStandaloneEntryConfig({
        entry: headlessEntry,
        outputPath,
        outputFilename: 'headless.js',
      })
    );
  }

  return config;
};

const getRestAppConfig = ({ cwd, outputPath }) => {
  const indexEntry = getEntry('index');
  const manifest = getManifest();
  const appId = getFullAppId(manifest.id);
  const appVersion = manifest.version;
  const publicPath = `/webapp-files/${appId}/${appVersion}/`;

  return [
    getServerConfig({
      indexEntry,
      outputPath,
      cwd,
      publicPath,
      appId,
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
