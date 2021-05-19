const inquirer = require('inquirer');
const fs = require('fs');
const request = require('request');
const properties = require('../util/properties');
const chalk = require('chalk');

(function() {
  var questions = [
    {
      name: 'username',
      message: 'Username for developer.sitevision.se'
    },
    {
      name: 'password',
      type: 'password',
      message: 'Password for developer.sitevision.se'
    },
    {
      name: 'certificateName',
      message: 'Certificate name for signing (blank for default)'
    }
  ];

  const manifest = properties.getManifest();
  const fileName = manifest.id + '.zip';
  const zipPath = properties.DIST_DIR_PATH + '/' + fileName;

  inquirer.prompt(questions).then((answers) => {
    let url = `https://${encodeURIComponent(
      answers.username
    )}:${encodeURIComponent(
      answers.password
    )}@developer.sitevision.se/rest-api/appsigner/signapp`;
    const formData = {
      file: {
        value: fs.createReadStream(zipPath),
        options: {
          filename: fileName,
          contentType: 'application/octet-stream'
        }
      }
    };

    if (answers.certificateName) {
      url += '?certificateName=' + answers.certificateName;
    }

    request.post(
      { url: url, formData: formData, encoding: null },
      (err, httpResponse, body) => {
        if (err) {
          return console.error(`${chalk.red('Signing failed:')}, ${err}`);
        }

        if (httpResponse.statusCode === 200) {
          var signedFileNameAndPath =
            properties.DIST_DIR_PATH + '/' + manifest.id + '-signed.zip';

          fs.writeFileSync(signedFileNameAndPath, body);
          return console.log(
            `${chalk.green(
              'Signing successful, created:'
            )} ${signedFileNameAndPath}`
          );
        }

        if (httpResponse.statusCode === 401) {
          return console.log(
            `${chalk.red(
              'Signing failed:'
            )} Unauthorized, check username and password`
          );
        }

        console.log(
          `${chalk.red('Signing failed with statusCode:')} ${
            httpResponse.statusCode
          }  message: ${httpResponse.statusMessage}`
        );
      }
    );
  });
})();
