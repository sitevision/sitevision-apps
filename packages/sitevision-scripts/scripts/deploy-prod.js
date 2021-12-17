const inquirer = require('inquirer');
const fs = require('fs');
const FormData = require('form-data');
const fetch = require('node-fetch');
const properties = require('../util/properties');
const chalk = require('chalk');

(function () {
  const props = properties.getDevProperties();
  const questions = [
    {
      name: 'domain',
      message: 'Production site domain (www.example.com)',
    },
    {
      name: 'siteName',
      default: props.siteName,
      message: 'Production site name',
    },
    {
      name: 'addonName',
      default: props.addonName,
      message: 'Production site addon name',
    },
    {
      name: 'username',
      default: props.username,
      message: 'Username for production site',
    },
    {
      name: 'password',
      type: 'password',
      message: 'Password for production site',
    },
  ];

  const manifest = properties.getManifest();
  const zipPath = properties.DIST_DIR_PATH + '/' + manifest.id + '-signed.zip';
  if (!fs.existsSync(zipPath)) {
    console.error(`${chalk.red('No signed zip file available for upload')}`);
    console.log();
    console.log(
      'Create a zip file by running command',
      chalk.blue('npm run zip'),
      'and',
      chalk.blue('npm run sign')
    );
    return;
  }

  const restEndPoint =
    properties.getAppType() === 'rest' ? 'restAppImport' : 'webAppImport';
  inquirer.prompt(questions).then(async (answers) => {
    const url = `https://${encodeURIComponent(
      answers.username
    )}:${encodeURIComponent(answers.password)}@${
      answers.domain
    }/rest-api/1/0/${encodeURIComponent(
      answers.siteName
    )}/Addon%20Repository/${encodeURIComponent(
      answers.addonName
    )}/${restEndPoint}`;
    const formData = new FormData();
    formData.append('file', fs.createReadStream(zipPath));

    try {
      const response = await fetch(url, {
        method: 'POST',
        body: formData,
        headers: formData.getHeaders(),
      });
      const json = await response.json();

      if (response.ok) {
        return console.log(
          `${chalk.green('Upload successful:')} \n${JSON.stringify(
            json,
            null,
            2
          )}`
        );
      }

      console.log(
        `${chalk.red('Upload failed:')} \n${JSON.stringify(json, null, 2)}`
      );
    } catch (err) {
      console.log(`${chalk.red('Upload failed, status code:')} ${err}`);
    }
  });
})();
