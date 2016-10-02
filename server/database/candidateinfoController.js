var mysql = require('mysql');
var db = require('./database.js');

// declare connection 
var connection = db ;

//start connection


module.exports = {
	createCandidate : function (req, res) {
		var candidate = req.body;
		var post  = {
		    name: req.body.name,
		    email: req.body.email,
		    password: req.body.password,
		    phone: req.body.phone,
		    gender: req.body.gender,
		    dateOfBirth: req.body.dateOfBirth,
		    nattionalaty: req.body.nattionalaty,
		    residence: req.body.residence,
		    destance: req.body.destance,
		    camp_Location: req.body.camp_Location,
		    videoLink: req.body.videoLink,
		    states: req.body.states 
		}
		connection.query('INSERT INTO candidateinfo SET ?', post, function(err, result) {
			if (err){
				throw err;
			} else{
		    	console.log(result.insertId);
			}
		});

	},

	getCandidate : function (req, res) {
		var sql    = 'SELECT * FROM candidateinfo WHERE name = ' + connection.escape(req.body.name);
		connection.connect();
		connection.query(sql, function(err, rows, fields) {
		  if (err) throw err;
		  console.log('The solution is: ', rows);
		  return rows;
		});
		connection.end();//
	},

	getAllCandidate : function (req, res) {
		var sql = 'SELECT * FROM candidateinfo';
		connection.query(sql, function(err, rows, fields) {
		  if (!err){
		  	console.log('The solution is: ', rows);
			return rows;
		  }else{
			
			throw err;
		  }
		});
	},

	updateCandidate : function (req, res) {
		
	},

	deletCandidate : function (req, res) {
		var sql = 'DELETE FROM posts WHERE email = ' + req.body.email;
		connection.query(sql, function (err, result) {
		  if (err) throw err;

		  console.log('deleted ' + result.affectedRows + ' rows');
		})
	}
}
 
















