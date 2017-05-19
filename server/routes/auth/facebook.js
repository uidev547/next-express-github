
var passportGithub = require('../../auth/facebook');
var login = passportGithub.authenticate('facebook');

var loginFail = passportGithub.authenticate('facebook', { failureRedirect: '/login' });

module.exports = {
    login,
    loginFail
};
