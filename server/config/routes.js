var candidateInfo = require('../controller/candidateInfoController.js');
var staff = require('../controller/staffController.js');
var agreement = require('../controller/agreementController.js');
var userTest = require('../controller/userTestController.js');
var helpers = require('./helpers.js'); 

module.exports = function (app, express) {

	//============================================================================
	/* 								candidateInfo  								*/
	//============================================================================
		app.post('/api/candidateInfo/updateCandidate', candidateInfo.updateCandidate);
		app.post('/api/candidateInfo/signin',candidateInfo.signin);
		app.post('/api/candidateInfo/signup',candidateInfo.signup);
		app.get('/api/candidateInfo/getAllCandidate', candidateInfo.getAllCandidate);
		app.post('/api/candidateInfo/getCandidate', candidateInfo.getCandidate);
		app.post('/api/candidateInfo/videoLink',candidateInfo.videoLink);
		app.post('/api/candidateInfo/deletCandidate', candidateInfo.deletCandidate); 
		app.post('/api/candidateInfo/getTotalUserOfType', candidateInfo.getTotalUserOfType); 
		app.post('/api/candidateInfo/getTotalNattionalaty',candidateInfo.getTotalNattionalaty) 
		app.post('/api/candidateInfo/getTotalGender', candidateInfo.getTotalGender) 
	
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
		app.post('/api/agreement/deletQuestion', agreement.deletQuestion);
		app.post('/api/agreement/getQuestionOptions', agreement.getQuestionOptions);
		app.get('/api/agreement/getAllQuestionsOptions', agreement.getAllQuestionsOptions); 

	//============================================================================
	/* 								  userTest							        */
	//============================================================================
		app.get('/api/userTest/getALLUsersTests', userTest.getALLUsersTests);
		app.post('/api/userTest/getUserTests', userTest.getUserTests);
		app.post('/api/userTest/insertPersonality', userTest.insertPersonality);
		app.post('/api/userTest/insertAnalitical', userTest.insertAnalitical);
		app.post('/api/userTest/insertCodeExp', userTest.insertCodeExp);
		app.post('/api/userTest/insertCodeSyntax', userTest.insertCodeSyntax);
		app.post('/api/userTest/insertMindSet', userTest.insertMindSet);

	//============================================================================
	/* 								erorr case  								*/
	//============================================================================	
	  	// If a request is sent somewhere other than the routes above,
	  	// send it through our custom error handler
	  	app.use(helpers.errorLogger);
	  	app.use(helpers.errorHandler);
};

