'use strict';

var object = require('../utils/object');
var GuardianError = require('./guardian_error');

function NoMethodAvailableError() {
  GuardianError.call(this, {
    message: 'No method available. ',
    errorCode: 'no_method_available'
  });
}

NoMethodAvailableError.prototype = object.create(GuardianError.prototype);
NoMethodAvailableError.prototype.constructor = NoMethodAvailableError;

module.exports = NoMethodAvailableError;
