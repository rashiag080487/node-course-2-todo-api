var mongoose = require('mongoose');

var Users = mongoose.model('Users', {
  email: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  }
});

module.exports = {Users};

// var newUser = new Users({
//   email: 'mohit452@gmail.com'
// });
//
// newUser.save().then((doc) => {
//   console.log('User saved');
//   console.log(JSON.stringify(doc, undefined, 2));
// }, (e) => {
//   console.log('Unable to save the user', e);
// });
