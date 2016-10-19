var mysql = require('mysql');
var db = require('../database.js');
var jwt = require('jwt-simple');

//declare connection 
var connection = db ;

module.exports = {

	getQuestion : function (req, res) {
		var sql    = 'SELECT * FROM agreementqustions WHERE id = ' + connection.escape(req.body.id);
		connection.query(sql, function(err, rows, fields) {
			if (err){
				throw err;
			} else{
				res.json({rows : rows});
			}
		});
	},

	getAllQuestion : function (req, res) {
		var sql = 'SELECT * FROM agreementqustions';
		connection.query(sql, function(err, rows, fields) {
			if (!err){
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
			}
		});
	},

	deletQuestion : function (req, res) {
		var sql = 'DELETE FROM agreementqustions WHERE email = ' + req.body.email;
		connection.query(sql, function (err, result) {
			if (err){
				throw err;  	
			}else{
				res.json({rows : rows});
			} 
		});
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
						}
					})
			    }
		  }else{
		  	throw err
		  };

		});
	},

	getAnswer : function (req, res) {
		var sql    = 'SELECT * FROM agreementanswer WHERE id =' + connection.escape(req.body.id);
		connection.query(sql, function(err, rows, fields) {
			if (err){
				throw err;	
			} else{
				res.json({rows : rows});
			}
		});
	},

	getAllAnswer : function (req, res) {
		var sql = 'SELECT * FROM agreementanswer';
		connection.query(sql, function(err, rows, fields) {
			if (!err){
				res.json({rows : rows});
			}else{
				throw err;
			}
		});
	},

	insertOptions : function (req, res) {
		var get = req.body;
		var option = {
			text_a : get.text_a,
			text_e : get.text_e,
			Q_id : get.Q_id,
			num : get.num
		}		
		connection.query('INSERT INTO qustion_option SET ?', option, function (err, rows) {
			if (err){
				throw err;
			} else{
				res.json({rows : rows});
			}
		});
	},

	getQuestionOptions : function (req, res) {
		var sql = 'SELECT * FROM qustion_option WHERE Q_id =' + connection.escape(req.body.q_id);
		connection.query(sql, function (err, rows) {
			if(err){
				throw err;
			}else{
				res.json({rows : rows});
			}
		});
	},

	getAllQuestionsOptions : function (req, res) {
		var sql = 'SELECT * FROM qustion_option ';
		connection.query(sql, function (err, rows) {
			if(err){
				throw err;
			}else{
				res.json({rows : rows});
			}
		});
	}
}
 