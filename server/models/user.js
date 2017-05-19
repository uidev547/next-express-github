var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create User Schema
var User = new Schema({
  name: String,
  email: String,
  username: String,
  firstName: String,
  lastName: String,
  password: String,
  authType: String,
  github: Object,
  google: Object,
  twitter: Object,
  facebook: Object
});


module.exports = mongoose.model('users', User);