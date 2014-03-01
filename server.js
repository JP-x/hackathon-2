var express = require('express'),
	app = express(),
	grid = require('./grid');

//use static files
app.use( express.static( __dirname + "/static" ) );


//start listening on server
var port = process.env.PORT || 8080;
app.listen(port, function () {
	console.log("listening on port " + port);
});

