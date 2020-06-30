const fs = require('fs-extra');
const properties = require('../util/properties');

(function () {
  if (fs.existsSync(properties.STATIC_DIR_PATH)) {
    fs.copySync(properties.STATIC_DIR_PATH, properties.BUILD_DIR_PATH);
  }

  if (!properties.getTranspile()) {
    fs.copySync(properties.SRC_DIR_PATH, properties.BUILD_DIR_PATH);
  }
})();
