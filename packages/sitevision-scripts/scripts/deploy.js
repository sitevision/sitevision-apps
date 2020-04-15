const fs = require('fs');
const request = require('request');
const properties = require('../util/properties');
const queryString = require('querystring');
const chalk = require('chalk');

(function () {
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
  const restEndpoint = props.type === 'rest' ? 'restAppImport' : 'webAppImport';
  let url = `https://${encodeURIComponent(props.username)}:${encodeURIComponent(
    props.password
  )}@${props.domain}/rest-api/1/0/${queryString.escape(
    props.siteName
  )}/Addon%20Repository/${queryString.escape(props.addonName)}/${restEndpoint}`;
  const formData = {
    file: fs.createReadStream(zipPath),
  };

  if (process.argv[2] === 'force-deploy' || process.argv[2] === 'force') {
    url += '?force=true';
  }

  request.post({ url: url, formData: formData }, (err, httpResponse, body) => {
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
        `${chalk.red('Upload failed, status code:')} ${httpResponse.statusCode}`
      );
    }
  });
})();
