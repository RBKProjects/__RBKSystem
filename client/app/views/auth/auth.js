angular.module('Admission.auth',[])
.controller('AuthController',function($scope,Auth){
	$scope.user={};
	$scope.signup=function(){
		Auth.signup($scope.user)
		.then(function(data){

		})
	};

	$scope.signin=function(){
		Auth.signin($scope.user)
		.then(function(data){

		})
	};

});