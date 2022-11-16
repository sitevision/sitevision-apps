import babelJest from 'babel-jest';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

export default babelJest.createTransformer({
  presets: [require.resolve('@sitevision/babel-preset-react-server')],
  babelrc: false,
  configFile: false,
});
