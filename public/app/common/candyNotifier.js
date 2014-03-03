angular.module('candyApp').value('candyToastr', toastr);

angular.module('candyApp').factory('candyNotifier', function(candyToastr){
	return {
		success: function(msg){
			candyToastr.success(msg);
			console.log(msg);
		},
		error: function(msg){
			candyToastr.error(msg);
			console.log(msg);
		},
		notify: function(msg){
			candyToastr.info(msg);
			console.log(msg);
		}
	}	
});