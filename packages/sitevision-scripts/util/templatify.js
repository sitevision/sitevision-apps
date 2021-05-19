const fs = require('fs-extra');
const squirrelly = require('squirrelly');

const templatifyFile = (filePath, data, outputPath) => {
  const file = fs.readFileSync(filePath, 'utf8');
  const fileContents = squirrelly.Render(file, data);
  fs.writeFileSync(outputPath || filePath, fileContents, 'utf8');
};

module.exports = {
  templatifyFile
};
