/*jshint esversion:6*/
const config = require('./config');
const weatherInfoModel = require('./models/weatherInfo.model');
const getWeather = require('./controllers/weather-info.controller');

const Twit = require('twit');
const T = new Twit(config);
require('dotenv').config();

const tweeted = (err, data, response) => {
  if(err){
    console.log(err);
    throw new Error('ERROR tweeting in tweeted');
  }else{
    console.log('Tweet posted');
  }
};

const getWeatherTweet = () => {
  getWeather();

  weatherInfoModel.find({},(err,info)=>{
    if(err){
      throw new Error('error getting data from db');
    }else{
      let time = new Date();
      let tweet =  {status: 'Madrid, ' + info[info.length - 1].weather_description + ', ' + Math.floor(info[info.length - 1].temperature - 273) +
      'º. T. max: ' + Math.floor(info[info.length - 1].temperature_max - 273)  + 'º, T. min ' + Math.floor(info[info.length - 1].temperature_min - 273) + 'º. Time: ' + time.getHours() + ':' + time.getMinutes() + '.'};
console.log(tweet);
      T.post('statuses/update', tweet, tweeted);
     }
  });
};

getWeatherTweet();
setInterval(getWeatherTweet, 1000*60*60*3);
