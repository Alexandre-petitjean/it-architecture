'use strict'

var varhelloworldController = require('./helloworldControllerService');

module.exports.funchelloworldGET = function funchelloworldGET(req, res, next) {
  varhelloworldController.funchelloworldGET(req.swagger.params, res, next);
};
'use strict'

var varhelloworldController = require('./helloworldControllerService');

module.exports.helloworld = function helloworld(req, res, next) {
  varhelloworldController.helloworld(req.swagger.params, res, next);
};