var mysql = require('mysql');
var db = require('./database.js');
var jwt = require('jwt-simple');

//declare connection 
var connection = db ;

module.exports = {

	getQuestion : function (req, res) {
		var sql    = 'SELECT * FROM agreementqustions WHERE id = ' + connection.escape(req.body.id);
		connection.query(sql, function(err, rows, fields) {
		  if (err) throw err;
		  console.log('The solution is: ', rows);
		  res.json({rows : rows});
		});
	},

	getAllQuestion : function (req, res) {
		var sql = 'SELECT * FROM agreementqustions';
		connection.query(sql, function(err, rows, fields) {
		  if (!err){
		  	console.log('The solution is: ', rows);
		  	res.json({rows : rows});
		  }else{
			throw err;
		  }
		});
	},

	addQuestion : function (req, res) {
		var candidate = req.body;
		var newCandidate = {
			arabicQ : candidate.arabicQ,
			englishQ : candidate.englishQ
		}		
		connection.query('INSERT INTO agreementqustions SET ?', newCandidate, function (err, rows) {
			if (err){
				throw err;
			} else{
				res.json({rows : rows});
		    	console.log(rows.insertId);
			}
		})
	},

	insertAnswer : function (req, res) {
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
	},

	getAnswer : function (req, res) {
		var sql    = 'SELECT * FROM agreementanswer WHERE id = ' + connection.escape(req.body.id);
		connection.query(sql, function(err, rows, fields) {
		  if (err) throw err;
		  console.log('The solution is: ', rows);
		  res.json({rows : rows});
		});
	},

	getAllAnswer : function (req, res) {
		var sql = 'SELECT * FROM agreementanswer';
		connection.query(sql, function(err, rows, fields) {
		  if (!err){
		  	console.log('The solution is: ', rows);
		  	res.json({rows : rows});
		  }else{
			throw err;
		  }
		});
	}
}
 