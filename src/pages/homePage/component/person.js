import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import getClass from '../../../static/images/getClass.png'
import myClass from '../../../static/images/myclass.png'
import './style/person.less'
import api from '../../../service/api'
//登录
class Person extends Component {

  config = {
    navigationBarTitleText: '我的',
  }
  constructor() {
    super(this.props)
    this.state = {
      btnStyle: { display: 'block' },
      userInfo: { nickname: '登录/注册', avatar: '' },
      getUrl: '/pages/nullPage/index?types=logout',
      getLogin: false,
      userInfoLandi: {},
    }
  }
  componentWillMount() {

    let that = this;
    Taro.showLoading({ title: '加载中...', mask: true });
    Taro.getStorage({
      key: 'userInfoLandi',
      success: (res) => {
        that.setState({
          userInfoLandi: res.data
        })
        Taro.hideLoading();
      },
      fail: () => {
        this.setState({
          btnStyle: { display: 'none' }
        })
      }
    })
  }

  logout = () => {
    let style = {
      display: 'none',
    };
    let obj = {
      nickname: '登录/注册', avatar: ''
    };
    const that = this;

    Taro.showModal({
      title: '确定退出？',
      content: '退出登录后将无法查看相关信息，重新登录即可查看',
      success: function (res) {
        if (res.confirm) {
          that.setState({
            btnStyle: style,
            userInfo: obj,
            getLogin: true
          });
          Taro.removeStorageSync('userInfoLandi');
          //注销
        } else if (res.cancel) {
        }
      }
    })

  }
  getLoginPage = () => {
    Taro.reLaunch({
      url: '/pages/index/index'
    });
  }
  getPage = () => {
    let that = this;
    Taro.getStorage({
      key: 'userInfoLandi',
      success: () => {
        Taro.navigateTo({ url: that.state.getUrl });
      },
      fail: () => {
        Taro.reLaunch({
          url: '/pages/index/index'
        });
      }
    });
  }
  getPageUrl = () => {
    Taro.getStorage({
      key: 'userInfoLandi',
      success: () => {

      },
      fail: () => {
        Taro.reLaunch({
          url: '/pages/index/index'
        });
      }
    });
  }
  render() {
    const { btnStyle, userInfo, getLogin } = this.state;
    return (
      <View className='person'>
        <View className='person-head'>
          <Image src={userInfo.avatar} onClick={this.getPageUrl} className='person-img'> </Image>
        </View>
        <View className='person-name'>
          {
            getLogin ? <Text className='person-name-text' onClick={this.getLoginPage}> {userInfo.nickname} </Text>
              : <Text className='person-name-text'> {userInfo.nickname} </Text>
          }
        </View>
        <View className='person-centext' onClick={this.getPage}>
          <View className='person-class'>
            <View className='person-class-left'>
              <Image src={myClass} className='person-class-img1'> </Image>
              <Text className='person-class-text1 text'>熊本熊 </Text>
              <Text className='person-class-text2 text'>查看 </Text>
            </View>
          </View>
          <View className='person-class-right'>
            <Image src={getClass} className='person-class-img2'> </Image>
          </View>
        </View>
        <View className='person-logout'>
          <Text className='person-logout-btn' onClick={this.logout} style={btnStyle}>退出登录</Text>
        </View>
      </View>
    )
  }
}

export default Person
