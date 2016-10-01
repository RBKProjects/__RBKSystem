var helpers = require('./helpers.js'); // our custom middleware

module.exports = function (app, express) {
  // authentication middleware used to decode token and made available on the request
    //  app.get('/api/links/', linksController.allLinks);
    //app.post('/api/links/', linksController.newLink);

  // If a request is sent somewhere other than the routes above,
  // send it through our custom error handler
  app.use(helpers.errorLogger);
  app.use(helpers.errorHandler);
};

