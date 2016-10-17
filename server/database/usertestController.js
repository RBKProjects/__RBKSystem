var mysql = require('mysql');
var db = require('./database.js');
var jwt = require('jwt-simple');

//declare connection 
var connection = db ;

var insertToUsertest = function (userId, insertedData, key, res) {
	var updatePost = {};
	var insertPost = {};
	updatePost[key] = insertedData;
	insertPost[key] = insertedData;
	insertPost.userinfo_id = userId;
	
	var sql    = 'SELECT * FROM usertest WHERE userinfo_id = ' + connection.escape(userId);
	connection.query(sql, function(err, rows, fields) {
	  if (!err){
	  		if(rows.length > 0){
	  			connection.query('UPDATE usertest SET ? WHERE id = ?', [updatePost, userId]); 
		  		res.json({rows : rows});
		  	}else{
				connection.query('INSERT INTO usertest SET ?', insertPost, function (err, rows) {
					if (err){
						throw err;
					} else{
						res.json({rows : rows});
					}
				});
		    }
	  }else{
	  	throw err
	  };
	});
}

module.exports = {

	getALLUsersTests : function (req, res) {
		var sql = 'SELECT * FROM usertest';
		connection.query(sql, function(err, rows, fields) {
		  if (!err){
		  	res.json({rows : rows});
		  }else{
			throw err;
		  }
		});
	},

	getUserTests : function (req, res) {
		var sql    = 'SELECT * FROM usertest WHERE id = ' + connection.escape(req.body.id);
		connection.query(sql, function(err, rows, fields) {
			if (err){
				throw err;	
			} else{
				res.json({rows : rows});
			}
		});
	},

	insertPersonality : function (req, res) {
		insertToUsertest(req.body.id, req.body.personality, "personality", res);
	},

	insertAnalitical : function (req, res) {
		insertToUsertest(req.body.id, req.body.analitical, "analitical", res);	
	},

	insertCodeExp : function (req, res) {
		insertToUsertest(req.body.id, req.body.codeExp, "codeExp", res);	
	},

	insertCodeSyntax : function (req, res) {
		insertToUsertest(req.body.id, req.body.codeSyntax, "codeSyntax", res);	
	},

	insertMindSet : function (req, res) {
		insertToUsertest(req.body.id, req.body.mindSet, "mindSet", res);	
	}

}
 