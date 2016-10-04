angular.module('Admission.personal',[])
.controller('PersonalController',function($scope,$window,$location,personalInfo){
	$scope.userInfo={};
	$scope.sendUserInfo=function(){
		personalInfo.setUserInfo($scope.userInfo)
		.then(function(resp){
			console.log('info sent');
		})
	};

	$scope.getUserInfo=function(){	
		var userId=$window.localStorage.getItem('user');
		console.log('here',userId);
		personalInfo.getUserInfo(userId)
		.then(function(data){
			$scope.userInfo=data.rows;
		})
	}

	$scope.getUserInfo();
})