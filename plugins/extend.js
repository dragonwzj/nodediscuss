/**
 * 各种插件应该继承自相应的 `Strategy`
 * @author heroic
 */

/**
 * Module dependencies
 */
var util = require('util');

module.exports = exports = function(ctor, superCtor) {
  util.inherits(ctor, superCtor);
};

/** 邮件发送策略类 */
exports.MailerStrategy = require('../libs/mailer').Strategy;