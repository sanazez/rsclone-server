var express = require('express');
var router = express.Router();


router.get('/', function (req, res, next) {
  const collection = global.db.collection('jobs');
  collection.find({ id: Number(req.query.idJob) }).toArray((err, results) => {
    if (err) {
      return console.log(err)
    }
    res.json(results);
  });
});

module.exports = router;
