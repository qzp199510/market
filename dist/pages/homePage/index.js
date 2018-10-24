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

var person = "/static/images/person.png";
var classImg = "/static/images/class.png";

var Login = function (_BaseComponent) {
  _inherits(Login, _BaseComponent);

  function Login() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Login);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Login.__proto__ || Object.getPrototypeOf(Login)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "anonymousState__temp2", "anonymousState__temp3", "anonymousState__temp4", "classImg", "person", "classStyle", "personStyle", "sharyUrl", "viewStyle", "viewStyle_2", "router"], _this.$$refs = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Login, [{
    key: "_constructor",
    value: function _constructor() {
      _get(Login.prototype.__proto__ || Object.getPrototypeOf(Login.prototype), "_constructor", this).call(this, this.props);
      this.state = {
        classStyle: {},
        personStyle: {},
        sharyUrl: '',
        viewStyle: { display: 'block' },
        viewStyle_2: { display: 'none' },
        router: ''
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
      if (this.$router.params.classInfo) {
        this.setState({
          viewStyle: { display: 'none' },
          viewStyle_2: { display: 'block' },
          personStyle: { backgroundImage: "linear-gradient(-6deg, #24C8D8 0%, #52EDC7 100%)" },
          classStyle: { backgroundImage: "linear-gradient(-6deg,  #86D7DF 0%, #81F2D7 100%)" }
        });
      } else {
        this.setState({
          // classStyle : { backgroundImage: `url(https://qn-static.landi.com/uploadtool33c7ee1ec39618485b7911956fae7516.png)`,backgroundSize: 'cover'},
          classStyle: { backgroundImage: "linear-gradient(-6deg, #24C8D8 0%, #52EDC7 100%)" },
          personStyle: { backgroundImage: "linear-gradient(-6deg,  #86D7DF 0%, #81F2D7 100%)"
            // personStyle : { backgroundImage: `url(https://qn-static.landi.com/uploadtool81a23b6b75444571f8b1b2b44074af8a.png)`,backgroundSize: 'cover'}
          } });
      }
      _index2.default.getStorage({
        key: 'userInfoLandi',
        success: function success(res) {
          var path = "/pages/homePage/index?shareid=" + res.data.sid + "&type=" + 2;
          _index2.default.getStorage({
            key: 'sceneLandi',
            success: function success(scene) {
              _index2.default.getStorage({
                key: 'ccidInfo',
                success: function success() {
                  _index2.default.removeStorageSync('ccidInfo');
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
            },
            fail: function fail() {
              that.setState({
                sharyUrl: '/pages/index/index'
              });
            }
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
  }, {
    key: "changeTags",
    value: function changeTags(info) {
      if (info === 0) {
        this.setState({
          classStyle: { backgroundImage: "linear-gradient(-6deg, #24C8D8 0%, #52EDC7 100%)" },
          personStyle: { backgroundImage: "linear-gradient(-6deg,  #86D7DF 0%, #81F2D7 100%)" },
          viewStyle: { display: 'block' },
          viewStyle_2: { display: 'none' }
        });
      } else {
        this.setState({
          classStyle: { backgroundImage: "linear-gradient(-6deg,  #86D7DF 0%, #81F2D7 100%)" },
          personStyle: { backgroundImage: "linear-gradient(-6deg, #24C8D8 0%, #52EDC7 100%)" },
          viewStyle_2: { display: 'block' },
          viewStyle: { display: 'none' }

        });
      }
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};

      var _state = this.__state,
          classStyle = _state.classStyle,
          personStyle = _state.personStyle,
          viewStyle = _state.viewStyle,
          viewStyle_2 = _state.viewStyle_2;

      var anonymousState__temp = (0, _index.internal_inline_style)(viewStyle);
      var anonymousState__temp2 = (0, _index.internal_inline_style)(viewStyle_2);
      var anonymousState__temp3 = (0, _index.internal_inline_style)(classStyle);
      var anonymousState__temp4 = (0, _index.internal_inline_style)(personStyle);
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        anonymousState__temp2: anonymousState__temp2,
        anonymousState__temp3: anonymousState__temp3,
        anonymousState__temp4: anonymousState__temp4,
        classImg: classImg,
        person: person
      });
      return this.__state;
    }
  }]);

  return Login;
}(_index.Component);

Login.properties = {};
Login.$$events = ["changeTags"];
exports.default = Login;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(Login, true));