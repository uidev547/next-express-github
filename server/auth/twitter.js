var Strategy = require('passport-twitter').Strategy;
var passport = require('passport');
var config = require('../constants').authConfig;
var authCallback = require('./authCallback');
var init = require('./init');

passport.use(new Strategy({
  consumerKey: config.twitter.consumerKey,
  consumerSecret: config.twitter.consumerSecret,
  callbackURL: config.twitter.callbackURL
  },
  authCallback('twitter')
));

// serialize user into the session
init();


module.exports = passport;
