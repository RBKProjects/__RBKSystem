var candidateinfo = require('../database/candidateinfoController.js');
var helpers = require('./helpers.js'); // our custom middleware

module.exports = function (app, express) {


	//============================================================================
	/* 								candidateinfo  								*/
	//============================================================================
	app.post('/api/candidateinfo/signin',candidateinfo.signin);
	app.post('/api/candidateinfo/signup',candidateinfo.signup);
	app.post('/api/candidateinfo/updateCandidate', candidateinfo.updateCandidate);
	app.get('/api/candidateinfo/getAllCandidate', candidateinfo.getAllCandidate);
	app.get('/api/candidateinfo/getCandidate', candidateinfo.getCandidate);
	// app.get('/api/candidateinfo/', candidateinfo.getUsers);
	// app.get('/api/candidateinfo/', candidateinfo.getUsers);
	


	
  // If a request is sent somewhere other than the routes above,
  // send it through our custom error handler
  app.use(helpers.errorLogger);
  app.use(helpers.errorHandler);
};

