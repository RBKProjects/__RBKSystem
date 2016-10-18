angular.module('Admission.agreement',[])
.controller('AgreenmentController',function($scope,$window,Agreement){
$scope.agreement={};
$scope.questions={};

	$scope.sendAgreement=function(){
		var userId=$window.localStorage.getItem('user');
		console.log(userId, $scope.agreement)
		// Agreement.sendAnswers(userId)
		// .then(function(){
		// 	$location.path('/videoIntro')
		// })
	}

	$scope.getQuestions=function(){
		Agreement.getAllQuestions()
		.then(function(resp){
			console.log(resp.rows);
			$scope.questions=resp.rows;
		})
	}

$scope.getQuestions();
})