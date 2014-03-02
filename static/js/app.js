(function(){

var app = angular.module('dockit', ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
		.when( '/landing', {
			templateUrl: 'partials/landing.html',
			controller: 'landingControl'
		})

		.otherwise({ redirectTo: '/landing' })
});

//universal controller
app.controller('mainControl', mainControl );
app.controller( 'landingControl', landingControl );
})();
