var Video = require('../database/databaseController.js');
var helpers = require('./helpers.js'); // our custom middleware

module.exports = function (app, express) {

	
  // If a request is sent somewhere other than the routes above,
  // send it through our custom error handler
  app.use(helpers.errorLogger);
  app.use(helpers.errorHandler);
};

