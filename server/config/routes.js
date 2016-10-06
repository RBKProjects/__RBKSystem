var candidateinfo = require('../database/candidateinfoController.js');
var staff = require('../database/staffController.js');
var agreement = require('../database/argumentController.js');
var usertest = require('../database/usertestController.js');
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
		app.post('/api/candidateinfo/videoLink',candidateinfo.videoLink);
	
	//============================================================================
	/* 									staff   								*/
	//============================================================================
		app.post('/api/staff/signin', staff.signin);
		app.post('/api/staff/signup', staff.signup);
		app.post('/api/staff/updateCandidate', staff.updateCandidate);
		app.post('/api/staff/updateInfo', staff.updateInfo);

	//============================================================================
	/* 								agreementqustions							*/
	//============================================================================
		app.post('/api/agreement/getQuestion', agreement.getQuestion);
		app.post('/api/agreement/addQuestion', agreement.addQuestion);
		app.get('/api/agreement/getAllQuestion', agreement.getAllQuestion);
		app.post('/api/agreement/insertAnswer', agreement.insertAnswer);
		app.post('/api/agreement/getAnswer', agreement.getAnswer);
		app.get('/api/agreement/getAllAnswer', agreement.getAllAnswer);

	//============================================================================
	/* 								  usertest							        */
	//============================================================================
		app.get('/api/usertest/getALLUsersTests', usertest.getALLUsersTests);
		app.post('/api/usertest/getUserTests', usertest.getUserTests);
		app.post('/api/usertest/insertPersonality', usertest.insertPersonality);
		app.post('/api/usertest/insertAnalitical', usertest.insertAnalitical);
		app.post('/api/usertest/insertCodeExp', usertest.insertCodeExp);
		app.post('/api/usertest/insertCodeSyntax', usertest.insertCodeSyntax);
		app.post('/api/usertest/insertMindSet', usertest.insertMindSet);

	//============================================================================
	/* 								erorr case  								*/
	//============================================================================	
	  	// If a request is sent somewhere other than the routes above,
	  	// send it through our custom error handler
	  	app.use(helpers.errorLogger);
	  	app.use(helpers.errorHandler);
};

