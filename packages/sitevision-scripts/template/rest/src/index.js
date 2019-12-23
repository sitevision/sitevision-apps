(function() {
  'use strict';

  var router = require('router');

  router.get('/myroute', function(req, res) {
    res.json({ message: 'Hello from GET' });
  });

  router.post('/myroute', function(req, res) {
    res.json({ message: 'Hello from POST' });
  });

  router.put('/myroute', function(req, res) {
    res.json({ message: 'Hello from PUT' });
  });

  router['delete']('/myroute', function(req, res) {
    res.json({ message: 'Hello from DELETE' });
  });
})();
