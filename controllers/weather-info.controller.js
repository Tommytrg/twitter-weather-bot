/*jshint esversion:6*/
const request = require('request');
const weather = '../controllers/weather-info.controller';
console.log('hola')

const getWeatherInfo = (error, response, body) => {
console.log('hola')
  if(error){
    throw new Error(error);
  }else{
    console.log('body',body);
  }
};

const getWeather = request('http://api.openweathermap.org/data/2.5/weather?id=3117735&APPID=aa04432a0366e8e6600f565d1d1d6c41', getWeatherInfo);
module.exports = getWeather;
