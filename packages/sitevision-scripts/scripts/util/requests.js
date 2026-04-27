import chalk from 'chalk';

export const getAddonEndpoint = (type) => {
  switch (type) {
    case 'web':
      return 'custommodule';
    case 'rest':
      return 'headlesscustommodule';
    case 'mcpServer':
      return 'mcpServerCustomModule';
    case 'widget':
      return 'widgetcustommodule';
    default:
      throw new Error(`Unknown app type: ${type}`);
  }
};

export const getImportEndpoint = (type) => {
  switch (type) {
    case 'web':
    case 'widget':
      return 'webAppImport';
    case 'rest':
      return 'restAppImport';
    case 'mcpServer':
      return 'mcpServerImport';
    default:
      throw new Error(`Unknown app type: ${type}`);
  }
};

const getHintByErrorCode = (errorCode) => {
  switch (errorCode) {
    case 400:
      return (
        'Bad Request. Please verify the siteName and addonName in the ' +
        ".dev_properties.json file and ensure that the add-on exists in the site's add-on repository."
      );
    case 401:
      return 'Unauthorized. Please verify username and password.';
    case 403:
      return 'Forbidden. Is the REST API enabled for the site?';
    case 404:
      return 'Not found. Please verify the domain, siteName and addonName in the .dev_properties.json file.';
    case 500:
      return 'Internal server error. Check server logs for more information.';
    default:
      return '';
  }
};

export const handleResponse = async ({ response, operation }) => {
  let json;
  try {
    json = await response.json();
  } catch (err) {
    // pass
  }

  if (response.ok) {
    if (json) {
      console.log(
        `${chalk.green(`${operation} successful:`)} \n${JSON.stringify(
          json,
          null,
          2
        )}`
      );
    } else {
      console.log(`${chalk.green(`${operation} successful`)}`);
    }

    return;
  }

  if (json) {
    const message = String(json?.message || '');

    const isContextNodeError =
      response.status === 400 &&
      message.toLowerCase().includes('could not resolve context node');

    if (isContextNodeError) {
      console.log(
        `${chalk.red(`${operation} failed with status:`)} ${
          response.status
        } ${getHintByErrorCode(response.status)}`
      );
    } else {
      console.log(
        `${chalk.red(`${operation} failed:`)} \n${JSON.stringify(
          json,
          null,
          2
        )}`
      );
    }
  } else {
    console.log(
      `${chalk.red(`${operation} failed with status:`)} ${
        response.status
      } ${getHintByErrorCode(response.status)}`
    );
  }
};
