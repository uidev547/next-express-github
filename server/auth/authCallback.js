var User = require('../models/user');

module.exports = function(authType){
    return function(accessToken, refreshToken, profile, done) {
      console.log('authType', authType);
      console.log('profile', profile);

      var emails = profile.emails;
      var email = '';
      if(emails) {
        email = emails[0] && emails[0].value;
      }
      var searchQuery = {
        $or: [{
              username: profile.username
          },
          {
              email: email
          }]
      };


      var updates = {
        username: profile.username,
        name: profile.displayName,
        email: email,
        authType: authType,
        [authType]: profile
      };
      var options = {
        upsert: true
      };
      
      User.findOneAndUpdate(searchQuery, updates, options, function(err, user) {
        if(err) {
          return done(err);
        } else {
          return done(null, user);
        }
      });
  }

}