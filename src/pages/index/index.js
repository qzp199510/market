import Taro, { Component } from '@tarojs/taro'
import { View, Button, Image, Form } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { login } from '../../actions/login'
import './index.less'
import api from '../../service/api'


@connect(({ counter }) => ({
  counter
}), (dispatch) => ({
  async asyncLogin(loginInfo) {
    dispatch(login(loginInfo))
  }
}))
class Index extends Component {

  config = {
    navigationBarTitleText: '熊本熊',

  }
  constructor() {
    super(...arguments)
    this.state = {
      code: '',
      formId: '',
      userInfo: {},
      sharyUrl: ''
    }
  }
  onShareAppMessage(res) {
    let that = this;
    const { sharyUrl } = this.state
    return {
      title: '兰迪体验课',
      path: sharyUrl,
      desc: '给孩子准备一堂有趣的在线英美外教课',
      success: (data) => {
        // 转发成功
        that.shareClick();
      },
      fail: (data) => {
        // 转发失败
      }
    }
  }

  componentWillMount() {
    const params = this.$router.params;
    const path = `/pages/homePage/index?shareid=${params.shareid}&type=${params.type}`;
    this.setState({
      sharyUrl: path
    })
    Taro.getStorage({
      key: 'userInfoLandi',
      success: () => {
        Taro.reLaunch({
          url: '/pages/homePage/index'
      });
      },
      fail: () => { 
      }
  });
    Taro.login().then(res => {
      if (res.code) {
        this.setState({
          code: res.code
        })
      }
    })
    Taro.showShareMenu({
      withShareTicket: true
    });
  }
  //获取用户信息
  getUserInfo = (code) => {
    return ;
  };
  //跳转登陆页
  getLoginPage = () => {
    Taro.navigateTo({ url: '/pages/login/index' });
  }
  //微信获取手机号授权登陆 (该接口只针对非个人开发者)
getPhoneNumber(e) {
  let loginInfo = [
    {
      openid: '123456',
      login_type: 1,
    }, { form_id: this.state.formId }]
  this.props.asyncLogin(loginInfo);
  console.log(e,'--------');  
    //获取optionid session_key
    try {
      if (e.detail.encryptedData && e.detail.iv) {
        
        
      } else {
        
        Taro.showToast({
          title: '取消授权成功',
          icon: 'success',
          duration: 3000,
          mask: true
        });
      }
    } catch (error) {
      Taro.showToast({
        title: '系统错误',
        icon: 'none',
        duration: 3000,
        mask: true
      });
    }
  }
  //获取form_id
  formSubmit = (e) => {
    this.setState({
      formId: e.detail.formId,
    })
  }
  render() {

    return (
      <View className='index' style='background-image: url();background-color: black;'>
        <View className='index-img'>
          <Image src='' className='index-img2_logo'></Image>
        </View>
        <View className='index-img2'>
          <Image src='' className='index-img_logo'></Image>
        </View>
        <Form reportSubmit='true' onSubmit={this.formSubmit}>
          <Button className='index-btn' onClick={this.getLoginPage} >手机验证登录</Button>
          <Button className='index-btn' formType='submit' openType='getPhoneNumber' onGetPhoneNumber={this.getPhoneNumber.bind(this)}>微信快速登录</Button>
        </Form>
      </View>
    )
  }
}

export default Index
