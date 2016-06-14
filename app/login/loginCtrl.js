(function(){
	'use strict';
	angular.module('farmersMarket.login')
		.controller('loginCtrl', ['$scope', function($scope){
		function init(){
			$scope.login = {
				username:"",
				password:"",
				rememberMe:false
			};
		}
		$scope.loginUser = function(){
				console.log($scope.login);
			};
		init();

		}]);
})();