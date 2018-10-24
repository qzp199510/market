import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text, Input, Image, Form } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { login } from '../../actions/login'
import phoneImg from '../../static/images/phone.png'
import codeImg from '../../static/images/code.png'
import './index.less'
import api from '../../service/api'

@connect(({ counter }) => ({
  counter
}), (dispatch) => ({
  async asyncLogin(loginInfo) {
    dispatch(login(loginInfo))
  },
}))
class Login extends Component {

  config = {
    navigationBarTitleText: '手机验证登录'
  }
  constructor() {
    super(this.props)
    this.state = {
      phone: '',
      code: '',
      errMessage: '',
      disabled: true,
      btnColor: { backgroundColor: '#999' },
      obtainYzm: '获取验证码',
      disabledCode: false,
      formId: '',
      sharyUrl: ''
    };
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
    let that = this;
    Taro.getStorage({
      key: 'ccidInfo',
      success: (info) => {
        const path = `/pages/index/index?shareid=${info.data.shareid}&type=${info.data.type}`;
        that.setState({
          sharyUrl: path
        })
      },
      fail: () => {
        that.setState({
          sharyUrl: '/pages/index/index'
        })
      }
    });
    Taro.showShareMenu({
      withShareTicket: true
    })
  }

  //获取登陆信息
  getInfo = () => {
    return Taro.login();
  }
  //获取用户信息
  getUserInfo = (code) => {
    return;
  };

  messageColl = () => {
    this.setState({
      errMessage: ''
    })
  }
  async login() {
    clearInterval(this.interval);
    const { phone, code } = this.state;
    if (phone == '') {
      this.setState({
        errMessage: '手机号不能为空',
      });
      this.interval = setInterval(() => this.messageColl(), 3000);
    } else if (!this.isPoneAvailable(phone)) {
      this.setState({
        errMessage: '请输入正确手机号',
      });
      this.interval = setInterval(() => this.messageColl(), 3000);
    } else if (code == '') {
      this.setState({
        errMessage: '验证码不能为空',
      });
      this.interval = setInterval(() => this.messageColl(), 3000);
    } else if (!this.isCode(code)) {
      this.setState({
        errMessage: '请输入正确验证码',
      });
      this.interval = setInterval(() => this.messageColl(), 3000);
    } else {
      try {
        //获取登陆code
        const res = await this.getInfo();
        if (res.code) {
          //获取optionid session_key
          const data = await this.getUserInfo({ code: res.code });
          let loginInfo = [
            {
              openid: data.data.data.openid,
              mobile: phone,
              sms_yzm: code,
              login_type: 2,

            }, { form_id: this.state.formId }];
          this.props.asyncLogin(loginInfo);
        }
      } catch (error) {
        Taro.showToast({
          title: '系统错误',
          icon: 'error',
          duration: 1000,
          mask: true
        });
      }
    }
  }
  //手机号正则
  isPoneAvailable = (phone) => {
    const myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
    if (!myreg.test(phone)) {
      return false;
    }
    return true;
  };
  //验证码正则
  isCode(info) {
    const myreg = /^\d{6}$/;
    if (!myreg.test(info)) {
      return false;
    }
    return true;
  };
  //获取验证码
  getCode = () => {
    const that = this;
    const { phone } = this.state;
    clearInterval(this.interval);
    if (phone == '') {
      this.setState({
        errMessage: '手机号不能为空',
      });
      this.interval = setInterval(() => this.messageColl(), 3000);
    } else {

      Taro.showToast({
        title: '验证码已发送',
        icon: 'success',
        duration: 3000,
        mask: true
      });
      let time = 60;
      const timeCount = setInterval(() => {
        if (time > 1) {
          time--;
          that.setState({
            obtainYzm: `${time}s`,
            disabledCode: true,
          });

        } else {
          that.setState({
            obtainYzm: '重新发送',
            disabledCode: false
          });
          clearInterval(timeCount);
        }
      }, 1000);
    }
  }
  //手机号改变
  changePhone = (e) => {
    const { code } = this.state;
    this.setState({
      phone: e.target.value,
    });
    this.btnColl(code, e);
  }
  //验证码改变
  changeCode = (e) => {
    const { phone } = this.state;
    this.setState({
      code: e.target.value,
    });
    this.btnColl(phone, e);
  }
  //按钮样式控制
  btnColl = (value, e) => {
    if (value !== '' && e.target.value !== '') {
      this.setState({
        disabled: false,
        btnColor: { backgroundColor: '#EA050E' },
      })
    } else {
      this.setState({
        disabled: true,
        btnColor: { backgroundColor: '#999' }
      })
    }
  }
  //获取form_id
  formSubmit = (e) => {
    this.setState({
      formId: e.detail.formId,
    })
  }
  render() {
    const { phone, code, disabled, btnColor, obtainYzm, disabledCode } = this.state;
    return (
      <View className='login' style='background-image: url();background-color: black;'>
        <View className='mongolian_layer'>
          <View className='login-img2'>
            <Image src=''></Image>
          </View>
          <View className='login-text'>
            <Text className='login-p'> 如好的师傅黄金时间快点放假快点睡觉看哈</Text>
            <Text className='login-p'> 东方斯卡拉方式~ </Text>
          </View>
          <View className='login-phone'>
            <Image src={phoneImg} className='login-phone_images'></Image>
            <Text className='login-phone-text'> | </Text>
            <Input type='number' placeholder='请输入手机号' placeholder-style='color:rgb(255,255,255)' className='login-phone-inp' maxlength='11' value={phone} onInput={this.changePhone}></Input> </View>
          <View className='login-code'>
            <View className='login-code_main'>
              <Image src={codeImg} className='login-phone_images login-code_images'></Image>
              <Text className='login-code_main-text'> | </Text>
              <Input type='number' placeholder='请输入验证码' placeholder-style='color:rgb(255,255,255)' className='login-code_main-inp' maxlength='6' value={code} onInput={this.changeCode}></Input>
            </View>
            <Button className='login-code-btn' onClick={this.getCode} disabled={disabledCode}>{obtainYzm}</Button>
          </View>
          <View className='login-errMessage'>
            <Text className='login-message' style=''>{this.errMessage}</Text>
          </View>
          <Form reportSubmit='true' onSubmit={this.formSubmit}>
            <Button className='login-btn' formType='submit' onClick={this.login.bind(this)} disabled={disabled} style={btnColor}>登录</Button>
          </Form>
        </View>
      </View>
    )
  }
}

export default Login
