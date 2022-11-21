import fs from 'fs';
import FormData from 'form-data';
import fetch from 'node-fetch';
import * as properties from '../util/properties.js';
import chalk from 'chalk';

(async function () {
  const manifest = properties.getManifest();
  const zipPath = properties.DIST_DIR_PATH + '/' + manifest.id + '.zip';
  if (!fs.existsSync(zipPath)) {
    console.error(`${chalk.red('No zip file available for upload')}`);
    console.log();
    console.log(
      'Create a zip file by running command',
      chalk.blue('npm run zip')
    );
    return;
  }

  const props = properties.getDevProperties();
  const restEndpoint =
    properties.getAppType() === 'rest' ? 'restAppImport' : 'webAppImport';
  let url =
    (props.useHTTPForDevDeploy ? `http://` : `https://`) +
    `${props.domain}/rest-api/1/0/${encodeURIComponent(
      props.siteName
    )}/Addon%20Repository/${encodeURIComponent(
      props.addonName
    )}/${restEndpoint}`;

  if (process.argv[2] === 'force-deploy' || process.argv[2] === 'force') {
    url += '?force=true';
  }
  const formData = new FormData();
  formData.append('file', fs.createReadStream(zipPath));

  try {
    const response = await fetch(url, {
      method: 'POST',
      body: formData,
      headers: formData.getHeaders({
        Authorization: `Basic ${Buffer.from(
          props.username + ':' + props.password
        ).toString('base64')}`,
      }),
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
})();
