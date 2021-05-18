#!/usr/bin/env node
const create = require('./createSitevisionApp').create;

const currentNodeVersion = process.versions.node;
const semver = currentNodeVersion.split('.');
const major = semver[0];

if (major < 10) {
  console.error(
    'You are running Node ' +
      currentNodeVersion +
      '.\n' +
      'Create Sitevision App requires Node 10 or higher. \n' +
      'Please update your version of Node.'
  );
  process.exit(1);
}

const appName = process.argv[2];
const packagePath = process.argv[3];

create(appName, packagePath);
