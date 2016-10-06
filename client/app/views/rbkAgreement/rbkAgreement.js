angular.module('Admission.agreement',[])
.controller('AgreenmentController',function($scope,$window,Agreement){
$scope.agreement={};
$scope.sendAgreement=function(){
	var userId=$window.localStorage.getItem('user');
	console.log(userId, $scope.agreement)
	// Agreement.sendAgreement(userId)
	// .then(function(){
	// 	$location.path('/videoIntro')
	// })
}
})