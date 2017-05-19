var Strategy = require('passport-linkedin-oauth2').Strategy;
var passport = require('passport');
var config = require('../constants').authConfig;
var authCallback = require('./authCallback');
var init = require('./init');


passport.use(new Strategy({
  clientID: config.linkedin.clientID,
  clientSecret: config.linkedin.clientSecret,
  callbackURL: config.linkedin.callbackURL
  },
  authCallback('linkedin')
));

// serialize user into the session
init();


module.exports = passport;
