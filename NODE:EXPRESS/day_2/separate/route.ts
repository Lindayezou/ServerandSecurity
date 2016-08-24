import express = require('express');
let router = express.Router();

router.use('/', function(req, res, next) {
  console.log(req.method + " " + req.path);
});

//GET /api/secret
router.get('/secret', function(req, res) {
  res.send('You have reached the secret api!');
});

//POST /api/secret
router.post('/secret', function(req, res) {
  res.send('You are posting to a secret api.');
});

export = router;
