const path = require('path');
const fs = require('fs');

const walkFiles = (dir, callback, excludes) => {
  const files = fs.readdirSync(dir, {
    withFileTypes: true
  });
  files.forEach((file) => {
    if (file.isDirectory()) {
      if (!excludes.includes(file.name)) {
        walkFiles(path.resolve(dir, file.name), callback, excludes);
      }
    } else {
      callback(path.resolve(dir, file.name));
    }
  });
};

module.exports = { walkFiles };
