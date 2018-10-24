'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var promisify = exports.promisify = function promisify(func, ctx) {
  // 返回一个新的function
  return function () {
    var _arguments = arguments;

    // 初始化this作用域
    var ctx = ctx || this;
    // 新方法返回的promise
    return new Promise(function (resolve, reject) {
      // 调用原来的非promise方法func，绑定作用域，传参，以及callback（callback为func的最后一个参数）
      func.call.apply(func, [ctx].concat(Array.prototype.slice.call(_arguments), [function () {
        // 将回调函数中的的第一个参数error单独取出
        var args = Array.prototype.map.call(arguments, function (item) {
          return item;
        });
        var err = args.shift();
        // 判断是否有error
        if (err) {
          reject(err);
        } else {
          // 没有error则将后续参数resolve出来
          args = args.length > 1 ? args : args[0];
          resolve(args);
        }
      }]));
    });
  };
};

var promiseImage = exports.promiseImage = function promiseImage(url) {
  return new Promise(function (resolve, reject) {
    resolve(url);
  });
};
var isChinese = exports.isChinese = function isChinese(str) {
  if (escape(str).indexOf("%u") < 0) return false;
  return true;
};

var handleName = exports.handleName = function handleName(str) {
  var res = emoj2str(str);
  if (isChinese(res)) {
    res = res.length > 4 ? res.slice(0, 4) + '...' : res;
  } else {
    res = res.length > 7 ? res.slice(0, 7) + '...' : res;
  }
  return res;
};

var emoj2str = exports.emoj2str = function emoj2str(str) {
  return unescape(escape(str).replace(/\%uD.{3}/g, ''));
};
/*获取当前页url*/
var getCurrentPageUrl = exports.getCurrentPageUrl = function getCurrentPageUrl() {
  var pages = getCurrentPages();
  var currentPage = pages[pages.length - 1];
  var url = currentPage.route;
  return url;
};

var formatTime = exports.formatTime = function formatTime(date) {
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var day = date.getDate();
  var hour = date.getHours();
  var minute = date.getMinutes();
  var second = date.getSeconds();

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':');
};

var formatNumber = exports.formatNumber = function formatNumber(n) {
  n = n.toString();
  return n[1] ? n : '0' + n;
};
var logError = exports.logError = function logError(name, action, info) {
  if (!info) {
    info = 'empty';
  }
  try {
    var deviceInfo = wx.getSystemInfoSync();
    var device = JSON.stringify(deviceInfo);
  } catch (e) {
    console.error('not support getSystemInfoSync api', err.message);
  }
  var time = formatTime(new Date());
  console.error(time, name, action, info, device);
  // if (typeof action !== 'object') {
  // fundebug.notify(name, action, info)
  // }
  // fundebug.notifyError(info, { name, action, device, time })
  if ((typeof info === 'undefined' ? 'undefined' : _typeof(info)) === 'object') {
    info = JSON.stringify(info);
  }
};