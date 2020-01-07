(function() {
  'use strict';

  const router = require('router');

  router.get('/myroute', (req, res) => {
    res.json({ message: 'Hello from GET' });
  });

  router.post('/myroute', (req, res) => {
    res.json({ message: 'Hello from POST' });
  });

  router.put('/myroute', (req, res) => {
    res.json({ message: 'Hello from PUT' });
  });

  router['delete']('/myroute', (req, res) => {
    res.json({ message: 'Hello from DELETE' });
  });
})();
