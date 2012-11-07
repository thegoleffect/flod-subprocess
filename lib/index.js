var _ = require('underscore');
var os = require('os');
var qs = require('querystring');
var utils = require('./utils');

var BaseProcess = require('./base');

var Subprocess = function () {

  utils.mixin(this, BaseProcess);
  
  this.init();
  return this;
}

Subprocess.prototype.init = function () {

  process.on('message', this.bind(this.onMessage));
}

Subprocess.prototype.onMessage = function (msg) {

  var data;
  switch (msg.action) {
    case 'mem':
      data = process.memoryUsage();
      break;
    case 'load':
      data = os.loadavg();
      break;
    default:
      data = {};
  }
  
  if (process.send) {
    process.send({
      action: msg.action,
      data: data
    })
  }
}


Subprocess.prototype.log = function (action, data) {

  
}


Subprocess.prototype.logRequest = function (query, raw) {

  
}

Subprocess.prototype.started = function () {

  
}

module.exports = Subprocess;