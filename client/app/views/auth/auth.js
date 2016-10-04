angular.module('Admission.auth',[])
.controller('AuthController',function($scope,$window,$location,Auth){
	$scope.userin={};
	$scope.userup={};
	$scope.signup=function(){
		Auth.signup($scope.userup)
		.then(function(data){
			console.log('you signed up');
		})
	};

	$scope.signin=function(){
		Auth.signin($scope.userin)
		.then(function(data){
			console.log('you signed in',data.user);
			$window.localStorage.setItem('com.admission',data.token);
			$window.localStorage.setItem('user',data.user);
			$location.path('/personalInfo')

		})
	};

});