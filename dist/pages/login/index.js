"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _dec, _class;

require("../../npm/@tarojs/async-await/index.js");

var _index = require("../../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = require("../../npm/@tarojs/redux/index.js");

var _login = require("../../actions/login.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var phoneImg = "/static/images/phone.png";
var codeImg = "/static/images/code.png";

var Login = (_dec = (0, _index3.connect)(function (_ref) {
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
  _inherits(Login, _BaseComponent);

  function Login() {
    var _ref3;

    var _temp, _this, _ret;

    _classCallCheck(this, Login);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref3 = Login.__proto__ || Object.getPrototypeOf(Login)).call.apply(_ref3, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "phoneImg", "phone", "codeImg", "code", "disabledCode", "disabled", "obtainYzm", "errMessage", "btnColor", "formId", "sharyUrl"], _this.getInfo = function () {
      return _index2.default.login();
    }, _this.getUserInfo = function (code) {
      return;
    }, _this.messageColl = function () {
      _this.setState({
        errMessage: ''
      });
    }, _this.isPoneAvailable = function (phone) {
      var myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
      if (!myreg.test(phone)) {
        return false;
      }
      return true;
    }, _this.getCode = function () {
      var that = _this;
      var phone = _this.state.phone;

      clearInterval(_this.interval);
      if (phone == '') {
        _this.setState({
          errMessage: '手机号不能为空'
        });
        _this.interval = setInterval(function () {
          return _this.messageColl();
        }, 3000);
      } else {

        _index2.default.showToast({
          title: '验证码已发送',
          icon: 'success',
          duration: 3000,
          mask: true
        });
        var time = 60;
        var timeCount = setInterval(function () {
          if (time > 1) {
            time--;
            that.setState({
              obtainYzm: time + "s",
              disabledCode: true
            });
          } else {
            that.setState({
              obtainYzm: '重新发送',
              disabledCode: false
            });
            clearInterval(timeCount);
          }
        }, 1000);
      }
    }, _this.changePhone = function (e) {
      var code = _this.state.code;

      _this.setState({
        phone: e.target.value
      });
      _this.btnColl(code, e);
    }, _this.changeCode = function (e) {
      var phone = _this.state.phone;

      _this.setState({
        code: e.target.value
      });
      _this.btnColl(phone, e);
    }, _this.btnColl = function (value, e) {
      if (value !== '' && e.target.value !== '') {
        _this.setState({
          disabled: false,
          btnColor: { backgroundColor: '#EA050E' }
        });
      } else {
        _this.setState({
          disabled: true,
          btnColor: { backgroundColor: '#999' }
        });
      }
    }, _this.formSubmit = function (e) {
      _this.setState({
        formId: e.detail.formId
      });
    }, _this.$$refs = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Login, [{
    key: "_constructor",
    value: function _constructor() {
      _get(Login.prototype.__proto__ || Object.getPrototypeOf(Login.prototype), "_constructor", this).call(this, this.props);
      this.state = {
        phone: '',
        code: '',
        errMessage: '',
        disabled: true,
        btnColor: { backgroundColor: '#999' },
        obtainYzm: '获取验证码',
        disabledCode: false,
        formId: '',
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
      var that = this;
      _index2.default.getStorage({
        key: 'ccidInfo',
        success: function success(info) {
          var path = "/pages/index/index?shareid=" + info.data.shareid + "&type=" + info.data.type;
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

    //获取登陆信息

    //获取用户信息

  }, {
    key: "login",
    value: function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var _this2 = this;

        var _state, phone, code, res, data, loginInfo;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                clearInterval(this.interval);
                _state = this.state, phone = _state.phone, code = _state.code;

                if (!(phone == '')) {
                  _context2.next = 7;
                  break;
                }

                this.setState({
                  errMessage: '手机号不能为空'
                });
                this.interval = setInterval(function () {
                  return _this2.messageColl();
                }, 3000);
                _context2.next = 37;
                break;

              case 7:
                if (this.isPoneAvailable(phone)) {
                  _context2.next = 12;
                  break;
                }

                this.setState({
                  errMessage: '请输入正确手机号'
                });
                this.interval = setInterval(function () {
                  return _this2.messageColl();
                }, 3000);
                _context2.next = 37;
                break;

              case 12:
                if (!(code == '')) {
                  _context2.next = 17;
                  break;
                }

                this.setState({
                  errMessage: '验证码不能为空'
                });
                this.interval = setInterval(function () {
                  return _this2.messageColl();
                }, 3000);
                _context2.next = 37;
                break;

              case 17:
                if (this.isCode(code)) {
                  _context2.next = 22;
                  break;
                }

                this.setState({
                  errMessage: '请输入正确验证码'
                });
                this.interval = setInterval(function () {
                  return _this2.messageColl();
                }, 3000);
                _context2.next = 37;
                break;

              case 22:
                _context2.prev = 22;
                _context2.next = 25;
                return this.getInfo();

              case 25:
                res = _context2.sent;

                if (!res.code) {
                  _context2.next = 32;
                  break;
                }

                _context2.next = 29;
                return this.getUserInfo({ code: res.code });

              case 29:
                data = _context2.sent;
                loginInfo = [{
                  openid: data.data.data.openid,
                  mobile: phone,
                  sms_yzm: code,
                  login_type: 2

                }, { form_id: this.state.formId }];

                this.props.asyncLogin(loginInfo);

              case 32:
                _context2.next = 37;
                break;

              case 34:
                _context2.prev = 34;
                _context2.t0 = _context2["catch"](22);

                _index2.default.showToast({
                  title: '系统错误',
                  icon: 'error',
                  duration: 1000,
                  mask: true
                });

              case 37:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[22, 34]]);
      }));

      function login() {
        return _ref4.apply(this, arguments);
      }

      return login;
    }()
    //手机号正则

  }, {
    key: "isCode",

    //验证码正则
    value: function isCode(info) {
      var myreg = /^\d{6}$/;
      if (!myreg.test(info)) {
        return false;
      }
      return true;
    }
    //获取验证码

    //手机号改变

    //验证码改变

    //按钮样式控制

    //获取form_id

  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};

      var _state2 = this.__state,
          phone = _state2.phone,
          code = _state2.code,
          disabled = _state2.disabled,
          btnColor = _state2.btnColor,
          obtainYzm = _state2.obtainYzm,
          disabledCode = _state2.disabledCode;

      var anonymousState__temp = (0, _index.internal_inline_style)(btnColor);
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        phoneImg: phoneImg,
        codeImg: codeImg
      });
      return this.__state;
    }
  }]);

  return Login;
}(_index.Component)) || _class);
Login.properties = {
  "asyncLogin": null
};
Login.$$events = ["changePhone", "changeCode", "getCode", "formSubmit", "login"];
exports.default = Login;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(Login, true));