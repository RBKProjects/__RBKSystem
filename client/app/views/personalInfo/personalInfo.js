angular.module('Admission.Personal',[])
.controller('PersonalController',function($scope,PersonalInfo){
	$scope.userInfo={};
	var userInfo=function(){
		PersonalInfo.userInfo($scope.userInfo)
		.then(function(resp){

		})
	};
})