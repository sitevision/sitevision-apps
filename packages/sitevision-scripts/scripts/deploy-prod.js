const inquirer = require('inquirer');
const fs = require('fs');
const request = require('request');
const properties = require('../util/properties');
const queryString = require('querystring');
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
  inquirer.prompt(questions).then((answers) => {
    const url = `https://${encodeURIComponent(
      answers.username
    )}:${encodeURIComponent(answers.password)}@${
      answers.domain
    }/rest-api/1/0/${queryString.escape(
      answers.siteName
    )}/Addon%20Repository/${queryString.escape(
      answers.addonName
    )}/${restEndPoint}`;
    const formData = {
      file: fs.createReadStream(zipPath),
    };

    request.post(
      { url: url, formData: formData },
      (err, httpResponse, body) => {
        if (err) {
          return console.error(`${chalk.red('Upload failed:')}, ${err}`);
        }

        if (httpResponse.statusCode === 200) {
          return console.log(
            `${chalk.green('Upload successful:')} \n${JSON.stringify(
              JSON.parse(body),
              null,
              2
            )}`
          );
        }

        if (body) {
          console.log(
            `${chalk.red('Upload failed:')} \n${JSON.stringify(
              JSON.parse(body),
              null,
              2
            )}`
          );
        } else {
          console.log(
            `${chalk.red('Upload failed, status code:')} ${
              httpResponse.statusCode
            }`
          );
        }
      }
    );
  });
})();
