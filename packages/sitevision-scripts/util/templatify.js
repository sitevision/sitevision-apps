import fs from 'fs-extra';
import handlebars from 'handlebars';
import prettier from 'prettier';

export const templatifyFile = (filePath, data, outputPath) => {
  const file = fs.readFileSync(filePath, 'utf8');
  const template = handlebars.compile(file);

  if (filePath.endsWith('.template')) {
    fs.removeSync(filePath);
    filePath = filePath.replace('.template', '');
  }

  outputPath = outputPath || filePath;

  let convertedContent = template(data);
  if (prettier.getFileInfo.sync(outputPath).inferredParser) {
    convertedContent = prettier.format(convertedContent, {
      filepath: outputPath,
    });
  }

  fs.writeFileSync(outputPath, convertedContent, 'utf8');
};
