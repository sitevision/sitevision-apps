import {
  getAppIdPrefix,
  getAppIdSuffix,
} from '../../config/environment-variables.js';

export const getFullAppId = (appIdBase) => {
  return `${getAppIdPrefix()}${appIdBase}${getAppIdSuffix()}`;
};
