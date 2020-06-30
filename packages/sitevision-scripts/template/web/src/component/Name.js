define(function (require) {
  'use strict';

  const Component = require('Component');
  const template = require('/template/name');

  return Component.extend({
    template,

    filterState: ({ name }) => ({
      name,
    }),
  });
});
