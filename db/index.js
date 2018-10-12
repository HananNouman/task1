var mongoose = require('mongoose');

 mongoose.connect('mongodb://localhost:27017/Users', { useNewUrlParser: true, 

  useCreateIndex: true
 });

var db = mongoose.connection;

db.on('error', function(err) {

  console.log('mongoose connection error'+ err);
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});

module.exports = db;

