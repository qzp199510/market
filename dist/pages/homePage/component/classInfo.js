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

var step1 = "/static/images/one.png";
var step2 = "/static/images/two.png";
var step3 = "/static/images/three.png";

var ClassInfo = function (_BaseComponent) {
  _inherits(ClassInfo, _BaseComponent);

  function ClassInfo() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ClassInfo);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ClassInfo.__proto__ || Object.getPrototypeOf(ClassInfo)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["userInfo", "stepInfo", "getUrl_1", "getUrl_2", "getUrl_3", "getUrl_0"], _this.goPage = function () {
      _index2.default.navigateTo({ url: _this.state.getUrl_0 });
    }, _this.$$refs = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ClassInfo, [{
    key: "_constructor",
    value: function _constructor() {
      _get(ClassInfo.prototype.__proto__ || Object.getPrototypeOf(ClassInfo.prototype), "_constructor", this).call(this, this.props);
      this.state = {
        stepInfo: [{
          id: 1,
          imgUrl: step1,
          title: '熊本熊',
          status: '待完成',
          introduce: '熊本熊'
        }, {
          id: 2,
          imgUrl: step2,
          title: '熊本熊',
          status: '待完成',
          introduce: '熊本熊'
        }, {
          id: 3,
          imgUrl: step3,
          title: '熊本熊',
          status: '待完成',
          introduce: '熊本熊'
        }],
        getUrl_1: '/pages/steps/component/beforeClass?openid=1&nickName=2',
        getUrl_2: '/pages/steps/component/instructionLearning',
        getUrl_3: '/pages/steps/component/teachersInfo',
        getUrl_0: '/pages/steps/component/downPlatform',
        userInfo: { banner: step3 }
      };
    }
  }, {
    key: "changeSteps",
    value: function changeSteps(id) {
      var _state = this.state,
          getUrl_1 = _state.getUrl_1,
          getUrl_2 = _state.getUrl_2,
          getUrl_3 = _state.getUrl_3;

      switch (id) {
        case 1:
          _index2.default.getStorage({
            key: 'userInfoLandi',
            success: function success() {
              _index2.default.navigateTo({ url: getUrl_1 });
            },
            fail: function fail() {
              _index2.default.reLaunch({
                url: '/pages/index/index'
              });
            }
          });

          break;
        case 2:
          _index2.default.getStorage({
            key: 'userInfoLandi',
            success: function success() {
              _index2.default.navigateTo({ url: getUrl_2 });
            },
            fail: function fail() {
              _index2.default.reLaunch({
                url: '/pages/index/index'
              });
            }
          });
          break;
        case 3:
          _index2.default.getStorage({
            key: 'userInfoLandi',
            success: function success() {
              _index2.default.navigateTo({ url: getUrl_3 });
            },
            fail: function fail() {
              _index2.default.reLaunch({
                url: '/pages/index/index'
              });
            }
          });
          break;
        default:
          break;
      }
    }
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      _index2.default.showLoading({ title: '加载中...', mask: true });
      _index2.default.getStorage({
        key: 'userInfoLandi',
        success: function success(res) {
          // this.setState({
          //     getUrl_0: '/pages/nullPage/index',
          //     getUrl_1: '/pages/nullPage/index',
          //     getUrl_2: '/pages/nullPage/index',
          //     getUrl_3: '/pages/nullPage/index',
          // })
        },
        fail: function fail() {
          _index2.default.reLaunch({
            url: '/pages/index/index'
          });
        }
      });

      var that = this;
      var stepList = this.state.stepInfo;
      _index2.default.showShareMenu({
        withShareTicket: true
      });
      _index2.default.getStorage({
        key: 'experience_classsteps_1',
        success: function success(res) {
          if (res.data) {
            stepList[0].status = '已完成';
            that.setState({
              stepInfo: stepList
            });
          }
        },
        fail: function fail() {
          stepList[0].status = '待完成';
          that.setState({
            stepInfo: stepList
          });
        }
      });
      _index2.default.getStorage({
        key: 'experience_classsteps_2',
        success: function success(res) {
          if (res.data) {
            stepList[1].status = '已完成';
            that.setState({
              stepInfo: stepList
            });
          }
        },
        fail: function fail() {
          stepList[1].status = '待完成';
          that.setState({
            stepInfo: stepList
          });
        }
      });
      _index2.default.getStorage({
        key: 'experience_classsteps_3',
        success: function success(res) {
          if (res.data) {
            stepList[2].status = '已完成';
            that.setState({
              stepInfo: stepList
            });
          }
        },
        fail: function fail() {
          stepList[2].status = '待完成';
          that.setState({
            stepInfo: stepList
          });
        }
      });
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};

      var _state2 = this.__state,
          stepInfo = _state2.stepInfo,
          userInfo = _state2.userInfo;

      Object.assign(this.__state, {});
      return this.__state;
    }
  }]);

  return ClassInfo;
}(_index.Component);

ClassInfo.properties = {};
ClassInfo.$$events = ["goPage", "changeSteps"];
exports.default = ClassInfo;

Component(require('../../../npm/@tarojs/taro-weapp/index.js').default.createComponent(ClassInfo));