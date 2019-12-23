(function() {
   'use strict';

   var 
      router  = require('router'),
      appData = require('appData');

   router.get('/', function(req, res) {
      var message = 'Hello, world!',
         name = appData.get('name');

      res.render('/', {
         message: message,
         name: name
      });
   });
}());