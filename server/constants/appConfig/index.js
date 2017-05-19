const env = process.env.NODE_ENV;
let config;
if(env === 'production') {
    config = require('./production.config');
} else {
    config = require('./development.config');
}

config.origin = `${config.protocol}://${config.hostname}`;
config.appPath = config.origin + config.basePath;
config.env = process.env.NODE_ENV;

module.exports = config;