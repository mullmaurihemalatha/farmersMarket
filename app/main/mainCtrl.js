(function(){
	'use strict';
	function mainCtrl($scope){
		function init(){
			$scope.navigationTemplate = "app/main/navbar.tpl.html";
			$scope.brandName = "Farmers Market";
			$scope.tabs =  [
			{display:"All Departments",name:"all departments",template:"app/home/allDept.tpl.html"},
			{display:"Groceries",name:"groceries",template:"app/sections/groceries.tpl.html"},
			{display:"Fruits",name:"fruits",template:"app/sections/fruits.tpl.html"},
			{display:"Vegatables",name:"vegatables",template:"app/sections/vegetables.tpl.html"},
			{display:"Beverages",name:"beverages",template:"app/sections/beverages.tpl.html"}
			
			];
			
		}
		$scope.loadView = function (item){
			$scope.contentTemplate = item.template;
		}
			
		$scope.loadLogin = function(){
			$scope.contentTemplate = "app/login/login.tpl.html";
		}
			
			
		init();
	}
	angular.module("farmersMarket")
		.controller('mainCtrl', ['$scope', mainCtrl])



})();