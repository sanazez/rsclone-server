var express = require('express');
var router = express.Router();
var request = require('request');

router.get('/search', function (req, res, next) {
    request({ url: `https://jobs.github.com/positions.json?page=0&search=${req.query.search}`, json: true }, function (err, response, body) {
        res.json(body);
    });
});

module.exports = router;