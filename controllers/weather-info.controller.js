/*jshint esversion:6*/
const request = require('request');
const weatherInfoModel = require('../models/weatherInfo.model');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/twitter-weather-app');

const getWeatherInfoFromApi = (error, response, body) => {
  if(error){
    throw new Error('error in getWeatherInfoFromApi');
  }else{
    return saveWeatherInfo(new weatherInfoModel({
      coords: [JSON.parse(body).coord.lon,JSON.parse(body).coord.lat],
      main_weather: JSON.parse(body).weather[0].main,
      weather_description: JSON.parse(body).weather[0].description,
      temperature: JSON.parse(body).main.temp,
      temperature_min: JSON.parse(body).main.temp_min,
      temperature_max: JSON.parse(body).main.temp_max
    }),response);
  }
};

const saveWeatherInfo = (data) => {
  data.save((err,info)=> {
    if(err){
      throw new Error('error saving in database');
    }else{
      return data;
    }
  });
};

const getWeather = request('http://api.openweathermap.org/data/2.5/weather?id=3117735&APPID=aa04432a0366e8e6600f565d1d1d6c41', getWeatherInfoFromApi);
module.exports = getWeather;
