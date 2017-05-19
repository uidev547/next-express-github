var passportGithub = require('../../auth/github');
var login = passportGithub.authenticate('github', { scope: [ 'user:email' ] });

var loginFail = passportGithub.authenticate('github', { failureRedirect: '/login' });

module.exports = {
    login,
    loginFail
};
