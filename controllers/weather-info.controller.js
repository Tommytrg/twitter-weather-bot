/*jshint esversion:6*/
const request = require('request');
const weatherInfoModel = require('../models/weatherInfo.model');

const getWeatherInfo = (error, response, body) => {
  if(error){
    throw new Error(error);
  }else{
    saveWeatherInfo(new weatherInfoModel({
      coords: [JSON.parse(body).coord.lon,JSON.parse(body).coord.lat],
      main_weather: JSON.parse(body).weather[0].main,
      weather_description: JSON.parse(body).weather[0].description,
      temperature: JSON.parse(body).main.temp,
      temperature_min: JSON.parse(body).main.temp_min,
      temperature_max: JSON.parse(body).main.temp_max
    })
    );
  }
};

const saveWeatherInfo= (data) => {
  console.log(data);
};

const getWeather = request('http://api.openweathermap.org/data/2.5/weather?id=3117735&APPID=aa04432a0366e8e6600f565d1d1d6c41', getWeatherInfo);
module.exports = getWeather;
