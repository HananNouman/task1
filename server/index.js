const express = require('express');
const app = express();

const path =require('path');
const userapi = require('./user');

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api/users', userapi);


app.use(express.static(path.join(__dirname, '../client/')))


app.get('/', function (req, res) {
res.render("index");	
});


app.listen(3000);
