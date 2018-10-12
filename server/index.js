const express = require('express');
const bodyParser = require('body-parser');
const router = require('./router.js');
const db = require('../db/index');


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use('/api/user', router);



app.get('/', function (req, res) {
  res.send( 'Welcome to the user system!' );
});



const port = process.env.PORT || 3000;

const server = app
.listen(port, () => console.log(`Listening on ${ port }`));