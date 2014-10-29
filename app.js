/*

Simple blog front end demo in order to learn AngularJS - You can add new posts, add comments, and like posts.

*/

  var app = angular.module('blogApp',[
    'ngAnimate', 
    'ngRoute',
    'ngResource'
    ]);
  
  app.config(function ($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'app/views/postsList.html',
			controller : 'blogCtrl'
		})
		.when('/posts/:postId', {
			templateUrl: 'app/views/showPost.html'
			
		})
		.when('/register',{
			templateUrl: 'app/views/register.html',
			controller : 'regCtrl'
		})
		.when('/login', {
			templateUrl: 'app/views/login.html'
			
		})
		.when('/add', {
			templateUrl: 'app/views/addPost.html',
			
		})
		.otherwise({
			redirectTo: '/'
		});
});

 app.controller('regCtrl', function($scope) {
		$scope.message = 'register';
	});
 
