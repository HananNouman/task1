var mongoose = require('mongoose');

 mongoose.connect('mongodb://localhost:27017/Students', { useNewUrlParser: true, 
  useCreateIndex: true
 });

var db = mongoose.connection;

db.on('error', function(err) {

  console.log('mongoose connection error'+ err);
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});

var studentSchema = mongoose.Schema({
  studentId    : { type: Number,  unique : true , default: 0},
  studentName   : String,
  age : Number,
  courses: [String]
  
});

var Student = mongoose.model('Student', studentSchema);
module.exports.Student = Student
