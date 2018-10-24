import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text, Image, Form } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { recordFormid } from '../../../actions/login'
import Icon from '../../../static/images/icon.png'
import './style/downPlatform.less'

@connect(({ counter }) => ({
    counter
}), (dispatch) => ({
    async asyncRecordFormid(loginInfo) {
        dispatch(recordFormid(loginInfo))
    }
}))

class DownPlatform extends Component {

    config = {
        navigationBarTitleText: '熊本熊',
    }
    constructor() {
        super(this.props)
        this.state = {
            sharyUrl: ''
        }
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
                const path = `/pages/homePage/index?shareid=${info.data.sid}&type=${2}`;
                that.setState({
                    sharyUrl: path
                })
            },
            fail: () => {
                Taro.reLaunch({
                    url: '/pages/index/index'
                });
            }
        });
        Taro.showShareMenu({
            withShareTicket: true
        });
    }
    getStep = () => {
        Taro.navigateTo({ url: '/pages/steps/component/beforeClass?types=steps' });
    }
    //获取form_id
    formSubmit = (e) => {
        Taro.getStorage({ key: 'userInfoLandi' }).then(res => {   //从缓存中获取用户信息
            if (res.data) {
                let infos = { form_id: e.detail.formId, openid: res.data.openid };
                this.props.asyncRecordFormid(infos);
            }
        });
    }
    render() {
        return (
            <View className='downPlatform'>
                <View className='downPlatform-main'>
                    <View className='downPlatform-title'>
                        <Text>熊本熊 </Text>
                    </View>
                    <View className='downPlatform-title2'>
                        <Image src={Icon} className='downPlatform-icon'> </Image>
                        <Text className='downPlatform-title2-text'>本人喜欢用es6方式传值 </Text>
                    </View>
                    <View className='downPlatform-text'>
                        <Text className='downPlatform-text-info'>,官方的TabBar配置只要在app.js中配</Text>
                        <Text className='downPlatform-text-info'>会出错,所以在使用taro制作小程序时建议使</Text>
                        <Text className='downPlatform-text-info'>官方的TabBar配置只要在app.js中配</Text>
                        <Text className='downPlatform-text-info'>官方的TabBar配置只要在app.js中配</Text>
                        <Text className='downPlatform-text-info'>官方的TabBar配置只要在app.js中配</Text>
                    </View>
                    <View className='downPlatform-text downPlatform-text2'>
                        <Text className='downPlatform-text-info'>官方的TabBar配置只要在app.js中配</Text>
                        <Text className='downPlatform-text-info'>官方的TabBar配置只要在app.js中配</Text>
                        <Text className='downPlatform-text-info'>所以在使用taro制作小程序时建议使</Text>
                        <Text className='downPlatform-text-info'>所以在使用taro制作小程序时建议使</Text>
                    </View>

                    <View className='downPlatform-text downPlatform-text2'>
                        <Text className='downPlatform-text-info'>所以在使用taro制作小程序时建议使</Text>
                        <Text className='downPlatform-text-info'>所以在使用taro制作小程序时建议使/Mac/安卓平板</Text>
                        <Text className='downPlatform-text-info'>/所以在使用taro制作小程序时建议使</Text>
                        <Text className='downPlatform-text-info'>《课堂规范&所以在使用taro制作小程序时建议使</Text>
                        <Text className='downPlatform-text-info'>视频指南</Text>
                        <Text className='downPlatform-text-info'>所以在使用taro制作小程序时建议使</Text>
                    </View>

                    <View className='downPlatform-text downPlatform-text2'>
                        <Text className='downPlatform-text-info'>所以在使用taro制作小程序时建议使</Text>
                        <Text className='downPlatform-text-info'>所以在使用taro制作小程序时建议使</Text>
                    </View>
                </View>
                <Form reportSubmit='true' onSubmit={this.formSubmit}>
                    <Button formType='submit' className='downPlatform-btn' onClick={this.getStep}>下一步</Button>
                </Form>
            </View>
        )
    }
}

export default DownPlatform
