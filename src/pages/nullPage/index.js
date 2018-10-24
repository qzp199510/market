import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text, Image } from '@tarojs/components'
import './index.less'
import yellow from '../../static/images/yellow.png'
import pink from '../../static/images/pink.png'
import remain from '../../static/images/remain.png'
import error from '../../static/images/error.png'
import api from '../../service/api'

class Login extends Component {

    config = {
        navigationBarTitleText: '熊本熊'
    }
    constructor() {
        super(this.props)
        this.state = {
            userInfo:{}
        };
    }
    onShareAppMessage(res) {
        let that = this;
        const { sharyUrl } = this.state
        return {
            title: '熊本熊',
            path: sharyUrl,
            desc: '熊本熊',
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
            key: 'userInfoLandi',
            success: (info) => {
                const path = `/pages/index/index?shareid=${info.data.sid}&type=${2}`;
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
        });
    }
    getPage = () => {
        Taro.reLaunch({
            url: '/pages/login/index'
        });
    }
    render() {
        const {userInfo} = this.state;
        let formInfo = `nickName=userInfo.nickname}|avatarUrl=userInfo.avatar}|referrerTitle={{ysf.title}}`;
        return (
            <View className='null_page'>
                <View className='null_page_logo'>
                    <Image src={yellow} className='null_page_img'></Image>
                    <Text className='null_page_text text'> 就可以进入小程序开发环境进行开发了</Text>
                    <Text className='null_page_text'> 就可以进入小程序开发环境进行开发了</Text>
                </View>

                <View className='classInfo-centext' onClick={this.getPage}>
                    <Image src={remain} className='classInfo-centext_img'> </Image>
                    <View className='classInfo-info'>
                        <Text className='classInfo-centext_title'> 登陆错误 </Text>
                    </View>
                    <View className='classInfo-centext_introduce'> 执行 cnpm run dev:weapp命令,就可以进入小程序开发环境进行开发了 <Text className='btn_color'>立即切换</Text></View>
                    <Image src={yellow} className='logout_icon'> </Image>
                </View>
                <View className='classInfo-centext' >
                    <Image src={error} className='classInfo-centext_img'> </Image>
                    <View className='classInfo-info'>
                        <Text className='classInfo-centext_title'> 忘记</Text>

                    </View>
                    <View className='classInfo-centext_introduce'> 执行 cnpm run dev:weapp命令,就可以进入小程序开发环境进行开发了<Button session-from={formInfo} className='btn_color' open-type='contact'>在线客服</Button>执以进入小程序开发环境进行开发了</View>
                    <Image src={pink} className='logout_icon'> </Image>
                </View>
            </View>
        )
    }
}

export default Login
