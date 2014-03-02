angular.module('candyApp',['ngResource','ngRoute']);

angular.module('candyApp').config(function($routeProvider,$locationProvider){
    $locationProvider.html5Mode(true);
    $routeProvider
    .when('/', {
        templateUrl: '/partials/main/main',
        controller: 'candyMainCtrl'
        })
    .when('/admin/users', {
        templateUrl: '/partials/admin/users-list',
        controller: 'candyUserListCtrl',
        resolve: {
            auth: function(candyIdentity, $q){
                if(candyIdentity.currentUser && candyIdentity.currentUser.roles.indexOf('admin') > -1){
                    return true;
                } else {
                    return $q.reject('not authorized'); 
                }

            }
        }
    });
});

angular.module('candyApp').run(function($rootScope,$location){
    $rootScope.$on('$routeChangeError', function(event, current, previous, rejection){
        if (rejection === 'not authorized'){
            $location.path('/');
        }
    })
});