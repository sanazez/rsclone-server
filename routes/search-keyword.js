const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');

router.get('/', async function (req, res, next) {
    const url = encodeURI(`${global.baseUrl}suggests/vacancy_search_keyword?text=${req.query.word}`);
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