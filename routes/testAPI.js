const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');

router.get('/search', async function (req, res, next) {
    let area = '';
    let period = '';
    let experience = '';
    let employment = '';
    let schedule = '';
    if (req.query.area) {
        area = `&area=${req.query.area}`
    }
    if (req.query.period && req.query.period !== '0') {
        period = `&period=${req.query.period}`
    }
    if (req.query.experience && req.query.experience !== '0') {
        experience = `&experience=${req.query.experience}`
    }
    if (req.query.employment) {
        if (typeof req.query.employment === 'string') {
            employment = `&employment=${req.query.employment}`;
        } else if (typeof req.query.employment === 'object') {
            req.query.employment.forEach(item => {
                employment += `&employment=${item}`
            })
        }
    }
    if (req.query.schedule) {
        if (typeof req.query.schedule === 'string') {
            schedule = `&schedule=${req.query.schedule}`;
        } else if (typeof req.query.schedule === 'object') {
            req.query.schedule.forEach(item => {
                schedule += `&schedule=${item}`
            })
        }
    }

    const url = encodeURI(`${global.baseUrl}vacancies/?text=${req.query.search}${area + period + experience + employment + schedule}&page=0&per_page=5`);
    console.log(url)
    try {
        const response = await fetch(url, global.options);
        const result = await response.json();
        res.json(result);
    } catch (error) {
        console.error('Ошибка:', error);
    }
});

module.exports = router;