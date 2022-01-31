const fetch = require('node-fetch');
const properties = require('../util/properties');
const chalk = require('chalk');

(async function () {
  const props = properties.getDevProperties();
  const restEndpoint =
    properties.getAppType() === 'rest'
      ? 'headlesscustommodule'
      : 'custommodule';
  const url = (props.useHTTPForDevDeploy ? `http://` : `https://`) + `${encodeURIComponent(
    props.username
  )}:${encodeURIComponent(props.password)}@${
    props.domain
  }/rest-api/1/0/${encodeURIComponent(
    props.siteName
  )}/Addon%20Repository/${restEndpoint}`;

  try {
    const response = await fetch(url, {
      method: 'post',
      body: JSON.stringify({ name: props.addonName, category: 'Other' }),
    });
    const json = await response.json();

    if (response.ok) {
      return console.log(
        `${chalk.green('Addon creation successful:')} \n${JSON.stringify(
          json,
          null,
          2
        )}`
      );
    }

    console.log(
      `${chalk.red('Addon creation failed:')} \n${JSON.stringify(
        json,
        null,
        2
      )}`
    );
  } catch (err) {
    console.error(`${chalk.red('Addon creation failed:')}, ${err}`);
  }
})();
