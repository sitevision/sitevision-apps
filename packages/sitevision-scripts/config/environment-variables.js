export const getTemporaryAppId = () => {
  return process.env.TEMP_APP_ID;
};

export const isCi = () => {
  return process.env.CI === 'true';
};
