function landingControl ($scope) {
	return;
}

function dashboardControl ($scope) {
	var taskObj = function (){
		return {
			description : "Description",
			exp : 100,
			time : new Date(),
			hour : 24,
			minute : 60
		};
	};
	
	$scope.tasks = [];
	$scope.task = new taskObj ();

	$scope.addTask = function () {
		var tmp = new taskObj();
		
		tmp.description = $scope.task.description;
		tmp.exp = $scope.task.exp;
		tmp.time.setUTCHours($scope.task.hour);
		tmp.time.setUTCMinutes($scope.task.minute);
		
		$scope.task = new taskObj();
		$scope.tasks.push ( tmp );
	};
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

