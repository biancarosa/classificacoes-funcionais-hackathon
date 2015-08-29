'use strict';

/* Controllers */


var sport = {
	'atletismo' : 'Atletismo'
};


var disability = {
	'visual' : 'Deficiência Visual',
	'intelectual' : 'Deficiência Intelectual',
	'motora' : 'Deficiência Motora',
	'ausencia_ou_comprometimento' : 'Ausência ou comprometimento de membros',
	'nanismo' : 'Nanismo'
}

angular.module('myApp.controllers', [])
 	.controller('DetailController', function ($scope, $routeParams) {
 		$scope.sport = sport[$routeParams.sport];
 		$scope.disability = disability[$routeParams.disability];

 		$scope.routeSport = $routeParams.sport;
 		$scope.routeDisability = $routeParams.disability;

		$(".navbar-collapse").collapse('hide');
 	})
 	.controller('FaqController', function ($scope) {
		$(".navbar-collapse").collapse('hide');
 	});