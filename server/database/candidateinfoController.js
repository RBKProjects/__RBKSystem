var mysql = require('mysql');
var db = require('./database.js');
var jwt = require('jwt-simple');

// declare connection 
var connection = db ;

module.exports = {
	signin : function (req, res) {
		var email = req.body.email;
		var password = req.body.password;
		var sql    = 'SELECT * FROM candidateinfo WHERE email = ' + connection.escape(req.body.email);
		connection.query(sql, function(err, rows, fields) {
		  if (err){
		  	throw err;	
		  }else{
		  	if (rows.length === 1){ 
				if ( rows[0].password === password){
					var token = jwt.encode(rows[0], 'secret');
				    res.setHeader('x-access-token',token);
				    res.json({x:7,token: token, user : rows[0]['id']});
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
					    	console.log(rows.insertId);
						}
					})
			    }
		  }else{
		  	throw err
		  };

		});

	},

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
		connection.query('INSERT INTO candidateinfo SET ?', post, function(err, rows) {
			if (err){
				throw err;
			} else{
				res.json({rows : rows});
		    	console.log(rows.insertId);
			}
		});

	},

	getCandidate : function (req, res) {
		var sql    = 'SELECT * FROM candidateinfo WHERE name = ' + connection.escape(req.body.name);
		connection.query(sql, function(err, rows, fields) {
		  if (err) throw err;
		  console.log('The solution is: ', rows);
		  res.json({rows : rows});
		});
	},

	getAllCandidate : function (req, res) {
		var sql = 'SELECT * FROM candidateinfo';
		connection.query(sql, function(err, rows, fields) {
		  if (!err){
		  	console.log('The solution is: ', rows);
		  	res.json({rows : rows});
		  }else{
			throw err;
		  }
		});
	},

	updateCandidate : function (req, res) {
		
	},

	deletCandidate : function (req, res) {
		var sql = 'DELETE FROM candidateinfo WHERE email = ' + req.body.email;
		connection.query(sql, function (err, result) {
		  if (err) throw err;

		  console.log('deleted ' + result.affectedRows + ' rows');
		})
	}

}
 
















