const express = require('express');
const db = require('../db/index.js');

const app = express();


const port = process.env.PORT || 3000;

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


const server = app
.listen(port, () => console.log(`Listening on ${ port }`));


app.get('/', function (req, res) {
  res.send( 'Welcome to the student system!' );
});


app.post('/api/student',function(req,res){
    const student = new db.Student(req.body);
    student.save()
    .then(item => {
     res.send("item saved to database");
 })
    .catch(err => {
        console.log(err)
        res.status(400).send("unable to save to database");
    });


})

app.get('/api/studentId/:studentId',function(req,res){
    const studentId = parseInt(req.params.studentId)

    db.Student.findOne({studentId:studentId})
    .then(data => {
        res.send(data)
    })
    .catch(err => {
        console.log(err)
    })

})



app.get('/api/studentName/:studentName',function(req,res){
   const studentName = req.params.studentName


   db.Student.find({studentName:studentName})
   .then(data => {
    res.send(data)
})
   .catch(err => {
    console.log(err)
})

})




app.put('/api/studentId/:studentId', function (req, res) {

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

    db.Student.deleteMany()
    .then(()=>{
        res.send('removed')
    })
    .catch(err => {
        console.log(err)
    })
})


app.delete('/api/studentName/:studentName',function(req,res){
    const studentName = req.params.studentName;
    
db.Student.deleteOne({ studentName: studentName})
        .then(()=>{
            res.send('removed')
        })
        .catch(err => {
            console.log(err)
        })

})

app.delete('/api/studentId/:studentId',function(req,res){

    const studentId = parseInt(req.params.studentId);

        db.Student.deleteOne({ studentId: studentId})
        .then(()=>{
            res.send('removed')
        })
        .catch(err => {
            console.log(err)
        })
});


app.get('/api/courses/studentId',function(req,res){
   const studentId = parseInt(req.query.studentId);

   db.Student.findOne({studentId:studentId},{courses:1,_id:0})
   .then(data => {
    res.send(data)
})
   .catch(err => {
    console.log(err)
})

})


app.get('/api/courses/studentName',function(req,res){
   const studentName = req.query.studentName;

   db.Student.findOne({studentName:studentName},{courses:1,_id:0})
   .then(data => {
    res.send(data)
})
   .catch(err => {
    console.log(err)
})

})
