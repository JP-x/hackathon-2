var express = require('express'),
	app = express();

app.get('/', function ( req, res ) {
	res.send("<p>YES!!</p");
});

var port = process.env.PORT || 8080;
app.listen(port, function () {
	console.log("listening on port " + port);
});
