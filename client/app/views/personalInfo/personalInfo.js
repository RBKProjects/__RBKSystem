angular.module('Admission.Personal',[])
.controller('PersonalController',function($scope,$window,$location,PersonalInfo){
	$scope.userInfo={};
	$scope.sendUserInfo=function(){
		PersonalInfo.setUserInfo($scope.userInfo)
		.then(function(resp){
			console.log('info sent')
		})
	};

	$scope.getUserInfo=function(){	
		var userId=$window.localStorage.getItem('user');
		console.log('here',userId);
		PersonalInfo.getUserInfo(userId)
		.then(function(resp){
			$scope.userInfo=resp.data;
			console.log(resp);
		})
	}

	$scope.getUserInfo();
})