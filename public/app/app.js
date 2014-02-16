angular.module('candyApp',['ngResource','ngRoute']);

angular.module('candyApp').config(function($routeProvider,$locationProvider){
    $locationProvider.html5Mode(true);
    $routeProvider
    .when('/', {
        templateUrl: '/partials/main',
        controller: 'candyMainCtrl'
        });
    });