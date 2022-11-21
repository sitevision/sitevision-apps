import fs from 'fs-extra';
import * as properties from '../../util/properties.js';

(function () {
  fs.existsSync(properties.BUILD_DIR_PATH) &&
    fs.removeSync(properties.BUILD_DIR_PATH);
})();
