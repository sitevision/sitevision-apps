import fs from 'fs-extra';
import handlebars from 'handlebars';

export const templatifyFile = (filePath, data, outputPath) => {
  const file = fs.readFileSync(filePath, 'utf8');
  const template = handlebars.compile(file);
  fs.writeFileSync(outputPath || filePath, template(data), 'utf8');
};
