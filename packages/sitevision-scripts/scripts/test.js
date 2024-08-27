import fs from 'fs';
import jest from 'jest';
import path from 'path';
import { execSync } from 'child_process';
import { getDirname } from '../util/dirname.js';

let setupTestFile = path.resolve(process.cwd(), 'src', 'setupTests.ts');

if (!fs.existsSync(setupTestFile)) {
  // Fallback to js file
  setupTestFile = path.resolve(process.cwd(), 'src', 'setupTests.js');
}

const __dirname = getDirname(import.meta.url);

const config = {
  roots: ['<rootDir>/src'],
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      path.resolve(__dirname, '..', 'config', 'jest', 'fileMock.js'),
    '\\.(css|sass|scss)$': 'identity-obj-proxy',
    '\\?raw$': 'identity-obj-proxy',
  },
  transform: {
    '^.+\\.(js|jsx|mjs|cjs|ts|tsx)$': path.resolve(
      __dirname,
      '..',
      'config',
      'jest',
      'babelTransform.js'
    ),
  },
  setupFilesAfterEnv: fs.existsSync(setupTestFile) ? [setupTestFile] : [],
};

function isInGitRepository() {
  try {
    execSync('git rev-parse --is-inside-work-tree', { stdio: 'ignore' });
    return true;
  } catch (e) {
    return false;
  }
}

let argv = process.argv.slice(2);
argv.push('--config', JSON.stringify(config));

if (
  !process.env.CI &&
  argv.indexOf('--watchAll') === -1 &&
  argv.indexOf('--watchAll=false') === -1
) {
  argv.push(isInGitRepository() ? '--watch' : '--watchAll');
}

jest.run(argv);
