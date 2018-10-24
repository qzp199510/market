import { bindActionCreators } from 'redux'
import Taro from '@tarojs/taro'
import {
  LOGIN,
  RECORDFORMID,
} from '../constants/counter'
import store from '../store'
import { createApiAction } from './index'
import api from '../service/api'
//登陆
export const login = createApiAction(LOGIN, params => {
  Taro.setStorage({ key: 'userInfoLandi', data: { openid: params[0].openid, sid: 1234 } });
  Taro.reLaunch({
    url: '/pages/homePage/index'
  });
});
//上报form_id
export const recordFormid = createApiAction(RECORDFORMID, params => {
});

export default bindActionCreators({
  login,
  recordFormid,
}, store.dispatch)
