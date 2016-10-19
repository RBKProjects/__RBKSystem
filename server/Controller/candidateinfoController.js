var mysql = require('mysql');
var db = require('../database.js');
var jwt = require('jwt-simple');

//declare connection 
var connection = db ;

module.exports = {
	signin : function (req, res) {
		var email = req.body.email;
		var password = req.body.password;
		var sql    = 'SELECT email,password,id FROM candidateinfo WHERE email = ' + connection.escape(req.body.email);
		connection.query(sql, function(err, rows, fields) {
		  if (err){
		  	throw err;	
		  }else{
		  	if (rows.length === 1){ 
				if ( rows[0].password === password){
					var token = jwt.encode(rows[0], 'secret');
				    res.setHeader('x-access-token',token);
				    res.json({token: token, user : rows[0]['id']});

				}else{
					res.status(500).send('Wrong Password');
				}		  
		    }else{
		    	res.status(500).send('no User');
		    }
		  }
		});	
	},

	signup : function (req, res) {
		var candidate = req.body;
		var newCandidate = {
			name : candidate.name,
			email : candidate.email,
			password : candidate.password
		}
		var sql    = 'SELECT * FROM candidateinfo WHERE email = ' + connection.escape(candidate.email);
		connection.query(sql, function(err, rows, fields) {
		  if (!err){
		  		if(rows.length > 0){ 
			  		res.json({rows : rows, msg : 'User exist'});
			  	}else{
					connection.query('INSERT INTO candidateinfo SET ?', newCandidate, function (err, rows) {
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

	updateCandidate : function (req, res) {
		var candidate = req.body;
		var post  = {
		    name: candidate.name,
		    email: candidate.email,
		    password: candidate.password,
		    phone: candidate.phone,
		    gender: candidate.gender,
		    dateOfBirth: candidate.dateOfBirth,
		    nationality: candidate.nationality,
		    residence: candidate.residence,
		    destance: candidate.destance,
		    camp_Location: candidate.camp_Location,
		}
		connection.query('UPDATE candidateinfo SET ? WHERE id = ?', [post, candidate.id])
		res.json('info Updated');
	},


	videoLink : function (req, res) {
		var post = {
			videoLink : req.body.videoLink
		}
		connection.query('UPDATE candidateinfo SET ? WHERE id = ?', [post, req.body.id]);
		res.json('videoLink Updated');	
	},

	getCandidate : function (req, res) {
		var sql    = 'SELECT * FROM candidateinfo WHERE id = ' + connection.escape(req.body.id);
		connection.query(sql, function(err, rows, fields) {
			if (err){
				throw err;	
			} else{
				res.json({rows : rows[0]});
			}
		});
	},

	getAllCandidate : function (req, res) {
		var sql = 'SELECT * FROM candidateinfo';
		connection.query(sql, function(err, rows, fields) {
			if (!err){
				res.json({rows : rows});
			}else{
				throw err;
			}
		});
	},

	deletCandidate : function (req, res) {
		var sql = 'DELETE FROM candidateinfo WHERE email = ' + req.body.email;
		connection.query(sql, function (err, result) {
			if (err){
				throw err;
			} else{
				res.json({result : result});
			}
		});
	},

	getTotalUserOfType : function (req, res) {
		var user_type = req.body.user_type;
		var sql = 'SELECT count(email) FROM candidateinfo WHERE user_type =' + connection.escape(user_type);
		connection.query(sql, function (err, result) {
			if(err){
				throw err;
			}else{
				res.json({result : result});
			}
		});
	},

	getTotalNattionalaty : function (req, res) {
		var nationality = req.body.nationality;
		if(nationality.toLowerCase() === "jordanian"){
			var sql = 'SELECT count(email) FROM candidateinfo WHERE nationality =' + connection.escape(nationality);
			connection.query(sql, function (err, result) {
				if(err){
					throw err;
				}else{
					res.json({result : result});
				}
			});
		}else{
			var sql_refugees = 'SELECT count(email) FROM candidateinfo WHERE isRefugee = true'
			connection.query(sql_refugees, function (err, result) {
				if (err) {
					throw err;
				}else{
					res.json({result : result})
				}
			})
		} 
	},

	getTotalGender : function () {
		var gender = req.escape(gender);
		var sql = 'SELECT count(gender) FROM candidateinfo WHERE'+ connection.escape(gender);
		connection.query(sql, function (err, result) {
			if(err){
				throw err;
			}else{
				res.json({ result : result })
			}
		});
	}

}
 
















