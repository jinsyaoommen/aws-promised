'use strict';

/**
 * This is a support factory which generates and returns AWS client instances
 * for various regions that have been wrapped in promise decorators
 *
 * This factory memoizes the api objects it returns. If the requested Api does
 * not already exist it is created, otherwise the existing one is returned.
 *
 * @type {{
 *  getAutoScaling: (*|exports|module.exports),
 *  getEC2: (*|exports|module.exports),
 *  getIAM: (*|exports|module.exports),
<<<<<<< HEAD
 *  getS3: (*|exports|module.exports),
 *  getDynamoDB: (*|exports|module.exports)
=======
 *  getS3: (*|exports|module.exports)
 *  getSQS: (*|exports|module.exports)
>>>>>>> 145a0f71f85ff708b24aed43e26446a5ac6be2e0
 * }}
 */
module.exports = {
  /**
   * Returns a Promises compliant AWS.AutoScaling api.
   *
   * @param {object} options The AWS.AutoScaling constructor options.
   */
  getAutoScaling: require('./getAutoScaling'),

  /**
   * Returns a Promises compliant AWS.EC2 api.
   *
   * @param {object} options The AWS.EC2 constructor options.
   */
  getEC2: require('./getEC2'),

  /**
   * Returns a Promises compliant AWS.IAM api.
   *
   * @param {object} options The AWS.IAM constructor options.
   */
  getIAM: require('./getIAM'),

  /**
   * Returns a Promises compliant AWS.S3 api.
   *
   * @param {object} options The AWS.S3 constructor options.
   */
  getS3: require('./getS3'),

  /**
   * Returns a Promises compliant AWS.DynamoDB api.
   *
   * @param {object} options The AWS.DynamoDB constructor options.
   */
  getDynamoDb: require('./getDynamoDb'),

  /**
   * Returns a Promises compliant AWS.SQS api.
   *
   * @param {object} options The AWS.SQS constructor options.
   */
  getSQS: require('./getSQS')
};
