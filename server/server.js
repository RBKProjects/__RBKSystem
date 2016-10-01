var express = require('express');
var Sequelize = require("sequelize");
var app = express();
var server = require ('http').createServer(app);


var port = process.env.PORT || 3020;
require('./config/middleware.js') (app,express);
require('./config/routes.js') (app,express);
app.listen(port , function () {
	console.log('Server now listening on port ' + port);
});



module.exports = app;

















































/*
		// mysql database connection
//============================================================
// var mysql      = require('mysql');
// var connection = mysql.createConnection({
//   host     : 'localhost',
//   user     : 'root',
//   password : 'root',
//   database: 'rbkadmission'
// });

// connection.connect();

// connection.query('SELECT * from candidateinfo', function(err, rows, fields) {
//   if (err){
//   	throw err;
//   }else{
//   	console.log('The solution is: ' , rows.count);
//   }
// });

// connection.end();
//============================================================

*/