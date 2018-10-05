const express = require('express');
const db = require('../db/index.js');

const app = express();

const path = require('path');
const port = process.env.PORT || 3000;

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


const server = app
.listen(port, () => console.log(`Listening on ${ port }`));

app.use(express.static(path.join(__dirname, '../client/')))

app.get('/', function (req, res) {
  res.send( 'Welcome to the student system!' );
});


app.post('/api/student',function(req,res){
    console.log(req.body);
    let student = new db.Student(req.body);
    student.save()
    .then(item => {
       res.send("item saved to database");
   })
    .catch(err => {
        console.log(err)
       res.status(400).send("unable to save to database");
   });


})

app.get('/api/studentById/:studentId',function(req,res){
    let studentId = parseInt(req.params.studentId)

    db.Student.findOne({studentId:studentId})
    .then(data => {
        res.send(data)
    })
    .catch(err => {
        console.log(err)
    })

})


app.get('/api/studentByName/:studentName',function(req,res){
     let studentName = req.params.studentName
    

    db.Student.find({studentName:studentName})
    .then(data => {
        res.send(data)
    })
    .catch(err => {
        console.log(err)
    })

})


app.put('/api/students/:studentId', function (req, res) {

    const studentId = parseInt(req.params.studentId);
    const newValue = req.body;

    db.Student.findOneAndUpdate({ studentId : studentId }, newValue)
    .then( previousValue => {
        db.Student.findOne({ studentId : studentId })
        .then(updated => {
            res.send(updated);
        })
        .catch(err => {
            console.log(err);
        });
    })
    .catch(err => {
        console.log(err)
    })
       
});

app.delete('/api/students', function(req,res){
db.Student.remove({}, function (err,data) {
  if (err) return console.log(err);
})
})

app.delete('api/studentName/:name',function(req,res){
    const name = parseInt(req.params.name);
    
db.Pokemon.remove({ studentName: name}, function (err,data) {
  if (err) return  console.log(err);
});
})


app.delete('api/studentId/:id',function(req,res){
    const id = parseInt(req.params.id);
        db.Student.deleteOne({ studentId: id}, function (err) {
  if (err) return console.log(err);

})
