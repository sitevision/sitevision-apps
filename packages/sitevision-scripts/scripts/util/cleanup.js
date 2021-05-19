const fs = require('fs-extra');
const properties = require('../../util/properties');

(function () {
  fs.existsSync(properties.BUILD_DIR_PATH) &&
    fs.removeSync(properties.BUILD_DIR_PATH);
})();
