'use strict';

var getDynamoDb = require('../getDynamoDb');
var dynamoDb = getDynamoDb();

var params = {
  Key: {
    baz: {
      S: 'bar'
    }
  },
  TableName: 'foo'
};

dynamoDb.getItemAsync(params).then(console.log).catch(console.error);
