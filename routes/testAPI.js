var express = require('express');
var router = express.Router();
var request = require('request');

router.get('/', function (req, res, next) {
    request({ url: 'https://jobs.github.com/positions.json?page=1&search=react', json: true }, function (err, response, json) {
        res.json(json);
        console.log(req)
    });
});

module.exports = router;