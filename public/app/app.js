angular.module('myApp',['ngResource','ngRoute']);

angular.module('myApp').config(function($routeProvider,$locationProvider){
    $locationProvider.html5Mode(true);
    $routeProvider
    .when('/', {
        templateUrl: '/partials/main',
        controller: 'mainCtrl'
        });
    });

angular.module('myApp').controller('mainCtrl', function($scope,$log){
    $scope.myVar = 'Hello Angular'; 
    $log.log('Created Main Controller');
    });