(function(){

var app = angular.module('dockit', ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
		.when( '/landing', {
			templateUrl: 'partials/landing.html',
			controller: 'landingControl'
		})
		.when( '/register', {
			templateUrl: 'partials/register.html',
			controller: 'registerControl'
		})
		.otherwise({ redirectTo: '/landing' })
});

//universal controller
app.controller('mainControl', mainControl );
app.controller( 'landingControl', landingControl );
app.controller('registerControl', function(){
	return;
})
})();
