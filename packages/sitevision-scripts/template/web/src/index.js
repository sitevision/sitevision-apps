(function() {
   'use strict';

   const router  = require('router');
   const appData = require('appData');

   router.get('/', (req, res) => {
      const message = 'Hello, world!';
      const name = appData.get('name');

      res.render('/', {
         message: message,
         name: name
      });
   });
}());