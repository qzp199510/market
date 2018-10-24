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

var Blue = "/static/images/blue.png";
var Red = "/static/images/red.png";
var Green = "/static/images/green.png";
var Step1 = "/static/images/step1.png";
var Step2 = "/static/images/step2.png";
var Step3 = "/static/images/step3.png";

var cardInfo = [{
  leftImg: Step1,
  title: 'Step1',
  introduc: '第一步',
  rightImg: Blue
}, {
  leftImg: Step2,
  title: '第二步',
  introduc: '熊本熊3',
  rightImg: Red
}, {
  leftImg: Step3,
  title: '第三步',
  introduc: '熊本熊4',
  rightImg: Green
}];

var BeforeClass = function (_BaseComponent) {
  _inherits(BeforeClass, _BaseComponent);

  function BeforeClass() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, BeforeClass);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = BeforeClass.__proto__ || Object.getPrototypeOf(BeforeClass)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "imagesShow", "longImg", "cardInfo", "imgStyle", "sharyUrl", "router"], _this.closeImage = function () {
      _this.setState({
        imagesShow: false
      });
    }, _this.getLearning = function () {
      _index2.default.navigateTo({ url: '/pages/steps/component/instructionLearning?types=steps' });
    }, _this.$$refs = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(BeforeClass, [{
    key: "_constructor",
    value: function _constructor() {
      _get(BeforeClass.prototype.__proto__ || Object.getPrototypeOf(BeforeClass.prototype), "_constructor", this).call(this, this.props);
      this.state = {
        imagesShow: false,
        longImg: '',
        imgStyle: {},
        sharyUrl: '',
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
      if (this.$router.params.types) {
        this.setState({
          router: that.$router.params.types
        });
      }
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
      _index2.default.setStorage({ key: 'experience_classsteps_1', data: true }).then(function (res) {
        return console.log(res);
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      _index2.default.reLaunch({
        url: '/pages/homePage/index'
      });
    }
  }, {
    key: "showImage",
    value: function showImage(type) {
      this.setState({
        imagesShow: true
      });
      switch (type) {
        case 'Step1':
          this.setState({
            longImg: 'https://qn-static.landi.com/uploadtoole2314c712f8f477ce05ab80a145b3972.png',
            imgStyle: { height: '280%' }
          });
          break;
        case 'Step2':
          this.setState({
            longImg: 'https://qn-static.landi.com/uploadtool119f7788df42e3dba5b3b4cc8b553fcc.png',
            imgStyle: { height: '550%' }
          });
          break;
        case 'Step3':
          this.setState({
            longImg: 'https://qn-static.landi.com/uploadtool29175adca85f04474c163601cd7c28ab.png',
            imgStyle: { height: '180%' }
          });
          break;
        default:
          break;
      }
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};

      var _state = this.__state,
          imagesShow = _state.imagesShow,
          longImg = _state.longImg,
          imgStyle = _state.imgStyle;

      var anonymousState__temp = imagesShow ? (0, _index.internal_inline_style)(imgStyle) : null;
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        cardInfo: cardInfo
      });
      return this.__state;
    }
  }]);

  return BeforeClass;
}(_index.Component);

BeforeClass.properties = {};
BeforeClass.$$events = ["closeImage", "showImage", "getLearning"];
exports.default = BeforeClass;

Component(require('../../../npm/@tarojs/taro-weapp/index.js').default.createComponent(BeforeClass, true));