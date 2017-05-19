var Strategy = require('passport-google-oauth2').Strategy;
var passport = require('passport');
var config = require('../constants').authConfig;
var authCallback = require('./authCallback');
var init = require('./init');


passport.use(new Strategy({
  clientID: config.google.clientID,
  clientSecret: config.google.clientSecret,
  callbackURL: config.google.callbackURL
  },
  authCallback('google')
));

// serialize user into the session
init();


module.exports = passport;
