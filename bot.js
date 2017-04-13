/*jshint esversion:6*/
const Twit = require('twit');
const config = require('./config');
console.log(config)
const T = new Twit(config);
const weather = require('./controllers/weather-info.controller');
const weatherInfoModel = require('./models/weatherInfo.model');

require('dotenv').config();


//T.get('search/tweets', params, gotData);



const tweeted = (err, data, response) => {
console.log(err)
  if(err){
    throw new Error('ERROR tweeting in tweeted');
  }else{
    console.log('Tweet posted');
  }
};

const getWeatherTweet = () => {
  weather;
  
  weatherInfoModel.find({},(err,info)=>{
    if(err){
      throw new Error('error getting data from db');
    }else{
      //console.log(info[info.length - 1]);
      let tweet =  {status: 'Madrid, ' + info[info.length - 1].weather_description + ', ' + Math.floor(info[info.length - 1].temperature - 273) +
      'º. T. max: ' + Math.floor(info[info.length - 1].temperature_max - 273)  + 'º, T. min ' + Math.floor(info[info.length - 1].temperature_min - 273) + 'º.'};

      T.post('statuses/update', tweet, tweeted);

     }
  });
};

setInterval(getWeatherTweet, 1000*15);
