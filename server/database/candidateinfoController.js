var mysql = require('mysql');
var db = require('./database.js');
var jwt = require('jwt-simple');

//declare connection 
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
					    	console.log(rows.insertId);
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
		    nattionalaty: candidate.nattionalaty,
		    residence: candidate.residence,
		    destance: candidate.destance,
		    camp_Location: candidate.camp_Location,
		    videoLink: candidate.videoLink,
		    states: candidate.states
		}
		connection.query('UPDATE candidateinfo SET ? WHERE Id = ?', [post, 1])
		//connection.query('UPDATE candidateinfo SET name = :name, email = :email,
		// password = :password,phone = :phone, gender = :gender, dateOfBirth = :dateOfBirth,
		// nattionalaty = :nattionalaty, residence = :residence, destance = :destance,
		// camp_Location = :camp_Location, videoLink = :videoLink, states = :states WHERE id = ?',
		//post , function(err, results) {
			// if (err){
			// 	throw err;
			// } else{
			// 	res.json({rows : rows});
		 //    	console.log(rows.insertId);
			// }
		//});
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

	deletCandidate : function (req, res) {
		var sql = 'DELETE FROM candidateinfo WHERE email = ' + req.body.email;
		connection.query(sql, function (err, result) {
		  if (err) throw err;

		  console.log('deleted ' + result.affectedRows + ' rows');
		})
	}

}
 
















