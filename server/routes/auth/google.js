
var passportGithub = require('../../auth/google');
var login = passportGithub.authenticate('google', { 
    scope:  [ 
        'https://www.googleapis.com/auth/plus.login', 
        'https://www.googleapis.com/auth/plus.profile.emails.read' 
    ]
});

var loginFail = passportGithub.authenticate('google', { failureRedirect: '/login' });

module.exports = {
    login,
    loginFail
};
