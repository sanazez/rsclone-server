const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');

router.get('/search', async function (req, res, next) {
    let area = '';
    let period = '';
    let experience = '';
    if(req.query.area) {
        area = `&area=${req.query.area}`
    }
    if(req.query.period && req.query.period !== '0') {
        period = `&period=${req.query.period}`
    }
    if(req.query.experience && req.query.experience !== '0') {
        experience = `&experience=${req.query.experience}`
    }
   const url = encodeURI(`${global.baseUrl}vacancies/?text=${req.query.search}${area+period+experience}&page=0&per_page=5`);
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