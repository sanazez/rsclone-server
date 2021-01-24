const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');

router.get('/search', async function (req, res, next) {
    const url = encodeURI(`${global.baseUrl}vacancies/?text=${req.query.search}&page=0&per_page=5`);
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