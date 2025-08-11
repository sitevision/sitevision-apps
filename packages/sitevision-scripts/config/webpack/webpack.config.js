import process from 'process';
import path from 'path';
import fs from 'fs-extra';
import { getServerConfig } from './webpack.config.server.js';
import { getClientConfig } from './webpack.config.client.js';
import { getServerStandaloneEntryConfig } from './webpack.config.server-standalone-entry.js';
import { getAppType, getManifest } from '../../util/properties.js';
import semver from 'semver';
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
  const {
    requiredSitevisionVersion,
    id: manifestId,
    version: manifestVersion,
  } = manifest;
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
  } else if (
    !requiredSitevisionVersion ||
    semver.lt(requiredSitevisionVersion, '2025.07.1', { loose: true })
  ) {
    // Sitevision 2025.07.1 and earlier does not support empty main.js
    fs.writeFileSync(outputPath + '/main.js', '');
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
