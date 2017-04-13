/*jshint esversion:6*/
const weatherInfoModel = require('../models/weatherInfo.model');
const request = require('request');
const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGODB_URI);

const getWeatherInfoFromApi = (error, response, body) => {
  if(error){
    throw new Error('error in getWeatherInfoFromApi');
  }else{
     saveWeatherInfo(new weatherInfoModel({
      coords: [JSON.parse(body).coord.lon,JSON.parse(body).coord.lat],
      main_weather: JSON.parse(body).weather[0].main,
      weather_description: JSON.parse(body).weather[0].description,
      temperature: JSON.parse(body).main.temp,
      temperature_min: JSON.parse(body).main.temp_min,
      temperature_max: JSON.parse(body).main.temp_max
    }));
  }
};

const saveWeatherInfo = (data) => {
  data.save((err,info)=> {
    if(err){
      throw new Error('error saving in database');
    }else{
      console.log('info saved in database');
    }
  });
};

const getWeather = () => {
  return request('http://api.openweathermap.org/data/2.5/weather?id=3117735&APPID=' + process.env.WEATHER_API_KEY, getWeatherInfoFromApi);
};

module.exports = getWeather;
