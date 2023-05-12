import process from 'process';
import path from 'path';
import fs from 'fs-extra';
import { getServerConfig } from './webpack.config.server.js';
import { getClientConfig } from './webpack.config.client.js';
import { getServerStandaloneEntryConfig } from './webpack.config.server-standalone-entry.js';

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

  const config = [
    getServerConfig({
      indexEntry,
      outputPath,
      cwd,
      dev,
      cssPrefix,
      serverSideOnly: hasMainEntry,
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
      })
    );
  } else {
    fs.writeFileSync(outputPath + '/main.js', '');
  }

  const hooksEntry = getEntry('hooks', true);
  if (fs.existsSync(hooksEntry)) {
    config.push(
      getServerStandaloneEntryConfig({ entry: hooksEntry, outputPath })
    );
  }

  const headlessEntry = getEntry('headless', true);
  if (fs.existsSync(headlessEntry)) {
    config.push(
      getServerStandaloneEntryConfig({ entry: headlessEntry, outputPath })
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
