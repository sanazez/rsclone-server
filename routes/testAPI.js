var express = require('express');
var router = express.Router();
var request = require('request');

router.get('/search', function (req, res, next) {
    const collection = global.db.collection('jobs');
    collection.find({ description: { $regex: req.query.search } }).toArray((err, results) => {
        if (err) {
            return console.log(err)
        }
        res.json(results);
    });
});

module.exports = router;