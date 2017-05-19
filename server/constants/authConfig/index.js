const appConfig = require('../appConfig');
const env = process.env.NODE_ENV;
let config;
if(env === 'production') {
    config = require('./production.config');
} else {
    config = require('./development.config');
}

config.github.callbackURL = appConfig.appPath + "auth/github/callback";
config.google.callbackURL = appConfig.appPath + "auth/google/callback";
config.twitter.callbackURL = appConfig.appPath + "auth/twitter/callback";
config.facebook.callbackURL = appConfig.appPath + "auth/facebook/callback";
config.linkedin.callbackURL = appConfig.appPath + "auth/facebook/callback";

module.exports = config;