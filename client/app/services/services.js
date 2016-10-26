angular.module('Admission.servics',[])

//===================================================================
/*							Auth factory 	     				   */
//===================================================================
.factory('Auth',function($http){
	
	var signin=function(data){
		return $http({
			method:'POST',
			url:'/api/candidateinfo/signin',
			data:data
		})
		.then(function(resp){
			return resp.data;
		});
	};

	var signup=function(data){
		return $http({
			method:'POST',
			url:'/api/candidateinfo/signup',
			data:data
		})
		.then(function(resp){
			return resp.data;
		});
	};

	return({
		signin: signin,
		signup: signup
	})
})

//===================================================================
/*				  candidate PersonalInfo factory 	     		   */
//===================================================================
.factory('PersonalInfo',function($http){
	var setUserInfo=function(data){
		return $http({
			method:'POST',
			url:'/api/candidateinfo/updateCandidate',
			data:data
		})
		.then(function(resp){
			return resp;
		});
	}
		
	var sendCodeExp=function(data){
		return $http({
			method: 'POST',
			url: '/api/usertest/insertCodeExp',
			data: data
		})
		.then(function(resp){
			return resp;
		});
	};

	var getUserInfo=function(id){
		return $http({
			method:'POST',
			url:'/api/candidateinfo/getCandidate',
			data: {id:id}
		})
		.then(function(resp){
			return resp.data;
		});
	};

	return ({
		setUserInfo : setUserInfo,
		getUserInfo : getUserInfo,
		sendCodeExp : sendCodeExp
	})
})

//===================================================================
/*				  Agreement factory 	     		   */
//===================================================================

.factory('Agreement',function($http){
	var sendAnswers=function(data){
		return $http({
			method:'POST',
			url:'/api/agreement/insertAnswer',
			data: data
		})
		.then(function(resp){
			return resp.data;
		});
	};

	var getAllQuestions=function(){
		return $http({
			method: 'GET',
			url: '/api/agreement/getAllQuestion'
		})
		.then(function(resp){
			return resp.data;
		});
	};
	
	var getQuestionOptions=function(questionId){
		return $http({
			method: 'POST',
			url: '/api/agreement/getQuestionOptions',
			data: questionId
		})
		.then(function(resp){
			return resp;
		})
	}
	return ({
		sendAnswers: sendAnswers,
		getAllQuestions : getAllQuestions,
		getQuestionOptions : getQuestionOptions
	})
})

//===================================================================
/*				  Tests factory 	     		   */
//===================================================================

.factory('TestsResults',function($http){
	var sendVideoLink=function(url){
		return $http({
			method: 'POST',
			url: '/api/candidateinfo/videoLink',
			data: url
		})
		.then(function(resp){
			return resp.data;
		});
	};

	var sendPsychologicalTest=function(result){
		return $http({
			method: 'POST',
			url: '/api/usertest/insertPersonality',
			data: result
		})
		.then(function(resp){
			return resp;
		});
	};

	var sendMindSetEmail=function(email){
		return $http({
			method: 'POST',
			url: '/api/usertest/insertMindSet',
			data: email
		})
		.then(function(resp){
			return resp;
		});
	};

	var sendAnalyticEmail=function(email){
		return $http({
			method: 'POST',
			url: '/api/usertest/insertAnalitical',
			data: email
		})
		.then(function(resp){
			return resp;
		})

	}

	var sendCodeSyntax=function(data){
		return $http({
			method: 'POST',
			url:'/api/usertest/insertCodeSyntax',
			data: data
		})
		.then(function(resp){
			return resp;
		})
	}

	return({
		sendVideoLink : sendVideoLink,
		sendPsychologicalTest : sendPsychologicalTest,
		sendMindSetEmail : sendMindSetEmail,
		sendAnalyticEmail : sendAnalyticEmail,
		sendCodeSyntax : sendCodeSyntax
	})
})