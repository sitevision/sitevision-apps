define(function (require) {
  'use strict';

  const Component = require('Component');
  const template = require('/template/main');

  return Component.extend({
    template,

    className: 'webapp-boilerplate',

    filterState: ({ message }) => ({
      message,
    }),
  });
});
