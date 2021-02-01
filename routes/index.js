const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');

const clientId = 'I9QF0M1Q2K9RDIAMF2UGHMLR62UEO1GOONK5PGQQM7IAH08NNOG1KEDK6VGCEG2E';
const clientSecret = 'OVBNKPDPF93IKBO7CKPUVNNSS3I1C6SNGCD06FUAVIRK4OG15560DEDM7NS4OA0A';
const tokenApp = 'ST545HKDJ3I70U65CU18JC79N62J3UMA3996CHOAN39TKVJREBVITB9LKDASRPQR';

global.baseUrl = 'https://api.hh.ru/';
global.options = {
  method: 'get',
  headers: {
    'Content-Type': 'application/json; charset=UTF-8',
    'User-Agent': 'rsclone (sanazez1234@gmail.com)',
    'Authorization': `Bearer ${tokenApp}`,
  },
};

router.get('/', async function (req, res, next) {
  let area = '';
  let searchText = '';
  let period = '';
  let experience = '';
  if(req.query.search) {
    searchText =`text=${req.query.search}`
  }
  if(req.query.area) {
    area = `&area=${req.query.area}`
  }
   if(req.query.period && req.query.period !== '0') {
    period = `&period=${req.query.period}`;
   }
  if(req.query.experience && req.query.experience !=='0') {
    experience = `&experience=${req.query.experience}`
  }
    const url = encodeURI(`${global.baseUrl}vacancies/?${searchText}${area+period+experience}&page=${req.query.page}&per_page=5`);
  try {
    const response = await fetch(url, global.options);
    const result = await response.json();
    res.json(result);
  }
  catch (error) {
    console.error('Ошибка:', error);
  }
});

module.exports = router;


/*const uri = 'mongodb+srv://zezal:4Zl0HjeSBLTAch59@cluster0.h9qrb.mongodb.net/<dbname>?retryWrites=true&w=majority';
const mongoClient = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const cities = ['Mumbai', 'Rio de Janeiro', 'Tianjin', 'Manila', 'London', 'New York', 'Berlin', 'Remote', 'Tokyo', 'Rome', 'Moscow', 'Minsk', 'San Francisco', 'Sidney', 'Paris', 'Warsaw', 'Kiev', 'Amsterdam', 'Dresden', 'Singapore'];
mongoClient.connect((err, client) => {
  if (err) {
    return console.log(err);
  }
  global.db = client.db('rsclone');
});*/
/*
function randomInteger(min, max) {
  // случайное число от min до (max+1)
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
} */

/*   request({ url: `https://remotive.io/api/remote-jobs`, json: true }, function (err, response, body) {
      let data = body.jobs;
    data.forEach(job => {
      job.location = cities[randomInteger(0, 19)];
      job.company_logo_url = `https://remotive.io/job/${job.id}/logo`;
    });
      collection.insertMany(body.jobs)
    res.json(body);
  }); */
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