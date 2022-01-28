const fs = require('fs');
const FormData = require('form-data');
const fetch = require('node-fetch');
const properties = require('../util/properties');
const chalk = require('chalk');

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
  let url = (props.useHTTP ? `http://` : `https://`) + `${encodeURIComponent(props.username)}:${encodeURIComponent(
    props.password
  )}@${props.domain}/rest-api/1/0/${encodeURIComponent(
    props.siteName
  )}/Addon%20Repository/${encodeURIComponent(props.addonName)}/${restEndpoint}`;

  if (process.argv[2] === 'force-deploy' || process.argv[2] === 'force') {
    url += '?force=true';
  }
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
})();
