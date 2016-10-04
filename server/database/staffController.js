var mysql = require('mysql');
var db = require('./database.js');
var jwt = require('jwt-simple');

//declare connection 
var connection = db ;

module.exports = {

	signin : function (req, res) {
		var email = req.body.email;
		var password = req.body.password;
		var sql    = 'SELECT * FROM staff WHERE email = ' + connection.escape(req.body.email);
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
		var sql    = 'SELECT * FROM staff WHERE email = ' + connection.escape(candidate.email);
		connection.query(sql, function(err, rows, fields) {
		  if (!err){
		  		if(rows.length > 0){ 
			  		res.json({rows : rows, msg : 'User exist'});
			  	}else{
					connection.query('INSERT INTO staff SET ?', newCandidate, function (err, rows) {
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
		    camp_Location: candidate.camp_Location,
		    states : candidate.states
		}
		connection.query('UPDATE candidateinfo SET ? WHERE Id = ?', [post, 1])
	},

	updateInfo : function (req, res) {
		var candidate = req.body;
		var post  = {
		    name: candidate.name,
		    email: candidate.email,
		    password: candidate.password,
		    phone: candidate.phone,
		    gender: candidate.gender,
		    linkin: candidate.linkin,
		    facebook : candidate.facebook,
		    slack: candidate.slack,
		    position: candidate.position,
		    started_date: candidate.started_date,
		    salary: candidate.salary,
		    description: candidate.description
		}
		connection.query('UPDATE candidateinfo SET ? WHERE Id = ?', [post, candidate.id])
	}
	

}