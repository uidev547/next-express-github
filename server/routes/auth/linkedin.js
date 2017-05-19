var passportGithub = require('../../auth/linkedin');
var login = passportGithub.authenticate('linkedin', { scope: ['r_emailaddress', 'r_basicprofile'] });

var loginFail = passportGithub.authenticate('linkedin', { failureRedirect: '/login' });

module.exports = {
    login,
    loginFail
};
