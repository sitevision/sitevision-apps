export const getAddonEndpoint = (type) => {
  switch (type) {
    case 'web':
      return 'custommodule';
    case 'rest':
      return 'headlesscustommodule';
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
    default:
      throw new Error(`Unknown app type: ${type}`);
  }
};

export const getHintByErrorCode = (errorCode) => {
  switch (errorCode) {
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
