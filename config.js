
require('dotenv').config();

module.exports = {
  consumer_key:         process.env.CONSUMER_KEY,
  consumer_secret:      process.env.CONSUMER_KEY_SECRET,
  access_token:         process.env.ACCES_TOKEN,
  access_token_secret:  process.env.ACCES_TOKEN_SECRET,
  timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
};