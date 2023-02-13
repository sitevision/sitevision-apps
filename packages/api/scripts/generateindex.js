import fs from 'fs-extra';
import path from 'path';

const INVALID_NAMES = ['.DS_Store'];

const generateIndex = async (cwd) => {
  let indexFileContent = '';
  for (const folder of ['server', 'client', 'common']) {
    const files = await fs.readdir(path.join(cwd, 'build', folder));
    indexFileContent += files
      .filter((file) => !INVALID_NAMES.includes(file))
      .map((file) => {
        const name = file.replace(/\.js$/, '');
        return `import './${folder}/${name}';`;
      })
      .join('\n');
    indexFileContent += '\n\n';
  }

  await fs.writeFile(path.join(cwd, 'build', 'index.d.ts'), indexFileContent);
};

generateIndex(process.cwd());
