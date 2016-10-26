angular.module('Admission.testResults',[])
.controller('TestsController',function($scope,$window,$location,TestsResults){
	$scope.videoLink={};
	$scope.psychologicalTest={};
	$scope.mindSetTest={};
	$scope.analyticTest={};
	$scope.codingTest={};
	$scope.userId=$window.localStorage.getItem('user');

	$scope.sendVideoLink=function(){
		$scope.videoLink.id=$scope.userId;
		console.log($scope.userId)
		TestsResults.sendVideoLink($scope.videoLink)
		.then(function(resp){
			console.log(resp);
			$location.path('/psychologicalTest');
		})
	}

	$scope.sendPsychologicalTest=function(){
		$scope.psychologicalTest.id=$scope.userId;
		TestsResults.sendPsychologicalTest($scope.psychologicalTest)
		.then(function(resp){
			console.log(resp);
			$location.path('/mindSetTest');
		})
	}

	$scope.sendMindSetEmail=function(){
		$scope.mindSetTest.id=$scope.userId;
		TestsResults.sendMindSetEmail($scope.mindSetTest)
		.then(function(resp){
			console.log(resp);
			$location.path('/analyticTest')
		})
	}

	$scope.sendAnalyticEmail=function(){
		$scope.analyticTest.id=$scope.userId;
		TestsResults.sendAnalyticEmail($scope.analyticTest)
		.then(function(resp){
			console.log(resp);
			$location.path('/codingTest');
		})
	}

	$scope.sendCodeSyntax=function(){
		$scope.codingTest.id=$scope.userId;
		console.log($scope.codingTest);
		TestsResults.sendCodeSyntax($scope.codingTest)
		.then(function(resp){
			console.log(resp);
			$location.path('/congrats')
		})
	}

	$scope.goHome=function(){
		//$location.path('/')
	}

})