angular.module('candyApp').controller('candyNavBarLoginCtrl', function($scope,$http,candyIdentity,candyNotifier){
	$scope.identity = candyIdentity;
    $scope.signin = function(username,password){
        $http.post('/login', {username:username, password:password}).then(function(response){
            if(response.data.success){
            	candyIdentity.currentUser = response.data.user;
               	candyNotifier.success('You have successfully signed in!');
            } else {
                candyNotifier.error('Username/Password combination is incorrect');
        	}
    	})
    };
});