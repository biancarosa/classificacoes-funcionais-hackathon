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

var cards = {
	'atletismo' : {
		'visual' : 
			 { 
			 	'campo' : {
				 	'definicao' : 'Atletas com deficiência visual',
				 	'legenda' :  [
							'F11 - atletas que percebem pouca ou nenhuma luz, competem com guia que enxerga',
							'F12 - atletas que enxergam parcialmente (campo visual menor que 5 graus), podem escolher competir com guia',
							'F13 - atletas que enxergam parcialmente (campo visual de 5 a 20 graus), não competem com guia'
					],
					'provas' : {
							'title' : 'Provas em Londres 2012',
							'lista' : ['Arremesso de disco',
										'Arremesso de dardo',
										'Arremesso de peso',
										'Salto a distância',
										'Salto triplo' ]
					},
					'tags' : ['Deficiência Visual']
				},
				'pista' : {
				 	'definicao' : 'Atletas com deficiência visual' , 
					'legenda' : [
						'T11 - atletas que percebem pouca ou nenhuma luz, competem com guia que enxerga',
						'T12 - atletas que enxergam parcialmente (campo visual menor que 5 graus), podem escolher competir com guia',
						'T13 - atletas que enxergam parcialmente (campo visual de 5 a 20 graus), não competem com guia'
					],
					'provas' : {
						'title' : 'Provas em Londres 2012',
						'lista' : ['100 metros',
									'200 m',
									'400 m',
									'800 m',
									'1.500 m',
									'5.000 m',
									'Revezamentos 4x 100 m',
									'Maratona' ]
					},
					'tags' : ['Deficiência Visual']
				}
			}, 
	}
};




angular.module('myApp.controllers', [])
 	.controller('DetailController', function ($scope, $routeParams) {
 		$scope.sport = sport[$routeParams.sport];
 		$scope.disability = disability[$routeParams.disability];

 		$scope.routeSport = $routeParams.sport;
 		$scope.routeDisability = $routeParams.disability;

 		console.log($scope.routeSport);
 		var currentCard = cards[$routeParams.sport][$routeParams.disability];

 		$scope.field = currentCard['campo'];
 		$scope.track = currentCard['pista'];
		
		$(".navbar-collapse").collapse('hide');
 	})
 	.controller('PickerController', function ($scope, $routeParams) {
 		$scope.sport = $routeParams.sport;

		$(".navbar-collapse").collapse('hide');
 	})
 	.controller('MainController', function ($scope) {
		$(".navbar-collapse").collapse('hide');
 	});