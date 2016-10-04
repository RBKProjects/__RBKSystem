angular.module('Admission.agreement',[])
.controller('AgreenmentController',function($scope,$window,agreement){
$scope.agreement={};
$scope.sendAgreement=function(){
	var userId=$window.localStorage.getItem('user');
	console.log(userId, $scope.agreement)
	// agreement.sendAgreement(userId)
	// .then(function(){
	// 	$location.path('/')
	// })
}
})