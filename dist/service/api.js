"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = require("../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

var _status = require("../const/status.js");

var _config = require("./config.js");

var _index3 = require("../utils/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var token = '';

exports.default = {
  baseOptions: function baseOptions(params) {
    var method = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'GET';
    var url = params.url,
        data = params.data;
    // let token = getApp().globalData.token
    // if (!token) login()

    var contentType = 'application/x-www-form-urlencoded';
    contentType = params.contentType || contentType;
    var option = {
      isShowLoading: false,
      loadingText: '正在加载',
      url: _config.base + url,
      data: data,
      method: method,
      header: { 'content-type': contentType, 'token': token },
      success: function success(res) {
        if (res.statusCode === _status.HTTP_STATUS.NOT_FOUND) {
          return (0, _index3.logError)('api', '请求资源不存在');
        } else if (res.statusCode === _status.HTTP_STATUS.BAD_GATEWAY) {
          return (0, _index3.logError)('api', '服务端出现了问题');
        } else if (res.statusCode === _status.HTTP_STATUS.FORBIDDEN) {
          return (0, _index3.logError)('api', '没有权限访问');
        } else if (res.statusCode === _status.HTTP_STATUS.SUCCESS) {
          return res.data;
        }
      },
      error: function error(e) {
        (0, _index3.logError)('api', '请求接口出现问题', e);
      }
    };
    return _index2.default.request(option);
  },
  get: function get(url) {
    var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

    var option = { url: url, data: data };
    return this.baseOptions(option);
  },
  post: function post(url, data, contentType) {
    var params = { url: url, data: data, contentType: contentType };
    return this.baseOptions(params, 'POST');
  }
};