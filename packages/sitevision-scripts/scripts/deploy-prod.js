import inquirer from 'inquirer';
import fs from 'fs';
import FormData from 'form-data';
import fetch from 'node-fetch';
import * as properties from '../util/properties.js';
import chalk from 'chalk';
import { getImportEndpoint, handleResponse } from './util/requests.js';
import { getFullAppId } from './util/id.js';
import minimist from 'minimist';

const activateCustomModuleExecutable = async (
  id,
  baseUrl,
  username,
  password
) => {
  const activateUrl = `${baseUrl}/activateCustomModuleExecutable`;
  try {
    const activateResponse = await fetch(activateUrl, {
      method: 'PUT',
      body: JSON.stringify({
        customModuleExecutableId: id,
      }),
      headers: {
        Authorization: `Basic ${Buffer.from(username + ':' + password).toString(
          'base64'
        )}`,
      },
    });

    handleResponse({
      response: activateResponse,
      operation: 'Activate Executable',
    });
  } catch (err) {
    console.error(`${chalk.red('Activation failed, status code:')}, ${err}`);
  }
};

(function () {
  const args = minimist(process.argv, {
    alias: { a: 'activate' },
    default: {
      activate: false,
    },
    boolean: ['activate'],
  });

  let props;
  try {
    props = properties.getDevProperties();
  } catch (error) {
    // If properties are not found, we can still run the script
    // In a CI environment, the properties are not needed
    // and the script will use the environment variables instead
    props = {};
  }

  const {
    DEPLOY_DOMAIN,
    DEPLOY_SITE_NAME,
    DEPLOY_ADDON_NAME,
    DEPLOY_USERNAME,
    DEPLOY_PASSWORD,
  } = process.env;

  const questions = [
    {
      name: 'domain',
      message: 'Production site domain (www.example.com)',
      when: !DEPLOY_DOMAIN,
    },
    {
      name: 'siteName',
      default: props.siteName,
      message: 'Production site name',
      when: !DEPLOY_SITE_NAME,
    },
    {
      name: 'addonName',
      default: props.addonName,
      message: 'Production site addon name',
      when: !DEPLOY_ADDON_NAME,
    },
    {
      name: 'username',
      default: props.username,
      message: 'Username for production site',
      when: !DEPLOY_USERNAME,
    },
    {
      name: 'password',
      type: 'password',
      message: 'Password for production site',
      when: !DEPLOY_PASSWORD,
    },
  ];

  const manifest = properties.getManifest();
  const appId = getFullAppId(manifest.id);
  const zipPath = properties.DIST_DIR_PATH + '/' + appId + '-signed.zip';
  if (!fs.existsSync(zipPath)) {
    console.error(`${chalk.red('No signed zip file available for upload')}`);
    console.log();
    console.log(
      'Create a zip file by running command',
      chalk.blue('npm run build'),
      'and',
      chalk.blue('npm run sign')
    );
    return;
  }

  const restEndPoint = getImportEndpoint(properties.getAppType());
  inquirer
    .prompt(questions)
    .then(
      async ({
        siteName = DEPLOY_SITE_NAME,
        domain = DEPLOY_DOMAIN,
        addonName = DEPLOY_ADDON_NAME,
        username = DEPLOY_USERNAME,
        password = DEPLOY_PASSWORD,
      }) => {
        const baseUrl = `https://${domain}/rest-api/1/0/${encodeURIComponent(
          siteName
        )}/Addon%20Repository/${encodeURIComponent(addonName)}`;

        const deployUrl = `${baseUrl}/${restEndPoint}`;
        const formData = new FormData();
        formData.append('file', fs.createReadStream(zipPath));

        try {
          const response = await fetch(deployUrl, {
            method: 'POST',
            body: formData,
            headers: formData.getHeaders({
              Authorization: `Basic ${Buffer.from(
                username + ':' + password
              ).toString('base64')}`,
            }),
          });

          handleResponse({ response: response.clone(), operation: 'Upload' });
          if (args.activate && response.ok) {
            const { id } = await response.json();

            await activateCustomModuleExecutable(
              id,
              baseUrl,
              username,
              password
            );
          }
        } catch (err) {
          console.log(`${chalk.red('Upload failed, status code:')} ${err}`);
        }
      }
    );
})();
