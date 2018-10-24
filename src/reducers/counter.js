import { LIST, GETUSER } from '../constants/counter'

const INITIAL_STATE = {
  num: 0,
  list: [],
  userInfo:{}
}

export default function counter(state = INITIAL_STATE, action) {
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
      return state
  }
}
