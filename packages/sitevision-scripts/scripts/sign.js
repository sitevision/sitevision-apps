import inquirer from 'inquirer';
import path from 'path';
import fs from 'fs';
import fetch from 'node-fetch';
import FormData from 'form-data';
import * as properties from '../util/properties.js';
import chalk from 'chalk';
import { getFullAppId } from './util/id.js';
import {
  getSigningErrorCodeFromResponse,
  printSigningFailure,
  writeSignedZipFromResponse,
} from './util/signHelper.js';

(function () {
  let questions = [
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
  const appId = getFullAppId(manifest.id);
  const fileName = appId + '.zip';
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

    try {
      const response = await fetch(url, {
        method: 'POST',
        body: formData,
        headers: formData.getHeaders({
          Authorization: `Basic ${Buffer.from(
            answers.username + ':' + answers.password
          ).toString('base64')}`,
        }),
      });

      if (!response.ok) {
        const code = await getSigningErrorCodeFromResponse(response);
        printSigningFailure({
          status: response.status,
          statusText: response.statusText,
          code,
          certificateName: answers.certificateName,
        });
        return;
      }

      const contentType = response.headers.get('content-type') || '';
      if (contentType.includes('application/json')) {
        const code =
          (await getSigningErrorCodeFromResponse(response)) ||
          'UNEXPECTED_JSON_RESPONSE';
        printSigningFailure({
          status: response.status,
          statusText: response.statusText,
          code,
          certificateName: answers.certificateName,
        });
        return;
      }

      if (!response.body) {
        printSigningFailure({
          status: response.status,
          statusText: response.statusText,
          code: 'EMPTY_RESPONSE',
          certificateName: answers.certificateName,
        });
        return;
      }

      const signedFileNameAndPath = path.join(
        properties.DIST_DIR_PATH,
        `${appId}-signed.zip`
      );

      await writeSignedZipFromResponse({
        response,
        signedFileNameAndPath,
      });

      console.log(
        `${chalk.green(
          'Signing successful, created:'
        )} ${signedFileNameAndPath}`
      );
      return;
    } catch (err) {
      console.log(`${chalk.red('Signing failed with error:')} ${err}`);
    }
  });
})();
