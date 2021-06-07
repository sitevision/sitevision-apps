const fs = require('fs-extra');
const handlebars = require('handlebars');

const templatifyFile = (filePath, data, outputPath) => {
  const file = fs.readFileSync(filePath, 'utf8');
  const template = handlebars.compile(file);
  fs.writeFileSync(outputPath || filePath, template(data), 'utf8');
};

module.exports = {
  templatifyFile,
};
