angular.module('Admission.agreement',[])
.controller('AgreenmentController',function($scope,$window,Agreement,$location){
	$scope.agreement={};
	//$scope.questions={};
	$scope.questionOptions={};
	$scope.questions=[];
	$scope.options={};
	$scope.agreementAnswers={};

	$scope.sendAgreement=function(){
		var userId=$window.localStorage.getItem('user');
		console.log(userId, $scope.agreement)
		._map($scope.agreement,function(row){
			
		})
		// Agreement.sendAnswers(userId)
		// .then(function(){
			//$location.path('/videoIntro')
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
			 	$scope.questions[resp.rows[i]['id']]=[];
			 	$scope.questions[resp.rows[i]['id']].push(resp.rows[i]['id']);
			 	$scope.questions[resp.rows[i]['id']].push(resp.rows[i]['englishQ']);
			 	$scope.questions[resp.rows[i]['id']].push(resp.rows[i]['arabicQ']);
				$scope.getQuestionOptions(resp.rows[i]['id']);
			 }
		})
	};

	$scope.getQuestionOptions=function(id,question){
		var obj={q_id : id};
		Agreement.getQuestionOptions(obj)
		.then(function(resp){
			if(!$scope.options[id]){
				$scope.options[id]=[];
			}
			_.map(resp.data.rows,function(row){
					if(row['Q_id'] === id){
						var innerAr=[];
						innerAr.push(row['id']);
						innerAr.push(row['text_a']);
						innerAr.push(row['text_e']);
						$scope.options[id].push(innerAr);
					}
			})
		});
	};
	
	$scope.getQuestions();
})