angular.module('candyApp').controller('candyProfileCtrl', 
    function($scope, candyIdentity, candyAuth, candyNotifier){

        $scope.email = candyIdentity.currentUser.userName;
        $scope.fname = candyIdentity.currentUser.firstName;
        $scope.lname = candyIdentity.currentUser.lastName;

        $scope.update = function(){
            var newUserData = {
                userName: $scope.email,
                firstName: $scope.fname,
                lastName: $scope.lname
            };

            if($scope.password && $scope.password.length > 0){
                newUserData.password = $scope.password
            }

            candyAuth.updateCurrentUser(newUserData).then(function(){
                candyNotifier.notify('Your user account has been updated');
               // Don't we need to change the path?
               // $location.path('/');
            }, function(reason){
                candyNotifier.error(reason);
            })
        }
        
});