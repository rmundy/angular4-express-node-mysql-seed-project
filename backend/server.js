const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const mysql = require('mysql');

// Initialize express app
var app = express();

// use middleware
app.use(bodyParser.json);
app.use(bodyParser.urlencoded({extended: false}));

// set static path
app.use('/', express.static(__dirname));

// import api routes
app.use(require('./api/user_api'));

let port =process.env.PORT || 3000;
app.listen(port, () => {
  console.log('listening to port ' + port);
});
