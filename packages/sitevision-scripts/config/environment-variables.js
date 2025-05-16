export const getAppIdSuffix = () => {
  return process.env.APP_ID_SUFFIX || '';
};

export const getAppIdPrefix = () => {
  return process.env.APP_ID_PREFIX || '';
};

export const isCi = () => {
  return process.env.CI === 'true';
};
