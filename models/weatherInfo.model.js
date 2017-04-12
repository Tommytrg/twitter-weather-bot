/*jshint esversion:6*/
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const weatherInfoSchema = mongoose.Schema({
  coords: {type: [Number], required: true },
  main_weather: {type: String, required:true},
  weather_description: {type: String, required:true},
  temperature: {type: Number, required:true },
  temperature_min: {type: Number, required:true},
  temperature_max:{type: Number, required:true}
});

const WeatherInfo = mongoose.model('weatherInfo', weatherInfoSchema);
module.exports = WeatherInfo;
