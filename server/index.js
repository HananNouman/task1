const express = require('express');
const db = require('../db/index.js');

const app = express();


const port = process.env.PORT || 3000;

const server = app
.listen(port, () => console.log(`Listening on ${ port }`));


app.get('/', function (req, res) {
  res.json( 'Welcome to the sudent system!' );
});