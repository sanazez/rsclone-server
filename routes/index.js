var express = require('express');
var router = express.Router();
var request = require('request');

router.get('/', function (req, res, next) {
  request({ url: `https://remotive.io/api/remote-jobs?limit=5`, json: true }, function (err, response, body) {
    res.json(body);
  });
});

module.exports = router;

