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
		})
	};

	var signup=function(data){
		return $http({
			method:'POST',
			url:'/api/candidateinfo/signup',
			data:data
		})
		.then(function(resp){
			return resp.data;
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
		console.log('thereeeee')
		return $http({
			method:'POST',
			url:'/api/candidateinfo/updateCandidate',
			data:data
		})
		.then(function(resp){
			console.log('respppp')
			return resp;
		})
	};

	var getUserInfo=function(id){
		console.log('there')
		return $http({
			method:'POST',
			url:'/api/candidateinfo/getCandidate',
			data: {id:id}
		})
		.then(function(resp){
			return resp.data;
		})
	};

	return ({
		setUserInfo: setUserInfo,
		getUserInfo: getUserInfo
	});
});
