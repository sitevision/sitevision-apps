define(function(require) {
   'use strict';

   var
      _          = require('underscore'),
      Component  = require('Component'),
      template   = require('/template/main');

   return Component.extend({

      template: template,

      className: 'webapp-boilerplate',

      filterState: function(state) {
         return _.extend({}, {message: state.message});
      }
   });
});