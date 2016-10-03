var candidateinfo = require('../database/candidateinfoController.js');
var staff = require('../database/staffController.js');
var helpers = require('./helpers.js'); 

module.exports = function (app, express) {

	//============================================================================
	/* 								candidateinfo  								*/
	//============================================================================
		app.post('/api/candidateinfo/updateCandidate', candidateinfo.updateCandidate);
		app.post('/api/candidateinfo/signin',candidateinfo.signin);
		app.post('/api/candidateinfo/signup',candidateinfo.signup);
		app.get('/api/candidateinfo/getAllCandidate', candidateinfo.getAllCandidate);
		app.post('/api/candidateinfo/getCandidate', candidateinfo.getCandidate);
		
	//============================================================================
	/* 									staff   								*/
	//============================================================================
		app.post('/api/staff/signin',staff.signin);
		app.post('/api/staff/signup',staff.signup);
		app.post('/api/staff/updateCandidate',staff.updateCandidate);
		app.post('/api/staff/updateInfo',staff.updateInfo);

	//============================================================================
	/* 								erorr case  								*/
	//============================================================================	
	  	// If a request is sent somewhere other than the routes above,
	  	// send it through our custom error handler
	  	app.use(helpers.errorLogger);
	  	app.use(helpers.errorHandler);
};

