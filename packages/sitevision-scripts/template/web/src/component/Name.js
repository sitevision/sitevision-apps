define(function(require) {
   'use strict';

   var
      _          = require('underscore'),
      Component  = require('Component'),
      template   = require('/template/name');

   return Component.extend({

      template: template,

      filterState: function(state) {
         return _.extend({}, {name: state.name});
      }
   });
});