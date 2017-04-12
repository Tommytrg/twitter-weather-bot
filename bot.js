/*jshint esversion:6*/

console.log('This bot is starting');

const Twit = require('twit');
const config = require('./config');
const T = new Twit(config);
