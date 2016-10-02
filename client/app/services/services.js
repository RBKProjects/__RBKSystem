angular.module('Admission.servics',[])
.factory('Auth',function($http){
	var signin=function(data){
		return $http({
			method:'POST',
			url:'/api/',
			data:data
		})
		.then(function(resp){
			return resp;
		})
	};

	var signup=function(data){
		return $http({
			method:'POST',
			url:'/api',
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
.factory('PersonalInfo',function($http){
	var userInfo=function(data){
		return $http({
			mehtod:'POST',
			url:'/api/',
			data:data
		})
		.then(function(resp){
			return resp;
		})
	};

	return ({
		userInfo: userInfo
	})
})