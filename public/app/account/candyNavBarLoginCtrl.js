angular.module('candyApp').controller('candyNavBarLoginCtrl',
 function($scope, $http, candyIdentity, candyNotifier, candyAuth){
	$scope.identity = candyIdentity;
    $scope.signin = function(username,password){
    	candyAuth.authenticateUser(username,password).then(function(success){
    		if(success){
				candyNotifier.success('You have successfully signed in!');
    		} else {
    			candyNotifier.error('Username/Password combination is incorrect');
        	}
    	});
    };
});