var express = require('express')
	, http = require('http');

var app = express();

app.set('port', process.env.PORT || 3000);


var router = express.Router();

//app.use('/public', static(path.join(__dirname, 'public')));

router.route('/process/login').post(function(req, res) {
	console.log('/process/login processing.');
	
	var paramId = req.body.id || req.query.id;
	var paramPassword = req.body.password || req.query.password;
	
	
	res.writeHead('200', {'Content-Type':'text/html;charset=utf8'});
	res.write('<h1>Android Server Main Test</h1>');
	res.write('Android Server Sender Module by Express');
	res.write('<div><p>'+paramId+'</p></div>');
	res.write('<div><p>'+paramPassword+'</p></div>');

	res.end();
});




http.createServer(app).listen(app.get('port'), function(){
	console.log('server started : ' + app.get('port'));
});
