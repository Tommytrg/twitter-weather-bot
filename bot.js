/*jshint esversion:6*/
const Twit = require('twit');
const config = require('./config');
const T = new Twit(config);

mongoose.connect(process.env.MONGODB_URI);


const params = {
  q: 'rainbow',
  count: 2
};

const gotData = (err, data, response) => {
  if (err) {
    throw new Error('ERROR getting data in gotData');
  } else {
    const tweets = data.statuses;
    tweets.map((tweet, index) => {
      console.log(index + ' ' +tweet.text);

    });
  }
};

//T.get('search/tweets', params, gotData);

const tweet = {
  status: 'Hello World'
};

const tweeted = (err, data, response) => {
  if(err){
    throw new Error('ERROR tweeting in tweeted');
  }else{
    console.log('Tweet posted');
  }
};

T.post('statuses/update', tweet, tweeted);
