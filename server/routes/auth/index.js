var express = require('express');
var router = express.Router();

var github = require('./github');
var google = require('./google');
var twitter = require('./twitter');
var facebook = require('./facebook');
var linkedin = require('./linkedin');


var redirectTo = '/';
var loginSuccess = function(req, res) {
    res.redirect(redirectTo);
};
router.get('/github', function(req, res, next) {
    if(req.query.redirectTo) {
        redirectTo = req.query.redirectTo;
    }
    github.login(req, res, next)
});
router.get('/github/callback', github.loginFail, loginSuccess);


router.get('/google', function(req, res, next) {
    if(req.query.redirectTo) {
        redirectTo = req.query.redirectTo;
    }
    google.login(req, res, next)
});
router.get('/google/callback', google.loginFail, loginSuccess);




router.get('/twitter', function(req, res, next) {
    if(req.query.redirectTo) {
        redirectTo = req.query.redirectTo;
    }
    twitter.login(req, res, next)
});
router.get('/twitter/callback', twitter.loginFail, loginSuccess);



router.get('/facebook', function(req, res, next) {
    if(req.query.redirectTo) {
        redirectTo = req.query.redirectTo;
    }
    facebook.login(req, res, next)
});
router.get('/facebook/callback', facebook.loginFail, loginSuccess);

router.get('/linkedin', function(req, res, next) {
    if(req.query.redirectTo) {
        redirectTo = req.query.redirectTo;
    }
    linkedin.login(req, res, next)
});
router.get('/linkedin/callback', linkedin.loginFail, loginSuccess);



module.exports = router;
