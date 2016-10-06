angular.module('Admission',[
  'Admission.auth',
  'Admission.personal',
  'Admission.agreement',
  'Admission.testResults',
  'Admission.servics',
  'ngRoute'
])
.config(function($routeProvider, $httpProvider){
	$routeProvider
  .when('/',{
    templateUrl:'app/views/auth/signin.html',
    controller:'AuthController'
  })
	.when('/signin',{
		templateUrl: 'app/views/auth/signin.html',
		controller: 'AuthController'
	})
  .when('/personalInfo',{
    templateUrl: 'app/views/personalInfo/personalInfo.html',
    controller: 'PersonalController'
  })
  .when('/agreement',{
    templateUrl: 'app/views/rbkAgreement/rbkAgreement.html',
    controller: 'AgreenmentController'
  })
  .when('/videoIntro',{
    templateUrl: 'app/views/testsResults/videoIntro.html',
    controller: 'TestsController'
  })
  .when('/psychologicalTest',{
    templateUrl: 'app/views/testsResults/psychologicalTest.html',
    controller: 'TestsController'
  })
  .when('/mindSetTest',{
    templateUrl: 'app/views/testsResults/mindsetTest.html',
    controller: 'TestsController'
  })
  .when('/analyticTest',{
    templateUrl: 'app/views/testsResults/analyticTest.html',
    controller: 'TestsController'
  })
  .when('/congrats', {
    templateUrl: 'app/views/testsResults/congrats.html',
    controller: 'TestsController'
  })
  
	$httpProvider.interceptors.push('AttachTokens');
})
.factory('AttachTokens',function($window){
	var attach = {
    request: function (object) {
      var jwt = $window.localStorage.getItem('com.memorize');
      if (jwt) {
        object.headers['x-access-token'] = jwt;
      }
      object.headers['Allow-Control-Allow-Origin'] = '*';
      return object;
    }
  };
  return attach;
})
.run(function ($rootScope, $location, Auth) {
  $rootScope.$on('$routeChangeStart', function (evt, next, current) {
    if (next.$$route && next.$$route.authenticate && !Auth.isAuth()) {
      //$location.path('/signin');
    }
  });
});
