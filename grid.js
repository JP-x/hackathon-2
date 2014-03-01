var grid_cred = require('./grid_cred'),
	sendgrid = require('sendgrid')( grid_cred.user, grid_cred.pass );

var email = {
	to : "",
	from : "dockithack@gmail.com",
	subject : "",
	text : ""
};

module.exports = {
	sendMessage : function ( message, subject, recipient ) {
		email.text = message;
		email.to = recipient;
		email.subject = subject;

		sendgrid.send (email, function ( err, json ){
			if (err) 
				console.log(err);
			console.log(json);
		});
	}
};
