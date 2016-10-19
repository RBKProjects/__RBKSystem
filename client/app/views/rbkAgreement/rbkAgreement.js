angular.module('Admission.agreement',[])
.controller('AgreenmentController',function($scope,$window,Agreement){
	$scope.agreement={};
	$scope.questions={};
	$scope.questionOptions={};
	$scope.q_id="";

	$scope.sendAgreement=function(){
		var userId=$window.localStorage.getItem('user');
		console.log(userId, $scope.agreement)
		// Agreement.sendAnswers(userId)
		// .then(function(){
		// 	$location.path('/videoIntro')
		// })
	};

	$scope.getQuestions=function(){
		Agreement.getAllQuestions()
		.then(function(resp){
		//	console.log(resp.rows);
			$scope.questions=resp.rows;
			_.map(resp.rows,function(row){
				console.log('row np',row['id'])
				$scope.q_id=row['id'];
				$scope.getQuestionOptions(row['id']);
			})
		})
	};

	$scope.getQuestionOptions=function(id){
		Agreement.getQuestionOptions(id)
		.then(function(resp){
			console.log(resp.data);
			//$scope.questionOptions=resp;
		});
	};

	$scope.getQuestions();
})