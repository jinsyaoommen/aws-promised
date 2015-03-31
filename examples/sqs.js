'use strict';

var getSQS = require('../getSQS');
var sqs = getSQS({ region: 'us-west-2' });

sqs
  .getQueueUrlPromised({ QueueName: 'my-queue' })
  .then(receiveMessage)
  .then(logMessageBodies)
  .catch(console.error);

function receiveMessage(data) {
  return sqs.receiveMessagePromised({ QueueUrl: data.QueueUrl });
}

function logMessageBodies(data) {
  data.Messages.forEach(function(message) {
    console.log(message.Body);
  });
}
