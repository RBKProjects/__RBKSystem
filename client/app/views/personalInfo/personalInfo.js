angular.module('Admission.personal',[])
.controller('PersonalController',function($scope,$window,$location,PersonalInfo){
	$scope.userInfo={};
	$scope.userDate={};
	$scope.sendUserInfo=function(){
		var day=Number(new Date($scope.userDate.date).getDate())+1;
		var month=Number(new Date($scope.userDate.date).getMonth())+1;
		var year=new Date($scope.userDate.date).getFullYear();
		var date=year+"-"+month.toString()+"-"+day.toString();
		if(year > new Date().getFullYear() || year > new Date().getFullYear-15 ){
			alert("please select the right age to continue");
		}else{
			$scope.userInfo.dateOfBirth=date;
		}
		if($scope.userInfo.name  !== null && $scope.userInfo.phone !== null && $scope.userInfo.email !== null && $scope.userInfo.nationality !== null && $scope.userInfo.residence !== null && $scope.userInfo.dateOfBirth !== null && $scope.userInfo.gender !== null && $scope.userInfo.camp_Location !== null && $scope.userInfo.destance){
			PersonalInfo.setUserInfo($scope.userInfo)
			.then(function(resp){
				console.log('info sent');
			})
			PersonalInfo.sendCodeExp({ id : $scope.userInfo.id, codeExp: $scope.userInfo.codeExp})
			.then(function(resp){
				console.log(resp);
			})
			$location.path('/agreement')
		}
		else{
			alert("please fill all the required information");
		}
	};

	$scope.getUserInfo=function(){	
		var userId=$window.localStorage.getItem('user');
		PersonalInfo.getUserInfo(userId)
		.then(function(data){
			$scope.userInfo=data.rows;
			console.log($scope.userInfo);
		})		
	}

	$scope.getUserInfo();
})