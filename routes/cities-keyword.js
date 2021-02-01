const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');

router.get('/', async function (req, res, next) {
    console.log(req.query.city)
    const url = encodeURI(`${global.baseUrl}suggests/areas?text=${req.query.city}`);
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