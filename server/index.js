const express = require('express');
const db = require('../db/index.js');

const app = express();


const port = process.env.PORT || 3000;

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


const server = app
.listen(port, () => console.log(`Listening on ${ port }`));




app.post('/addStudent',function(req,res){
var student = new db.Student(req.body);
 student.save()
 .then(item => {
 res.send("item saved to database");
 })
 .catch(err => {
 res.status(400).send("unable to save to database");
 });


})



app.get('/', function (req, res) {
  res.send( 'Welcome to the student system!' );
});