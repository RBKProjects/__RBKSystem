var express = require('express');
//var mongoose = require('mongoose');
var app = express();
var server = require ('http').createServer(app);


//============================================================
//var mongoURI = process.env.MONGODB_URI ||'DataBase Name';
//mongoose.connect(mongoURI);
//db = mongoose.connection;
// db.once('open',function () {
// 	console.log('mongoDB is open');
// });
//============================================================

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database: 'rbkadmission'
});

connection.connect();

connection.query('SELECT * from candidateinfo', function(err, rows, fields) {
  if (err){
  	throw err;
  }else{
  	console.log('The solution is: ' , rows.count);
  }
});

connection.end();



var port = process.env.PORT || 3020;

require('./config/middleware.js') (app,express);
require('./config/routes.js') (app,express);

app.listen(port , function () {
	console.log('Server now listening on port ' + port);
});

module.exports = app;