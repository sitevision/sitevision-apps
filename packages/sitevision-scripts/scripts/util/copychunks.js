const fs = require('fs-extra');
const path = require('path');

module.exports = {
  copyChunksToResources: (buildDir) => {
    const resourceDir = path.join(buildDir, 'resource');
    const files = fs.readdirSync(buildDir);

    const chunks = files.filter((fileName) => /^chunk-/.test(fileName));

    if (chunks.length) {
      fs.ensureDirSync(resourceDir);
    }

    chunks.map((chunk) =>
      fs.moveSync(path.join(buildDir, chunk), path.join(resourceDir, chunk), {
        overwrite: true,
      })
    );
  },
};
