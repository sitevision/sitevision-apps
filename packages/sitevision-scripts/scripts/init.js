import fs from 'fs-extra';
import path from 'path';
import inquirer from 'inquirer';
import chalk from 'chalk';
import * as properties from '../util/properties.js';
import { templatifyFile } from '../util/templatify.js';
import { walkFiles } from '../util/walkFiles.js';
import { questions } from '../config/setup-questions.js';
import spawn from 'cross-spawn';
import { getDirname } from '../util/dirname.js';

const getManifestType = (type) => {
  if (type.startsWith('web')) {
    return 'WebApp';
  }

  if (type.startsWith('widget')) {
    return 'Widget';
  }

  if (type.startsWith('rest')) {
    return 'RESTApp';
  }

  throw new Error(`Unknown app type: ${type}`);
};

const copyTemplateFiles = (type, options) => {
  console.log('Copying template files');
  // Widgets and WebApps use the same template setup, no need to duplicate folder structure
  const templateType = type.replace(/widget/, 'web');
  const templatePath = path.resolve(
    getDirname(import.meta.url),
    '..',
    'template'
  );

  fs.copySync(path.resolve(templatePath, templateType), '.');
  fs.copySync(path.resolve(templatePath, 'common'), '.');

  if (!options.clientRendering) {
    const mainName = options.typescript ? 'main.tsx' : 'main.js';
    fs.removeSync(`src/${mainName}`);
  }

  // Can be used to replace stuff in the templates,
  // one option would be to gather info for the manifest and populate it
  walkFiles('.', (filePath) => templatifyFile(filePath, options), [
    'node_modules',
  ]);

  // Can't name the file .gitignore https://github.com/npm/npm/issues/1862
  fs.moveSync('gitignore', '.gitignore');
};

const writePackageJson = (content) => {
  fs.writeFileSync(
    properties.PACKAGE_JSON_PATH,
    JSON.stringify(content, null, 2)
  );
};

const getCommonPackageProperties = () => {
  const appPackage = properties.getPackageJson();
  appPackage.scripts = {
    build: 'sitevision-scripts build',
    'create-addon': 'sitevision-scripts create-addon',
    'deploy-prod': 'sitevision-scripts deploy-prod',
    sign: 'sitevision-scripts sign',
    dev: 'sitevision-scripts dev',
    'setup-dev-properties': 'sitevision-scripts setup-dev-properties',
    test: 'sitevision-scripts test',
  };

  return appPackage;
};

const updatePackageJsonReact = (typescript) => {
  const appPackage = getCommonPackageProperties();
  const extendsArr = [
    '@sitevision/eslint-config-recommended',
    '@sitevision/eslint-config-webapp-react',
  ];

  if (typescript) {
    extendsArr.push('@sitevision/eslint-config-typescript');
  }

  appPackage.eslintConfig = {
    extends: extendsArr,
  };

  appPackage.prettier = {};
  appPackage.postcss = {
    plugins: ['autoprefixer'],
  };

  writePackageJson(appPackage);
};

const updatePackageJsonBundledRest = (typescript) => {
  const appPackage = getCommonPackageProperties();
  const extendsArr = ['@sitevision/eslint-config-recommended'];

  if (typescript) {
    extendsArr.push('@sitevision/eslint-config-typescript');
  }

  appPackage.eslintConfig = {
    extends: extendsArr,
  };

  appPackage.prettier = {};

  writePackageJson(appPackage);
};

const installWebAppDependencies = (appPath) => {
  spawn.sync(
    'npm',
    ['install', 'react@17', 'react-dom@17', '@sitevision/api'],
    {
      stdio: 'inherit',
      cwd: appPath,
    }
  );
};

const installRestAppDependencies = (appPath) => {
  spawn.sync('npm', ['install', '@sitevision/api'], {
    stdio: 'inherit',
    cwd: appPath,
  });
};

const updatePackageJsonLegacy = (transpile) => {
  const appPackage = getCommonPackageProperties();

  appPackage.sitevision_scripts_properties = {
    transpile,
  };

  writePackageJson(appPackage);
};

const simplifyVersionNumber = (rawVersion) =>
  rawVersion
    .match(/(\d+)\.(\d+)\.(\d+)-?([a-zA-Z-\d.]*)\+?([a-zA-Z-\d.]*)/)
    .splice(1, 3)
    .join('.');

export default async ({ appPath, appName }) => {
  console.clear();

  inquirer
    .prompt(questions)
    .then(
      ({
        type,
        transpile,
        domain,
        siteName,
        addonName,
        username,
        password,
        typescript,
        serverSideOnly,
      }) => {
        console.clear();

        fs.writeFileSync(
          path.resolve(appPath, properties.DEV_PROPERTIES_PATH),
          JSON.stringify(
            { domain, siteName, addonName, username, password },
            null,
            2
          )
        );

        type = typescript ? `${type}-typescript` : type;

        console.log(`Initializing Sitevision ${type} app`, appName);
        const templateOptions = {
          appName,
        };

        switch (type) {
          case 'web-react':
          case 'web-react-typescript':
          case 'widget-react':
          case 'widget-react-typescript': {
            updatePackageJsonReact(typescript);
            installWebAppDependencies(appPath);
            templateOptions.typescript = typescript;
            templateOptions.clientRendering = !serverSideOnly;
            templateOptions.reactVersion = simplifyVersionNumber(
              properties.getPackageJson().dependencies.react
            );
            templateOptions.manifestType = getManifestType(type);
            templateOptions.widget = type.startsWith('widget');
            break;
          }
          case 'rest-bundled':
          case 'rest-bundled-typescript': {
            updatePackageJsonBundledRest(typescript);
            installRestAppDependencies(appPath);
            break;
          }
          default:
            templateOptions.clientRendering = true;
            updatePackageJsonLegacy(transpile);
        }

        copyTemplateFiles(type, templateOptions);

        console.log(
          'Your app has been created just',
          chalk.blue(`cd ${appName}`)
        );
      }
    );
};
