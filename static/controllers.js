function landingControl ($scope) {
	return;
}

function mainControl ($scope) {
	//class to add to text box if there is an error with 
	//login in
	$scope.status = "";

	$scope.email = "";
	$scope.password = "";

	$scope.signIn = function () {
		$scope.status = "has-error";
		window.setTimeout( function(){
			$scope.$apply(function(){
				$scope.status = "";
			});
		}, 150);
	}
		
}
