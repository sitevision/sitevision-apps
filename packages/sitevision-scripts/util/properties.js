import path from 'path';
import fs from 'fs-extra';

const CWD = process.cwd();
export const DEV_PROPERTIES_PATH = path.resolve(CWD, '.dev_properties.json');
const MANIFEST_PATH = path.resolve(CWD, 'manifest.json');
const MANIFEST_LEGACY_PATH = path.resolve(CWD, 'static', 'manifest.json');
const MANIFEST_LEGACY_2_PATH = path.resolve(CWD, 'src', 'manifest.json');
export const DIST_DIR_PATH = path.resolve(CWD, 'dist');
export const SRC_DIR_PATH = path.resolve(CWD, 'src');
export const STATIC_DIR_PATH = path.resolve(CWD, 'static');
export const BUILD_DIR_PATH = path.resolve(CWD, 'build');
export const PACKAGE_JSON_PATH = path.resolve(CWD, 'package.json');

const VALID_CUSTOM_PROPERTIES_NAMES = [
  'transpilePackages', // array of package names within node_modules to transpile
  'babel', // babel-loader options override
  'transpile', // transpile with babel (applicable for legacy apps)
];

const requireIfExists = (...modules) => {
  for (let module of modules) {
    try {
      return getFileAsJson(module);
    } catch (error) {
      // pass and try next module
    }
  }
  throw 'None of the provided modules exist';
};

export const getManifest = () =>
  requireIfExists(MANIFEST_PATH, MANIFEST_LEGACY_PATH, MANIFEST_LEGACY_2_PATH);

export const getAppType = () => {
  const { type } = getManifest();
  const lowerCasedType = type.toLowerCase();

  if (lowerCasedType.startsWith('web')) {
    return 'web';
  }

  if (lowerCasedType.startsWith('rest')) {
    return 'rest';
  }

  if (lowerCasedType.startsWith('widget')) {
    return 'widget';
  }

  throw new Error(`Unknown app type: ${type}`);
};

export const getTranspile = () => {
  const { sitevision_scripts_properties } = getFileAsJson(PACKAGE_JSON_PATH);
  if (
    sitevision_scripts_properties &&
    typeof sitevision_scripts_properties.transpile === 'boolean'
  ) {
    return sitevision_scripts_properties.transpile;
  }

  const { transpile } = getFileAsJson(DEV_PROPERTIES_PATH);
  return transpile;
};

export const getCustomProperty = (name) => {
  if (!VALID_CUSTOM_PROPERTIES_NAMES.includes(name)) {
    throw new Error(`Invalid custom property name: ${name}`);
  }

  if (name === 'transpile') {
    return getTranspile();
  }

  const { sitevision_scripts_properties, babel } =
    getFileAsJson(PACKAGE_JSON_PATH);

  // Legacy handling of babel property
  if (name === 'babel' && babel) {
    return babel;
  }

  if (sitevision_scripts_properties && sitevision_scripts_properties[name]) {
    return sitevision_scripts_properties[name];
  }
};

const getFileAsJson = (file) => {
  const fileContent = fs.readFileSync(file);
  return JSON.parse(fileContent);
};

export const getDevProperties = () => getFileAsJson(DEV_PROPERTIES_PATH);
export const getPackageJson = () => getFileAsJson(PACKAGE_JSON_PATH);
