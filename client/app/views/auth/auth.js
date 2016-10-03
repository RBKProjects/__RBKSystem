angular.module('Admission.auth',[])
.controller('AuthController',function($scope,Auth){
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
			console.log('you signed in')
		})
	};

});