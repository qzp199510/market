"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _index = require("../../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var yellow = "/static/images/yellow.png";
var pink = "/static/images/pink.png";
var remain = "/static/images/remain.png";
var error = "/static/images/error.png";

var Login = function (_BaseComponent) {
  _inherits(Login, _BaseComponent);

  function Login() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Login);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Login.__proto__ || Object.getPrototypeOf(Login)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["yellow", "remain", "error", "formInfo", "pink", "userInfo"], _this.getPage = function () {
      _index2.default.reLaunch({
        url: '/pages/login/index'
      });
    }, _this.$$refs = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Login, [{
    key: "_constructor",
    value: function _constructor() {
      _get(Login.prototype.__proto__ || Object.getPrototypeOf(Login.prototype), "_constructor", this).call(this, this.props);
      this.state = {
        userInfo: {}
      };
    }
  }, {
    key: "onShareAppMessage",
    value: function onShareAppMessage(res) {
      var that = this;
      var sharyUrl = this.state.sharyUrl;

      return {
        title: '熊本熊',
        path: sharyUrl,
        desc: '熊本熊',
        success: function success(data) {
          // 转发成功
          that.shareClick();
        },
        fail: function fail(data) {
          // 转发失败
        }
      };
    }
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      var that = this;
      _index2.default.getStorage({
        key: 'userInfoLandi',
        success: function success(info) {
          var path = "/pages/index/index?shareid=" + info.data.sid + "&type=" + 2;
          that.setState({
            sharyUrl: path
          });
        },
        fail: function fail() {
          that.setState({
            sharyUrl: '/pages/index/index'
          });
        }
      });
      _index2.default.showShareMenu({
        withShareTicket: true
      });
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};

      var userInfo = this.__state.userInfo;

      var formInfo = "nickName=userInfo.nickname}|avatarUrl=userInfo.avatar}|referrerTitle={{ysf.title}}";
      Object.assign(this.__state, {
        yellow: yellow,
        remain: remain,
        error: error,
        formInfo: formInfo,
        pink: pink
      });
      return this.__state;
    }
  }]);

  return Login;
}(_index.Component);

Login.properties = {};
Login.$$events = ["getPage"];
exports.default = Login;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(Login, true));