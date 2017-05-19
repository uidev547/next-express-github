var Strategy = require('passport-facebook').Strategy;
var passport = require('passport');
var config = require('../constants').authConfig;
var authCallback = require('./authCallback');
var init = require('./init');


passport.use(new Strategy({
  clientID: config.facebook.clientID,
  clientSecret: config.facebook.clientSecret,
  callbackURL: config.facebook.callbackURL
  },
  authCallback('facebook')
));

// serialize user into the session
init();


module.exports = passport;
