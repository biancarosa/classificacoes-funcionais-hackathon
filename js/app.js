'use strict';

// Declare app level module which depends on filters, and services

angular.module('myApp', [
  'myApp.controllers', 'ngRoute'
]).
config(function ($routeProvider, $locationProvider) {
  $routeProvider.
    when('/', {
      templateUrl: 'partials/principal.html'
    }).
    when('/:sport/:disability', {
      templateUrl: 'partials/detalhe.html',
      controller: 'DetailController'
    }).
    when('/faq', {
      templateUrl: 'partials/faq.html',
      controller: 'MainController'
    }).
    when('/quem_pode', {
      templateUrl: 'partials/quem_pode.html',
      controller: 'MainController'
    }).
    when('/:sport', {
      templateUrl: 'partials/escolha.html',
      controller: 'PickerController'
    }).
    otherwise({
      redirectTo: '/'
    });
    
});