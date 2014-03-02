angular.module('candyApp',['ngResource','ngRoute']);

angular.module('candyApp').config(function($routeProvider,$locationProvider){
    var routeRoleChecks = {
        admin: { auth: function(candyAuth){
               return candyAuth.authorizeCurrentUserForRoute('admin');
            }}
    }

    $locationProvider.html5Mode(true);
    $routeProvider
    .when('/', {
        templateUrl: '/partials/main/main',
        controller: 'candyMainCtrl'
        })
    .when('/admin/users', {
        templateUrl: '/partials/admin/users-list',
        controller: 'candyUserListCtrl', resolve: routeRoleChecks.admin
    });
});

angular.module('candyApp').run(function($rootScope,$location){
    $rootScope.$on('$routeChangeError', function(event, current, previous, rejection){
        if (rejection === 'not authorized'){
            $location.path('/');
        }
    })
});