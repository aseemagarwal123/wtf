// app.js
var express = require('express');
var app = express();
var db = require('./db');
StudentRoute=require('../routes/StudentRoute')
app.use('/v1/api/students', StudentRoute);
module.exports = app;
