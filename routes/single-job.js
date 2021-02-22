const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');

router.get('/', async function (req, res, next) {
  try {
    const response = await fetch(`${global.baseUrl}vacancies/${req.query.idJob}`, global.options);
    const result = await response.json();
    res.json(result);
  }
  catch (error) {
    console.error('Ошибка:', error);
  }
});

module.exports = router;
