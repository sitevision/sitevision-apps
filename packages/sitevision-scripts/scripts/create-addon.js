const request = require('request');
const properties = require('../util/properties');
const queryString = require('querystring');
const chalk = require('chalk');

(function () {
  const props = properties.getDevProperties();
  const restEndpoint =
    properties.getAppType() === 'rest'
      ? 'headlesscustommodule'
      : 'custommodule';
  const url = `https://${encodeURIComponent(
    props.username
  )}:${encodeURIComponent(props.password)}@${
    props.domain
  }/rest-api/1/0/${queryString.escape(
    props.siteName
  )}/Addon%20Repository/${restEndpoint}`;

  request.post(
    { url: url, form: { name: props.addonName, category: 'Other' } },
    (err, httpResponse, body) => {
      if (err) {
        return console.error(`${chalk.red('Addon creation failed:')}, ${err}`);
      }

      if (httpResponse.statusCode === 200) {
        return console.log(
          `${chalk.green('Addon creation successful:')} \n${JSON.stringify(
            JSON.parse(body),
            null,
            2
          )}`
        );
      }

      if (body) {
        console.log(
          `${chalk.red('Addon creation failed:')} \n${JSON.stringify(
            JSON.parse(body),
            null,
            2
          )}`
        );
      } else {
        console.log(
          `${chalk.red('Addon creation failed, status code:')} ${
            httpResponse.statusCode
          }`
        );
      }
    }
  );
})();
