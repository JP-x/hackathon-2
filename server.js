var express = require('express'),
	app = express();

app.get('/', function ( req, res ) {
	res.send("<p>YES!!</p");
});

app.listen(8080, function () {
	console.log("listening on port 8080");
});
