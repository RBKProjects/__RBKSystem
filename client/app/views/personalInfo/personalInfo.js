angular.module('Admission.personal',[])
.controller('PersonalController',function($scope,$window,$location,PersonalInfo){
	$scope.userInfo={};
	$scope.sendUserInfo=function(){
		console.log($scope.userInfo)
		PersonalInfo.setUserInfo($scope.userInfo)
		.then(function(resp){
			console.log('info sent');
		})
		PersonalInfo.sendCodeExp({ id : $scope.userInfo.id, codeExp: $scope.userInfo.codeExp})
		.then(function(resp){
			console.log(resp);
			$location.path('/agreement')
		})
	};

	$scope.getUserInfo=function(){	
		var userId=$window.localStorage.getItem('user');
		console.log('here',userId);
		PersonalInfo.getUserInfo(userId)
		.then(function(data){
			$scope.userInfo=data.rows;
		})
	}

	$scope.getUserInfo();
})