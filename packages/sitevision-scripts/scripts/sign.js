const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');
const fetch = require('node-fetch');
const FormData = require('form-data');
const properties = require('../util/properties');
const chalk = require('chalk');

(function () {
  var questions = [
    {
      name: 'username',
      message: 'Username for developer.sitevision.se',
    },
    {
      name: 'password',
      type: 'password',
      message: 'Password for developer.sitevision.se',
    },
    {
      name: 'certificateName',
      message: 'Certificate name for signing (blank for default)',
    },
  ];

  const manifest = properties.getManifest();
  const fileName = manifest.id + '.zip';
  const zipPath = properties.DIST_DIR_PATH + '/' + fileName;

  inquirer.prompt(questions).then(async (answers) => {
    let url = `https://${encodeURIComponent(
      answers.username
    )}:${encodeURIComponent(
      answers.password
    )}@developer.sitevision.se/rest-api/appsigner/signapp`;

    if (answers.certificateName) {
      url += '?certificateName=' + answers.certificateName;
    }

    const formData = new FormData();
    formData.append('file', fs.createReadStream(zipPath), {
      filename: fileName,
      contentType: 'application/octet-stream',
    });

    try {
      const response = await fetch(url, {
        method: 'POST',
        body: formData,
        headers: formData.getHeaders(),
      });

      if (response.ok) {
        const signedFileNameAndPath = path.join(
          properties.DIST_DIR_PATH,
          `${manifest.id}-signed.zip`
        );

        const writer = fs.createWriteStream(signedFileNameAndPath, {
          autoClose: true,
        });
        response.body.pipe(writer);

        return console.log(
          `${chalk.green(
            'Signing successful, created:'
          )} ${signedFileNameAndPath}`
        );
      }

      if (response.status === 401) {
        console.log(
          `${chalk.red(
            'Signing failed:'
          )} Unauthorized, check username and password`
        );
      }
    } catch (err) {
      console.log(`${chalk.red('Signing failed with error:')} ${err}`);
    }
  });
})();
