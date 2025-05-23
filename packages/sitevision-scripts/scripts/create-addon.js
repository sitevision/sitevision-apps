import fetch from 'node-fetch';
import * as properties from '../util/properties.js';
import chalk from 'chalk';
import { getAddonEndpoint, handleResponse } from './util/requests.js';

(async function () {
  let props = {
    domain: process.env.PROPS_DOMAIN,
    siteName: process.env.PROPS_SITE_NAME,
    addonName: process.env.PROPS_ADDON_NAME,
    username: process.env.PROPS_USERNAME,
    password: process.env.PROPS_PASSWORD,
  };

  if (Object.values(props).some((value) => !value)) {
    props = properties.getDevProperties();
  }

  const restEndpoint = getAddonEndpoint(properties.getAppType());
  const url =
    (props.useHTTPForDevDeploy ? `http://` : `https://`) +
    `${props.domain}/rest-api/1/0/${encodeURIComponent(
      props.siteName
    )}/Addon%20Repository/${restEndpoint}`;

  try {
    const response = await fetch(url, {
      method: 'post',
      body: JSON.stringify({ name: props.addonName, category: 'Other' }),
      headers: {
        Authorization: `Basic ${Buffer.from(
          props.username + ':' + props.password
        ).toString('base64')}`,
      },
    });

    handleResponse({ response, operation: 'Addon creation' });
  } catch (err) {
    console.error(`${chalk.red('Addon creation failed:')}, ${err}`);
  }
})();
