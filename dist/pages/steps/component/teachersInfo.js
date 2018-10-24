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

var Play = "/static/images/play.png";
var IconTea = "/static/images/iconTea.png";
var Time = "/static/images/time.png";

var TeacherInfo = function (_BaseComponent) {
  _inherits(TeacherInfo, _BaseComponent);

  function TeacherInfo() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, TeacherInfo);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TeacherInfo.__proto__ || Object.getPrototypeOf(TeacherInfo)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "anonymousState__temp2", "anonymousState__temp3", "IconTea", "Time", "Play", "teacherInfo", "viewStyle", "videoStyle", "sharyUrl", "showView", "router"], _this.add = function (m) {
      return m < 10 ? '0' + m : m;
    }, _this.timeShow = function (data) {
      var time = new Date(data);
      var y = time.getFullYear();
      var m = time.getMonth() + 1;
      var d = time.getDate();
      var h = time.getHours();
      var mm = time.getMinutes();
      var s = time.getSeconds();
      return y + '-' + _this.add(m) + '-' + _this.add(d) + ' ' + _this.add(h) + ':' + _this.add(mm) + ':' + _this.add(s);
    }, _this.play = function () {
      _this.setState({
        viewStyle: {
          display: 'none'
        },
        videoStyle: { display: 'block' }
      });
      var video = _index2.default.createVideoContext('video');
      video.play();
    }, _this.$$refs = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(TeacherInfo, [{
    key: "_constructor",
    value: function _constructor() {
      _get(TeacherInfo.prototype.__proto__ || Object.getPrototypeOf(TeacherInfo.prototype), "_constructor", this).call(this, this.props);
      this.state = {
        viewStyle: { display: 'block' },
        videoStyle: { display: 'none' },
        teacherInfo: { time: '12322332232323', avatar: IconTea, self_intro: '人喜欢用es6方式传值,但是在taro使用es6传值编译会出错,所以在使用taro制作小程序时建议使用.bind传值,如点击事件传值: onClick={this.onClick.bind(this,num)}**底部TabBar使用**官方的**TabBar**配置只要在**app.js**中配置好就行了,但是官方的**TabBar**只提供了部分属性不好扩展,如果需要扩展,建议自定义开发' },
        sharyUrl: '',
        showView: false,
        router: ''
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
      _index2.default.setStorage({ key: 'experience_classsteps_3', data: true }).then(function (res) {
        return console.log(res);
      });
      if (this.$router.params.types) {
        this.setState({
          router: that.$router.params.types
        });
      }
      _index2.default.showLoading({ title: '加载中...', mask: true });
      _index2.default.getStorage({
        key: 'userInfoLandi',
        success: function success(res) {
          var path = "/pages/homePage/index?shareid=" + res.data.sid + "&type=" + 2;
          that.setState({
            sharyUrl: path
          });

          _index2.default.hideLoading({
            success: function success() {
              that.setState({
                showView: true
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
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.state.router == 'logout') {
        _index2.default.reLaunch({
          url: '/pages/homePage/index?classInfo=person'
        });
      } else {
        _index2.default.reLaunch({
          url: '/pages/homePage/index'
        });
      }
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};

      var teacherInfo = this.__state.teacherInfo;

      var anonymousState__temp = teacherInfo.avatar + "?imageView2/1/w/150/h/150";
      var anonymousState__temp2 = (0, _index.internal_inline_style)(this.__state.videoStyle);
      var anonymousState__temp3 = (0, _index.internal_inline_style)(this.__state.viewStyle);
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        anonymousState__temp2: anonymousState__temp2,
        anonymousState__temp3: anonymousState__temp3,
        IconTea: IconTea,
        Time: Time,
        Play: Play
      });
      return this.__state;
    }
  }]);

  return TeacherInfo;
}(_index.Component);

TeacherInfo.properties = {};
TeacherInfo.$$events = ["bindplay", "play"];
exports.default = TeacherInfo;

Component(require('../../../npm/@tarojs/taro-weapp/index.js').default.createComponent(TeacherInfo, true));