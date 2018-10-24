"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createAction = createAction;
exports.createApiAction = createApiAction;

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * 创建Action
 *
 * @export
 * @param actionType Action类型
 */
function createAction(actionType) {
  return function (payload) {
    return {
      type: actionType,
      payload: payload
    };
  };
}

/**
 * 创建API Action
 *
 * @export
 * @param actionType Action类型
 * @param [func] 请求API方法，返回Promise
 * @returns 请求之前dispatch { type: ${actionType}_request }
 *          请求成功dispatch { type: ${actionType}, payload: ${resolveData} }
 *          请求失败dispatch { type: ${actionType}_failure, payload: ${rejectData} }
 */
function createApiAction(actionType) {
  var _this = this;

  var func = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};

  return function () {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { success: function success() {}, failed: function failed() {} };
    var customActionType = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : actionType;
    return function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch) {
        var data;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;

                dispatch({ type: customActionType + "_request", params: params });
                _context.next = 4;
                return func(params);

              case 4:
                data = _context.sent;

                dispatch({ type: customActionType, params: params, payload: data });

                callback.success && callback.success({ payload: data });
                return _context.abrupt("return", data);

              case 10:
                _context.prev = 10;
                _context.t0 = _context["catch"](0);

                dispatch({ type: customActionType + "_failure", params: params, payload: _context.t0 });

                callback.failed && callback.failed({ payload: _context.t0 });

              case 14:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, _this, [[0, 10]]);
      }));

      return function (_x5) {
        return _ref.apply(this, arguments);
      };
    }();
  };
}