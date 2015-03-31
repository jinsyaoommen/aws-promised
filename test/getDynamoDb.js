'use strict';

var proxyquire = require('proxyquire');
var sinon = require('sinon');
var test = require('tape');

test('promisify and cache DynamoDb client', function(t) {
  var AWS = { DynamoDB: sinon.stub() };
  var Bluebird = { promisifyAll: sinon.stub() };
  var getDynamoDb = proxyquire('../getDynamoDb', {
    'aws-sdk': AWS,
    bluebird: Bluebird
  });
  var options = 'foo';
  var standardDynamoDb = 'standard.DynamoDb';
  var promisedDynamoDb = 'promised.DynamoDb';
  var result;
  var cachedResult;

  AWS.DynamoDB.returns(standardDynamoDb);
  Bluebird.promisifyAll.returns(promisedDynamoDb);

  result = getDynamoDb(options);
  cachedResult = getDynamoDb(options);

  t.ok(AWS.DynamoDB.calledOnce, 'DynamoDb client made');
  t.notDeepEqual(
    AWS.DynamoDB.args[0],
    options,
    'options passed to AWS.DynamoDB'
  );

  t.ok(Bluebird.promisifyAll.calledOnce, 'promisifyAll called');
  t.notDeepEqual(
    Bluebird.promisifyAll.args[0],
    [standardDynamoDb],
    'promisify the DynamoDb client'
  );

  t.equal(result, promisedDynamoDb, 'returns promised DynamoDb client');
  t.equal(cachedResult, result, 'promised client is memoized.');

  t.end();
});
