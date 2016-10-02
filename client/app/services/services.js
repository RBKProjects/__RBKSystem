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
			return resp;
		})
	};

	var signup=function(data){
		return $http({
			method:'POST',
			url:'/api/candidateinfo/signup',
			data:data
		})
		.then(function(resp){
			return resp;
		})
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
			mehtod:'POST',
			url:'/api/candidateinfo/updateCandidate',
			data:data
		})
		.then(function(resp){
			return resp;
		})
	};

	return ({
		userInfo: userInfo
	});
});
