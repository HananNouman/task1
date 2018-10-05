const express = require('express');
const db = require('../db/index.js');

const app = express();


const port = process.env.PORT || 3000;

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


const server = app
.listen(port, () => console.log(`Listening on ${ port }`));


app.get('/', function (req, res) {
  res.send( 'Welcome to the student system!' );
});


app.post('/addStudent',function(req,res){
    var student = new db.Student(req.body);
    student.save()
    .then(item => {
       res.send("item saved to database");
   })
    .catch(err => {
        console.log(err)
       res.status(400).send("unable to save to database");
   });


})

app.get('/getStudentById/:studentId',function(req,res){
    var studentId = parseInt(req.params.studentId)

    db.Student.findOne({studentId:studentId})
    .then(data => {
        res.send(data)
    })
    .catch(err => {
        console.log(err)
    })

})


app.get('/getStudentByName/:studentName',function(req,res){
     var studentName = req.params.studentName
    

    db.Student.find({studentName:studentName})
    .then(data => {
        res.send(data)
    })
    .catch(err => {
        console.log(err)
    })

})


app.put('/student/:studentId', function (req, res) {
    const studentId = parseInt(req.params.studentId);
    const newValue = req.body;

    db.Student.findOneAndUpdate({ studentId : studentId }, newValue)
    .then( previousValue => {
        db.Student.findOne({ studentId : studentId })
        .then(updated => {
            res.send(updated);
        });
        .catch(err => {
            console.log(err);
        });
    });
       
});
