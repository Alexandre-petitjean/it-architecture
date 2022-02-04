'use strict'

module.exports.funchelloworldGET = function funchelloworldGET(req, res, next) {
  res.send({
    message: 'This is the mockup controller for funchelloworldGET'
  });
};
'use strict'

module.exports.helloworld = function helloworld(req, res, next) {
  res.send({
    message: 'Hello ' + req.data.value.name
  });
};