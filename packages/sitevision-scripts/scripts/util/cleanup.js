const fs = require('fs-extra');
const properties = require('../../util/properties');

(function () {
  fs.existsSync(properties.SRC_TRANSPILED_DIR_PATH) &&
    fs.removeSync(properties.SRC_TRANSPILED_DIR_PATH);
})();
