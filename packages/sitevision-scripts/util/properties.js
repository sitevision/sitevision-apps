const path = require('path');

const CWD = process.cwd();
const DEV_PROPERTIES_PATH = path.resolve(CWD, '.dev_properties.json');
const MANIFEST_PATH = path.resolve(CWD, 'static', 'manifest.json');
const MANIFEST_LEGACY_PATH = path.resolve(CWD, 'src', 'manifest.json');
const DIST_DIR_PATH = path.resolve(CWD, 'dist');
const SRC_DIR_PATH = path.resolve(CWD, 'src');
const STATIC_DIR_PATH = path.resolve(CWD, 'static');
const BUILD_DIR_PATH = path.resolve(CWD, 'build');
const PACKAGE_JSON_PATH = path.resolve(CWD, 'package.json');

const requireIfExists = (...modules) => {
  for (let module of modules) {
    try {
      return require(module);
    } catch (error) {
      // pass and try next module
    }
  }
  throw 'None of the provided modules exist';
};

const getManifest = () => requireIfExists(MANIFEST_PATH, MANIFEST_LEGACY_PATH);

const getAppType = () => {
  const { type } = getManifest();
  return type.toLowerCase().startsWith('web') ? 'web' : 'rest';
};

const getTranspile = () => {
  const { sitevision_scripts_properties } = require(PACKAGE_JSON_PATH);
  if (sitevision_scripts_properties && typeof sitevision_scripts_properties.transpile === 'boolean') {
    return sitevision_scripts_properties.transpile;
  }

  const { transpile } = require(DEV_PROPERTIES_PATH);
  return transpile;
};

module.exports = {
  DEV_PROPERTIES_PATH,
  DIST_DIR_PATH,
  SRC_DIR_PATH,
  STATIC_DIR_PATH,
  BUILD_DIR_PATH,
  PACKAGE_JSON_PATH,
  getManifest,
  getDevProperties: () => require(DEV_PROPERTIES_PATH),
  getPackageJSON: () => require(PACKAGE_JSON_PATH),
  getAppType,
  getTranspile,
};
