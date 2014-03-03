angular.module('candyApp').controller('candySignupCtrl', 
    function($scope, $location, candyUser, candyAuth, candyNotifier){

        $scope.signup = function(){
            var newUserData = {
                userName: $scope.email,
                password: $scope.password,
                firstName: $scope.fname,
                lastName: $scope.lname
            };

            candyAuth.createUser(newUserData).then(function(){
                candyNotifier.notify('User account created!');
                $location.path('/');
            }, function(reason){
                candyNotifier.error(reason);
            })
        }
        
});