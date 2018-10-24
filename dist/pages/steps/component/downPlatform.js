"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _dec, _class;

var _index = require("../../../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = require("../../../npm/@tarojs/redux/index.js");

var _login = require("../../../actions/login.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var Icon = "/static/images/icon.png";

var DownPlatform = (_dec = (0, _index3.connect)(function (_ref) {
  var counter = _ref.counter;
  return {
    counter: counter
  };
}, function (dispatch) {
  return {
    asyncRecordFormid: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(loginInfo) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                dispatch((0, _login.recordFormid)(loginInfo));

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function asyncRecordFormid(_x) {
        return _ref2.apply(this, arguments);
      }

      return asyncRecordFormid;
    }()
  };
}), _dec(_class = function (_BaseComponent) {
  _inherits(DownPlatform, _BaseComponent);

  function DownPlatform() {
    var _ref3;

    var _temp, _this, _ret;

    _classCallCheck(this, DownPlatform);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref3 = DownPlatform.__proto__ || Object.getPrototypeOf(DownPlatform)).call.apply(_ref3, [this].concat(args))), _this), _this.$usedState = ["Icon", "sharyUrl"], _this.getStep = function () {
      _index2.default.navigateTo({ url: '/pages/steps/component/beforeClass?types=steps' });
    }, _this.formSubmit = function (e) {
      _index2.default.getStorage({ key: 'userInfoLandi' }).then(function (res) {
        //从缓存中获取用户信息
        if (res.data) {
          var infos = { form_id: e.detail.formId, openid: res.data.openid };
          _this.props.asyncRecordFormid(infos);
        }
      });
    }, _this.$$refs = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(DownPlatform, [{
    key: "_constructor",
    value: function _constructor() {
      _get(DownPlatform.prototype.__proto__ || Object.getPrototypeOf(DownPlatform.prototype), "_constructor", this).call(this, this.props);
      this.state = {
        sharyUrl: ''
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
          var path = "/pages/homePage/index?shareid=" + info.data.sid + "&type=" + 2;
          that.setState({
            sharyUrl: path
          });
        },
        fail: function fail() {
          _index2.default.reLaunch({
            url: '/pages/index/index'
          });
        }
      });
      _index2.default.showShareMenu({
        withShareTicket: true
      });
    }
    //获取form_id

  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      Object.assign(this.__state, {
        Icon: Icon
      });
      return this.__state;
    }
  }]);

  return DownPlatform;
}(_index.Component)) || _class);
DownPlatform.properties = {
  "asyncRecordFormid": null
};
DownPlatform.$$events = ["formSubmit", "getStep"];
exports.default = DownPlatform;

Component(require('../../../npm/@tarojs/taro-weapp/index.js').default.createComponent(DownPlatform, true));