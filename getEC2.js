'use strict';

var AWS = require('aws-sdk');
var memoize = require('lodash/function/memoize');
var promisifyAll = require('./lib/promisifyAll');

function getEC2(options) {
  return promisifyAll(new AWS.EC2(options));
}

/**
 * Returns an instance of AWS.EC2 which has Promise methods
 * suffixed by "Promised"
 *
 * e.g.
 * createImage => createImagePromised
 *
 * @param options
 */
module.exports = memoize(getEC2);
