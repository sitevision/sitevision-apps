const locale = {
  get: (key) => key,
};

export default {
  ...locale,
  forLocale: (locale) => ({
    ...locale,
  }),
};
