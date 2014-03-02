angular.module('candyApp').controller('candyUserListCtrl',function($scope,candyUser){
    $scope.users = candyUser.query(function(){});
});