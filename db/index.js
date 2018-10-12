var mongoose = require('mongoose');

 mongoose.connect('mongodb://localhost:27017/users', { useNewUrlParser: true, 
  useCreateIndex: true
 });

var db = mongoose.connection;

db.on('error', function(err) {

  console.log('mongoose connection error'+ err);
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});

var userSchema = mongoose.Schema({
  id    : { type: Number,  unique : true , default: 0},
  name   : String,
  age : Number,
  role: String
});

var User = mongoose.model('User', userSchema);


module.exports.User = User;
