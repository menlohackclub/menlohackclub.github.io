var twilio = require('twilio');
var client = twilio('ACf0b6b8965d96aaae85a497897bcb475f', 'c7857cde401d1e2585aff93924221f22');
var express = require('express');
var app = express();

app.get('/', function(req, res) {
	//console.log("To: " + req.query.to + ", Message: " + req.query.message);
	// client.sendMessage({
	// 	to: req.query.to,
	// 	from: "12017204289",
	// 	body: req.query.message
	// });
	// client.calls.create({
	// 	url: "voice.xml",
	// 	to: req.query.to,
	// 	from: "12017204289"
	// }, function(err, call) {
	// 	//console.log(call.sid);
	// });
	client.calls.create({
		url: "http://localhost/rickroll",
		to: "+16506817711",
		from: "+12017204289"
	}, function(err, call) {
		process.stdout.write(call.sid);
	});

	res.send("Done");
});

app.post('/rickroll', function(req, res) {
	res.type('text/xml')
	res.send("<Response><Play>http://demo.twilio.com/docs/classic.mp3</Play></Response>")
});

app.listen(80, function() {
	console.log('Started listening on port 80');
});
