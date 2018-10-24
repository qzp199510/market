"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _index = require("../../../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var getClass = "/static/images/getClass.png";
var myClass = "/static/images/myclass.png";

//登录

var Person = function (_BaseComponent) {
  _inherits(Person, _BaseComponent);

  function Person() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Person);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Person.__proto__ || Object.getPrototypeOf(Person)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "userInfo", "getLogin", "myClass", "getClass", "btnStyle", "getUrl", "userInfoLandi"], _this.logout = function () {
      var style = {
        display: 'none'
      };
      var obj = {
        nickname: '登录/注册', avatar: ''
      };
      var that = _this;

      _index2.default.showModal({
        title: '确定退出？',
        content: '退出登录后将无法查看课程相关信息，重新登录即可查看',
        success: function success(res) {
          if (res.confirm) {
            that.setState({
              btnStyle: style,
              userInfo: obj,
              getLogin: true
            });
            _index2.default.removeStorageSync('userInfoLandi');
            //注销
          } else if (res.cancel) {}
        }
      });
    }, _this.getLoginPage = function () {
      _index2.default.reLaunch({
        url: '/pages/index/index'
      });
    }, _this.getPage = function () {
      var that = _this;
      _index2.default.getStorage({
        key: 'userInfoLandi',
        success: function success() {
          _index2.default.navigateTo({ url: that.state.getUrl });
        },
        fail: function fail() {
          _index2.default.reLaunch({
            url: '/pages/index/index'
          });
        }
      });
    }, _this.getPageUrl = function () {
      _index2.default.getStorage({
        key: 'userInfoLandi',
        success: function success() {},
        fail: function fail() {
          _index2.default.reLaunch({
            url: '/pages/index/index'
          });
        }
      });
    }, _this.$$refs = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Person, [{
    key: "_constructor",
    value: function _constructor() {
      _get(Person.prototype.__proto__ || Object.getPrototypeOf(Person.prototype), "_constructor", this).call(this, this.props);
      this.state = {
        btnStyle: { display: 'block' },
        userInfo: { nickname: '登录/注册', avatar: '' },
        getUrl: '/pages/steps/component/teachersInfo?types=logout',
        getLogin: false,
        userInfoLandi: {}
      };
    }
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      var _this2 = this;

      var that = this;
      _index2.default.showLoading({ title: '加载中...', mask: true });
      _index2.default.getStorage({
        key: 'userInfoLandi',
        success: function success(res) {
          that.setState({
            userInfoLandi: res.data
          });
          _index2.default.hideLoading();
        },
        fail: function fail() {
          _this2.setState({
            btnStyle: { display: 'none' }
          });
        }
      });
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};

      var _state = this.__state,
          btnStyle = _state.btnStyle,
          userInfo = _state.userInfo,
          getLogin = _state.getLogin;

      var anonymousState__temp = (0, _index.internal_inline_style)(btnStyle);
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        myClass: myClass,
        getClass: getClass
      });
      return this.__state;
    }
  }]);

  return Person;
}(_index.Component);

Person.properties = {};
Person.$$events = ["getPageUrl", "getLoginPage", "getPage", "logout"];
exports.default = Person;

Component(require('../../../npm/@tarojs/taro-weapp/index.js').default.createComponent(Person));