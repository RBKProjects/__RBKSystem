angular.module('Admission.agreement',[])
.controller('AgreenmentController',function($scope,$window,Agreement){
	$scope.agreement={};
	$scope.questions={};
	$scope.questionOptions={};
	$scope.questions=[];

	$scope.sendAgreement=function(){
		var userId=$window.localStorage.getItem('user');
		console.log(userId, $scope.agreement)
		// Agreement.sendAnswers(userId)
		// .then(function(){
		// 	$location.path('/videoIntro')
		// })
	};

	$scope.getQuestion=function(){
		Agreement.getQuestion()
		.then(function(resp){

		})
	}
	$scope.getQuestions=function(){
		Agreement.getAllQuestions()
		.then(function(resp){
			 //save all questions id and questions in an array
			 for (var i = 0; i < resp.rows.length; i++) {
			 	$scope.questions.push({});
			 	$scope.questions[i][resp.rows[i]['id']]=[];
			 	$scope.questions[i][resp.rows[i]['id']].push(resp.rows[i]['id']);
			 	$scope.questions[i][resp.rows[i]['id']].push(resp.rows[i]['arabicQ']);
			 	$scope.questions[i][resp.rows[i]['id']].push(resp.rows[i]['englishQ']);
			 }

			_.map(resp.rows,function(row){
				$scope.getQuestionOptions(row['id']);
				console.log(row['id'])
			})
		})
	};

	$scope.getQuestionOptions=function(id,question){
		var obj={q_id : id};
		Agreement.getQuestionOptions(obj)
		.then(function(resp){
			_.map($scope.questions,function(row){
				//if(row['Q_id'] === id){
				console.log($scope.questions[row])

				//$scope.questions[row][id].push(row['text_a']);
				//$scope.questions[id].push(row['text_e']);
				//}
			})
			// console.log(resp.data.rows[0]);
			// console.log(resp.data.rows[1]['Q_id']);
			// console.log($scope.questions[0][resp.data.rows[0]['Q_id']]);
			//$scope.questions[resp.data.rows[0]['Q_id']].push(resp.data.rows[0]);
			//$scope.questions[resp.data.rows[1]['Q_id']].push(resp.data.rows[0]);
			//console.log($scope.questions);
			//$scope.questionOptions[id]=[resp.data.rows,question];
			//$scope.questionOptions={id:resp.data.rows};
			//console.log($scope.questionOptions)
		});
	};
	$scope.getQuestions();
	//$scope.getQuestions();
})