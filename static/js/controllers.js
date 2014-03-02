function landingControl ($scope) {
	return;
}

function dashboardControl ($scope) {
	var taskObj = function (){
		return {
			description : "Description",
			exp : 100,
			time : new Date(),
			hour : 23,
			minute : 59
		};
	};
	
	$scope.tasks = [];
	$scope.task = new taskObj ();
	$scope.charIcon = "../assets/cowmove.gif";

	$scope.setChar = function( str ){
		switch(str){
			case "MCOW":
				$scope.charIcon = "../assets/cowmove.gif";
				break;
			case "PCOW":
				$scope.charIcon = "../assets/purp_run.gif";
				break;
			case "PIG":
				$scope.charIcon = "../assets/pig_g.gif";
				break;
			case "KNIGHT":
				$scope.charIcon = "../assets/knight_g.gif";
				break;
			case "FENCE":
			$scope.charIcon = "../assets/fence_g.gif";
			break;
			default:
				$scope.charIcon = "../assets/cowmove.gif";
		}
	}


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

function mainControl ($scope, $http) {
	//class to add to text box if there is an error with 
	//login in
	$scope.status = "";

	$scope.email = "";
	$scope.password = "";

	$scope.signIn = function login () {
		$http.post('/login', {password : $scope.password, email : $scope.email})
			.success( function( data, headers, status, config ){
				var user = $scope.email.split("@");
				$rootScope.username = user[0];
				$location.path("/dashboard");
			})
			.error ( function( data, headers, status, config){
				$scope.status = "has-error";
				window.setTimeout( function(){
					$scope.$apply(function(){
					$scope.status = "";
					});
				}, 150);

			});
	}
}

