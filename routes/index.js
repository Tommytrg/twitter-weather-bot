/*jshint esversion:6*/
var express = require('express');
var router = express.Router();
const bot = require('../controllers/bot.controller');

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index');
  bot.updateApp();
});

module.exports = router;
