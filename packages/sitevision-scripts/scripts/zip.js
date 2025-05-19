import zipdir from 'zip-dir';
import fs from 'fs';
import * as properties from '../util/properties.js';
import chalk from 'chalk';
import { getFullAppId } from './util/id.js';

(function () {
  if (!fs.existsSync(properties.DIST_DIR_PATH)) {
    fs.mkdirSync(properties.DIST_DIR_PATH);
  }

  const { id } = properties.getManifest();
  const appId = getFullAppId(id);
  zipdir(
    properties.BUILD_DIR_PATH,
    { saveTo: `${properties.DIST_DIR_PATH}/${appId}.zip` },
    (err) => {
      if (err) {
        return console.error(`${chalk.red('Compression failed:')}, ${err}`);
      }

      console.log(`${chalk.green('Compression successful')}`);
    }
  );
})();
