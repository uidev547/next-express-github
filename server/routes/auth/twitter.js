var passportGithub = require('../../auth/twitter');
var login = passportGithub.authenticate('twitter');

var loginFail = passportGithub.authenticate('twitter', { failureRedirect: '/login' });

module.exports = {
    login,
    loginFail
};
