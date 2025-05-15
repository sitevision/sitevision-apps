import inquirer from 'inquirer';
import path from 'path';
import fs from 'fs';
import fetch from 'node-fetch';
import FormData from 'form-data';
import * as properties from '../util/properties.js';
import chalk from 'chalk';

(function () {
  var questions = [
    {
      name: 'username',
      message: 'Username for developer.sitevision.se',
      validate: (input) => (input.length ? true : 'Please enter your username'),
    },
    {
      name: 'password',
      type: 'password',
      message: 'Password for developer.sitevision.se',
      validate: (input) => (input.length ? true : 'Please enter your password'),
    },
    {
      name: 'certificateName',
      message: 'Certificate name for signing (blank for default)',
    },
  ];

  const manifest = properties.getManifest();
  const fileName = manifest.id + '.zip';
  const zipPath = properties.DIST_DIR_PATH + '/' + fileName;

  if (!fs.existsSync(zipPath)) {
    console.log('You have to run "npm run build" before running this script');
    return;
  }

  inquirer.prompt(questions).then(async (answers) => {
    if (!answers.username || !answers.password) {
      console.log(chalk.red('Invalid user name or password'));
      return null;
    }

    let url = `https://developer.sitevision.se/rest-api/appsigner/signapp`;

    if (answers.certificateName) {
      url += '?certificateName=' + answers.certificateName;
    }

    const formData = new FormData();
    formData.append('file', fs.createReadStream(zipPath), {
      filename: fileName,
      contentType: 'application/octet-stream',
    });
    var options = {
      method: 'POST',
      body: formData,
      headers: formData.getHeaders({
        Authorization: `Basic ${Buffer.from(
          answers.username + ':' + answers.password,
        ).toString('base64')}`,
      }),
    };

    if (process.env.HTTPS_PROXY) {
      console.log(`using ${process.env.HTTPS_PROXY} as HTTPS_PROXY`);
      const HttpsProxyAgent = require('https-proxy-agent');
      const proxyAgent = new HttpsProxyAgent(process.env.HTTPS_PROXY);
      options.agent = proxyAgent;
    }
    try {
      const response = await fetch(url, options);

      if (response.ok) {
        const signedFileNameAndPath = path.join(
          properties.DIST_DIR_PATH,
          `${manifest.id}-signed.zip`,
        );

        const writer = fs.createWriteStream(signedFileNameAndPath, {
          autoClose: true,
        });
        response.body.pipe(writer);

        return console.log(
          `${chalk.green(
            'Signing successful, created:',
          )} ${signedFileNameAndPath}`,
        );
      }

      if (response.status === 401) {
        console.log(
          `${chalk.red(
            'Signing failed:',
          )} Unauthorized, check username and password`,
        );
      }
    } catch (err) {
      console.log(`${chalk.red('Signing failed with error:')} ${err}`);
    }
  });
})();
