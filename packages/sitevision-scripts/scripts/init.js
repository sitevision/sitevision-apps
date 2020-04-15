const fs = require('fs-extra');
const path = require('path');
const inquirer = require('inquirer');
const chalk = require('chalk');
const properties = require('../util/properties');
const templatifyFile = require('../util/templatify').templatifyFile;
const walkFiles = require('../util/walkFiles').walkFiles;

const copyTemplateFiles = (appName, type) => {
  console.log('Copying template files');
  fs.copySync(path.resolve(__dirname, '..', 'template', type), '.');

  // Can be used to replace stuff in the templates,
  // one option would be to gather info for the manifest and populate it
  walkFiles('.', (filePath) => templatifyFile(filePath, { appName }), [
    'node_modules',
  ]);

  // Can't name the file .gitignore https://github.com/npm/npm/issues/1862
  fs.moveSync('gitignore', '.gitignore');
};

const updatePackageJSON = () => {
  const packageJSONPath = path.resolve('.', 'package.json');
  const appPackage = require(packageJSONPath);
  appPackage.scripts = {
    build: 'sitevision-scripts build',
    'create-addon': 'sitevision-scripts create-addon',
    'deploy-prod': 'sitevision-scripts deploy-prod',
    sign: 'sitevision-scripts sign',
  };
  fs.writeFileSync(packageJSONPath, JSON.stringify(appPackage, null, 2));
};

module.exports = async ({ appPath, appName }) => {
  const questions = [
    {
      name: 'type',
      message: 'What type of app do you want to create?',
      type: 'list',
      choices: [
        { name: 'WebApp', value: 'web' },
        { name: 'RESTApp', value: 'rest' },
      ],
    },
    {
      name: 'domain',
      message: 'Development domain (www.example.com)',
    },
    {
      name: 'siteName',
      message: 'Development site name',
    },
    {
      name: 'addonName',
      message: 'Development addon name',
    },
    {
      name: 'username',
      message: 'Username for development site',
    },
    {
      name: 'password',
      type: 'password',
      message: 'Password for development site',
    },
    {
      name: 'transpile',
      message: 'Would you like to transpile using babel?',
      type: 'list',
      choices: [
        { name: 'Yes', value: true },
        { name: 'No', value: false },
      ],
    },
  ];

  console.clear();

  inquirer.prompt(questions).then((answers) => {
    console.clear();

    fs.writeFileSync(
      path.resolve(appPath, properties.DEV_PROPERTIES),
      JSON.stringify(answers)
    );
    console.log(`Initializing SiteVision ${answers.type} app`, appName);
    copyTemplateFiles(appName, answers.type);
    updatePackageJSON();
    console.log('Your app has been created just', chalk.blue(`cd ${appName}`));
  });
};
