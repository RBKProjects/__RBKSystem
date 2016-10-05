angular.module('Admission.testResults',[])
.controller('TestsController',function($scope,$window,$location,TestsResults){
	$scope.videoLink={};
	$scope.psychologicalTest={};
	$scope.mindSetEmail={};

	$scope.sendVideoLink=function(){
		$scope.videoLink.id=$window.localStoarge.getItem('user');
		TestsResults.sendVideoLink($scope.videoLink)
		.then(function(resp){
			console.log(resp);
		})
	}

	$scope.sendPsychologicalTest=function(){
		TestsResults.sendPsychologicalTest($scope.psychologicalTest)
		.then(function(resp){
			console.log(resp);
		})
	}

	$scope.sendMindSetEmail=function(){
		TestsResults.sendMindSetEmail($scope.mindSetEmail)
		.then(function(resp){
			console.log(resp);
		})
	}
})