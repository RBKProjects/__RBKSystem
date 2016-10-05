var mysql = require('mysql');
var db = require('./database.js');
var jwt = require('jwt-simple');

//declare connection 
var connection = db ;

module.exports = {

	getALLTest : function (req, res) {
		var sql = 'SELECT * FROM usertest';
		connection.query(sql, function(err, rows, fields) {
		  if (!err){
		  	console.log('The solution is: ', rows);
		  	res.json({rows : rows});
		  }else{
			throw err;
		  }
		});
	},

	getTest : function (req, res) {
		var sql    = 'SELECT * FROM usertest WHERE id = ' + connection.escape(req.body.id);
		connection.query(sql, function(err, rows, fields) {
		  if (err) throw err;
		  console.log('The solution is: ', rows);
		  res.json({rows : rows});
		});
	},

	insertPersonality : function (req, res) {
		var candidate = req.body;
		var newCandidate = {
			userinfo_id : candidate.userinfo_id,
			agreementqustions_id : candidate.agreementqustions_id,
			answer : candidate.answer
		}
		var sql    = 'SELECT * FROM agreementanswer WHERE userinfo_id = ' + connection.escape(candidate.userinfo_id) + 'AND agreementqustions_id =' + connection.escape(candidate.userinfo_id);
		connection.query(sql, function(err, rows, fields) {
		  if (!err){
		  		if(rows.length > 0){ 
			  		res.json({rows : rows, msg : 'User exist'});
			  	}else{
					connection.query('INSERT INTO agreementanswer SET ?', newCandidate, function (err, rows) {
						if (err){
							throw err;
						} else{
							res.json({rows : rows});
					    	console.log(rows.insertId);
						}
					})
			    }
		  }else{
		  	throw err
		  };

		});
	} 
}
 