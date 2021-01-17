var express = require('express');
var router = express.Router();
var request = require('request');
const MongoClient = require("mongodb").MongoClient;

const uri = 'mongodb+srv://zezal:4Zl0HjeSBLTAch59@cluster0.h9qrb.mongodb.net/<dbname>?retryWrites=true&w=majority';
const mongoClient = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });



mongoClient.connect((err, client) => {
  if (err) {
    return console.log(err);
  }
  global.db = client.db('rsclone');

});

router.get('/', function (req, res, next) {
  const collection = global.db.collection('jobs');
  collection.find().toArray((err, results) => {
    if (err) {
      return console.log(err)
    }
    res.json(results);
  });
});


module.exports = router;
/*
for (let index = 0; index < jobs.length; index++) {
  if (index < 76) { jobs[index].location = 'Mumbai'; }
  else if (75 < index && index < 151) { jobs[index].location = 'Rio de Janeiro'; }
  else if (150 < index && index < 226) { jobs[index].location = 'Tianjin'; }
  else if (225 < index && index < 301) { jobs[index].location = 'Manila'; }
  else if (300 < index && index < 376) { jobs[index].location = 'London'; }
  else if (375 < index && index < 451) { jobs[index].location = 'New York'; }
  else if (450 < index && index < 526) { jobs[index].location = 'Berlin'; }
  else if (525 < index && index < 601) { jobs[index].location = 'Remote'; }
  else if (600 < index && index < 676) { jobs[index].location = 'Tokyo'; }
  else if (675 < index && index < 751) { jobs[index].location = 'Rome'; }
  else if (750 < index && index < 826) { jobs[index].location = 'Moscow'; }
  else if (825 < index && index < 901) { jobs[index].location = 'Minsk'; }
  else if (900 < index && index < 976) { jobs[index].location = 'San Francisco'; }
  else if (975 < index && index < 1051) { jobs[index].location = 'Sidney'; }
  else if (1050 < index && index < 1126) { jobs[index].location = 'Paris'; }
  else if (1125 < index && index < 1201) { jobs[index].location = 'Warsaw'; }
  else if (1200 < index && index < 1276) { jobs[index].location = 'Kiev'; }
  else if (1275 < index && index < 1351) { jobs[index].location = 'Amsterdam'; }
  else if (1350 < index && index < 1426) { jobs[index].location = 'Dresden'; }
  else if (1425 < index && index < jobs.length) { jobs[index].location = 'Singapore'; }
  jobs[index].company_logo_url = `https://remotive.io/job/${jobs[index].id}/logo`;
}; */