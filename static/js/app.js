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

		.when( '/register', {
			templateUrl: 'partials/register.html',
			controller: 'registerControl'
		})
		.otherwise({ redirectTo: '/landing' })
});

//universal settings
app.run(function($rootScope){
	$rootScope.username = '';
});

//universal controller
app.controller('mainControl', mainControl );

app.controller('dashboardControl', dashboardControl);
app.controller( 'landingControl', landingControl );
app.controller('registerControl', function(){
	return;
});

})();
