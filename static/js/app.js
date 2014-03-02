(function(){

var app = angular.module('dockit', ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
		.when( '/landing', {
			templateUrl: 'partials/landing.html',
			controller: 'landingControl'
		})

		.when('/dashboard-:user', {
			templateUrl: 'partials/dashboard.html',
			controller: 'dashboardControl'
		})

		.otherwise({ redirectTo: '/landing' })
});

//universal controller
app.controller('mainControl', mainControl );
app.controller('landingControl', landingControl );
app.controller('dashboardControl', dashboardControl);
})();
