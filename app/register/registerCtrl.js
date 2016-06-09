
	function registerCtrlFn($scope) {
		$scope.firstName = "Hema";
		$scope.lastName = "Mullamuri";
	}
	angular.module('farmersMarket.register')
    .controller('registerCtrl',registerCtrlFn)