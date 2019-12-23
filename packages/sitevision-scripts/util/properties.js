const path = require('path');

const CWD = process.cwd();
const DEV_PROPERTIES = path.resolve(CWD, '.dev_properties.json');
const MANIFEST = path.resolve(CWD, 'src', 'manifest.json');
const DIST_DIR_PATH = path.resolve(CWD, 'dist');
const SRC_DIR_PATH = path.resolve(CWD, 'src');

module.exports = {
  DEV_PROPERTIES: DEV_PROPERTIES,
  MANIFEST: MANIFEST,
  DIST_DIR_PATH: DIST_DIR_PATH,
  SRC_DIR_PATH: SRC_DIR_PATH,
  getDevProperties: () => require(DEV_PROPERTIES),
  getManifest: () => require(MANIFEST)
};
