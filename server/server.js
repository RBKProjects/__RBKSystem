var express = require('express');
var app = express();
var server = require ('http').createServer(app);

var port = process.env.PORT || 3020;
require('./config/middleware.js') (app,express);
require('./config/routes.js') (app,express);
app.listen(port , function () {
	console.log('Server now listening on port ' + port);
});

module.exports = app;
