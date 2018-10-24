"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _dec, _class;

var _index = require("../../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = require("../../npm/@tarojs/redux/index.js");

var _login = require("../../actions/login.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var Index = (_dec = (0, _index3.connect)(function (_ref) {
  var counter = _ref.counter;
  return {
    counter: counter
  };
}, function (dispatch) {
  return {
    asyncLogin: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(loginInfo) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                dispatch((0, _login.login)(loginInfo));

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function asyncLogin(_x) {
        return _ref2.apply(this, arguments);
      }

      return asyncLogin;
    }()
  };
}), _dec(_class = function (_BaseComponent) {
  _inherits(Index, _BaseComponent);

  function Index() {
    var _ref3;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref3 = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref3, [this].concat(args))), _this), _this.$usedState = ["code", "formId", "userInfo", "sharyUrl"], _this.getUserInfo = function (code) {
      return;
    }, _this.getLoginPage = function () {
      _index2.default.navigateTo({ url: '/pages/login/index' });
    }, _this.formSubmit = function (e) {
      _this.setState({
        formId: e.detail.formId
      });
    }, _this.$$refs = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: "_constructor",
    value: function _constructor() {
      _get(Index.prototype.__proto__ || Object.getPrototypeOf(Index.prototype), "_constructor", this).apply(this, arguments);
      this.state = {
        code: '',
        formId: '',
        userInfo: {},
        sharyUrl: ''
      };
    }
  }, {
    key: "onShareAppMessage",
    value: function onShareAppMessage(res) {
      var that = this;
      var sharyUrl = this.state.sharyUrl;

      return {
        title: '兰迪体验课',
        path: sharyUrl,
        desc: '给孩子准备一堂有趣的在线英美外教课',
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
      var _this2 = this;

      var params = this.$router.params;
      var path = "/pages/homePage/index?shareid=" + params.shareid + "&type=" + params.type;
      this.setState({
        sharyUrl: path
      });
      _index2.default.getStorage({
        key: 'userInfoLandi',
        success: function success() {
          _index2.default.reLaunch({
            url: '/pages/homePage/index'
          });
        },
        fail: function fail() {}
      });
      _index2.default.login().then(function (res) {
        if (res.code) {
          _this2.setState({
            code: res.code
          });
        }
      });
      _index2.default.showShareMenu({
        withShareTicket: true
      });
    }
    //获取用户信息

    //跳转登陆页

  }, {
    key: "getPhoneNumber",

    //微信获取手机号授权登陆 (该接口只针对非个人开发者)
    value: function getPhoneNumber(e) {
      var loginInfo = [{
        openid: '123456',
        login_type: 1
      }, { form_id: this.state.formId }];
      this.props.asyncLogin(loginInfo);
      console.log(e, '--------');
      //获取optionid session_key
      try {
        if (!(e.detail.encryptedData && e.detail.iv)) {

          _index2.default.showToast({
            title: '取消授权成功',
            icon: 'success',
            duration: 3000,
            mask: true
          });
        }
      } catch (error) {
        _index2.default.showToast({
          title: '系统错误',
          icon: 'none',
          duration: 3000,
          mask: true
        });
      }
    }
    //获取form_id

  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      Object.assign(this.__state, {});
      return this.__state;
    }
  }]);

  return Index;
}(_index.Component)) || _class);
Index.properties = {
  "asyncLogin": null
};
Index.$$events = ["formSubmit", "getLoginPage", "getPhoneNumber"];
exports.default = Index;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(Index, true));