'use strict';

var AWS = require('aws-sdk');
var Bluebird = require('bluebird');
var memoize = require('lodash/function/memoize');

function getDynamoDb(options) {
  return Bluebird.promisifyAll(new AWS.DynamoDB(options));
}

/**
 * Returns an instance of AWS.DynamoDB which has Promise methods
 * suffixed by "Async"
 *
 * e.g.
 * getItem : getItemAsync
 * query : queryAsync
 *
 * @param options
 */
module.exports = memoize(getDynamoDb);
