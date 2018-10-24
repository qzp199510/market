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

var Purple = "/static/images/purple.png";
var Orange = "/static/images/orange.png";
var Norm = "/static/images/norm.png";
var Order = "/static/images/order.png";

var cardInfo = [{
  id: 1,
  leftImg: Norm,
  title: '一',
  introduc: '一一一 i i 一一一一一',
  rightImg: Purple
}, {
  id: 2,
  leftImg: Order,
  title: '二',
  introduc: '------------------2222',
  rightImg: Orange
}];

var InstructionLearning = function (_BaseComponent) {
  _inherits(InstructionLearning, _BaseComponent);

  function InstructionLearning() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, InstructionLearning);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = InstructionLearning.__proto__ || Object.getPrototypeOf(InstructionLearning)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["imagesShow", "videoInfo", "cardInfo", "sharyUrl", "router"], _this.closeImage = function () {
      _this.setState({
        imagesShow: false
      });
    }, _this.getLearning = function () {
      _index2.default.navigateTo({ url: '/pages/steps/component/teachersInfo?types=steps' });
    }, _this.$$refs = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(InstructionLearning, [{
    key: "_constructor",
    value: function _constructor() {
      _get(InstructionLearning.prototype.__proto__ || Object.getPrototypeOf(InstructionLearning.prototype), "_constructor", this).call(this, this.props);
      this.state = {
        imagesShow: false,
        videoInfo: 'https://qn-static.landi.com/landiubase/assets/landi_classinfo.mp4',
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
      _index2.default.setStorage({ key: 'experience_classsteps_2', data: true }).then(function (res) {
        return console.log(res);
      });
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
        case 1:
          this.setState({
            videoInfo: 'https://qn-static.landi.com/landiubase/assets/landi_classinfo.mp4'
          });
          break;
        case 2:
          this.setState({
            videoInfo: 'https://qn-static.landi.com/landiubase/assets/mb-stu-video4.mp4'
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
          videoInfo = _state.videoInfo;

      Object.assign(this.__state, {
        cardInfo: cardInfo
      });
      return this.__state;
    }
  }]);

  return InstructionLearning;
}(_index.Component);

InstructionLearning.properties = {};
InstructionLearning.$$events = ["bindplay", "closeImage", "showImage", "getLearning"];
exports.default = InstructionLearning;

Component(require('../../../npm/@tarojs/taro-weapp/index.js').default.createComponent(InstructionLearning, true));