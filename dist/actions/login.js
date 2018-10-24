"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.recordFormid = exports.login = undefined;

var _redux = require("../npm/redux/lib/redux.js");

var _index = require("../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

var _counter = require("../constants/counter.js");

var _index3 = require("../store/index.js");

var _index4 = _interopRequireDefault(_index3);

var _index5 = require("./index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//登陆
var login = exports.login = (0, _index5.createApiAction)(_counter.LOGIN, function (params) {
  _index2.default.setStorage({ key: 'userInfoLandi', data: { openid: params[0].openid, sid: 1234 } });
  _index2.default.reLaunch({
    url: '/pages/homePage/index'
  });
});
//上报form_id
var recordFormid = exports.recordFormid = (0, _index5.createApiAction)(_counter.RECORDFORMID, function (params) {});

exports.default = (0, _redux.bindActionCreators)({
  login: login,
  recordFormid: recordFormid
}, _index4.default.dispatch);