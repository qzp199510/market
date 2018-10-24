"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = counter;


var INITIAL_STATE = {
  num: 0,
  list: [],
  userInfo: {}
};

function counter() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments[1];

  switch (action.type) {
    //     case LIST:
    //       let data = state.list.concat(action.payload.data)
    //       return {
    //         ...state,
    //         list: data
    //       }
    //       case GETUSER:
    //       return {
    //         ...state,
    //         userInfo: action.payload.userInfo
    //       }
    default:
      return state;
  }
}