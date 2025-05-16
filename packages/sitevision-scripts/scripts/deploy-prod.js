import inquirer from 'inquirer';
import fs from 'fs';
import FormData from 'form-data';
import fetch from 'node-fetch';
import * as properties from '../util/properties.js';
import chalk from 'chalk';
import { getImportEndpoint, handleResponse } from './util/requests.js';

(function () {
  const props = properties.getDevProperties();
  const questions = [
    {
      name: 'domain',
      message: 'Production site domain (www.example.com)',
      default: process.env.DOMAIN,
      when: !process.env.DOMAIN,
    },
    {
      name: 'siteName',
      default: process.env.SITE_NAME || props.siteName,
      message: 'Production site name',
      when: !process.env.SITE_NAME,
    },
    {
      name: 'addonName',
      default: process.env.ADDON_NAME || props.addonName,
      message: 'Production site addon name',
      when: !process.env.ADDON_NAME,
    },
    {
      name: 'username',
      default: process.env.USERNAME || props.username,
      message: 'Username for production site',
      when: !process.env.USERNAME,
    },
    {
      name: 'password',
      type: 'password',
      default: process.env.PASSWORD,
      message: 'Password for production site',
      when: !process.env.PASSWORD,
    },
  ];

  const manifest = properties.getManifest();
  const zipPath = properties.DIST_DIR_PATH + '/' + manifest.id + '-signed.zip';
  if (!fs.existsSync(zipPath)) {
    console.error(`${chalk.red('No signed zip file available for upload')}`);
    console.log();
    console.log(
      'Create a zip file by running command',
      chalk.blue('npm run build'),
      'and',
      chalk.blue('npm run sign'),
    );
    return;
  }

  const restEndPoint = getImportEndpoint(properties.getAppType());
  inquirer.prompt(questions).then(async (answers) => {
    const url = `https://${answers.domain}/rest-api/1/0/${encodeURIComponent(
      answers.siteName,
    )}/Addon%20Repository/${encodeURIComponent(
      answers.addonName,
    )}/${restEndPoint}`;
    const formData = new FormData();
    formData.append('file', fs.createReadStream(zipPath));

    try {
      const response = await fetch(url, {
        method: 'POST',
        body: formData,
        headers: formData.getHeaders({
          Authorization: `Basic ${Buffer.from(
            answers.username + ':' + answers.password,
          ).toString('base64')}`,
        }),
      });

      handleResponse({ response, operation: 'Upload' });
    } catch (err) {
      console.log(`${chalk.red('Upload failed, status code:')} ${err}`);
    }
  });
})();
