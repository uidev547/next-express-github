var Strategy = require('passport-github2').Strategy;
var passport = require('passport');
var config = require('../constants').authConfig;
var authCallback = require('./authCallback');
var init = require('./init');


passport.use(new Strategy({
  clientID: config.github.clientID,
  clientSecret: config.github.clientSecret,
  callbackURL: config.github.callbackURL
  },
  authCallback('github')
));

// serialize user into the session
init();


module.exports = passport;
