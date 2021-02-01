const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');
const cool = require('cool-ascii-faces');

router.get('/',(req, res) => res.send(cool()))

module.exports = router;