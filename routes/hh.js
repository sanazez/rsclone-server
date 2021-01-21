var express = require('express');
var router = express.Router();

const fetch = require('node-fetch');
const baseUrl = 'https://api.hh.ru/';
const clientId = 'I9QF0M1Q2K9RDIAMF2UGHMLR62UEO1GOONK5PGQQM7IAH08NNOG1KEDK6VGCEG2E';
const clientSecret = 'OVBNKPDPF93IKBO7CKPUVNNSS3I1C6SNGCD06FUAVIRK4OG15560DEDM7NS4OA0A';
const tokenApp = 'ST545HKDJ3I70U65CU18JC79N62J3UMA3996CHOAN39TKVJREBVITB9LKDASRPQR';

const options = {
    method: 'get',
    headers: {
        'Content-Type': 'application/json; charset=UTF-8',
        'User-Agent': 'rsclone (sanazez1234@gmail.com)',
        'Authorization': `Bearer ${tokenApp}`,
    },
}


/*const func = async (callback) => {
    try {
        const response = await fetch(`${baseUrl}vacancies`, options);
        const result = await response.json();
        callback(result);
    }
    catch (error) {
        console.error('Ошибка:', error);
    }
}*/
router.get('/', async function (req, res, next) {
    try {
        const response = await fetch(`${baseUrl}vacancies`, options);
        const result = await response.json();
        res.json(result);
        console.log(result)

    }
    catch (error) {
        console.error('Ошибка:', error);
    }

});

module.exports = router;