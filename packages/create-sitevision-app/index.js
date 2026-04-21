#!/usr/bin/env node
import { create } from './src/createSitevisionApp.js';

const currentNodeVersion = process.versions.node;
// Node versions are strings like "20.11.1", so compare numeric parts instead of the raw string.
const [major, minor] = currentNodeVersion.split('.').map(Number);

if (major < 20 || (major === 20 && minor < 9)) {
  console.error(
    'You are running Node ' +
      currentNodeVersion +
      '.\n' +
      'Create Sitevision App requires Node 20.9 or higher. \n' +
      'Please update your version of Node.'
  );
  process.exit(1);
}

const appName = process.argv[2];
const packagePath = process.argv[3];

create(appName, packagePath);
