var mysql = require('mysql');

function DB() {
	var connection = mysql.createConnection({
	    user: 'root',
	    password: '',
	    host: 'localhost',
	    port: 3305,
	    database: 'rbkadmission'
	});
	return connection;
}

module.exports = DB();
