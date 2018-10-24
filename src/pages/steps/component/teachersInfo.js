import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image, Video } from '@tarojs/components'
import './style/teachersInfo.less'
import Play from '../../../static/images/play.png'
import IconTea from '../../../static/images/iconTea.png'
import Time from '../../../static/images/time.png'
import api from '../../../service/api'

class TeacherInfo extends Component {

    config = {
        navigationBarTitleText: '熊本熊',
    }
    constructor() {
        super(this.props)
        this.state = {
            viewStyle: { display: 'block' },
            videoStyle: { display: 'none' },
            teacherInfo: {time:'12322332232323',avatar:IconTea,self_intro:'人喜欢用es6方式传值,但是在taro使用es6传值编译会出错,所以在使用taro制作小程序时建议使用.bind传值,如点击事件传值: onClick={this.onClick.bind(this,num)}**底部TabBar使用**官方的**TabBar**配置只要在**app.js**中配置好就行了,但是官方的**TabBar**只提供了部分属性不好扩展,如果需要扩展,建议自定义开发'},
            sharyUrl: '',
            showView: false,
            router: ''
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
        Taro.setStorage({ key: 'experience_classsteps_3', data: true }).then(res => console.log(res));
        if (this.$router.params.types) {
            this.setState({
                router: that.$router.params.types
            });
        }
        Taro.showLoading({ title: '加载中...', mask: true });
        Taro.getStorage({
            key: 'userInfoLandi',
            success: (res) => {
                const path = `/pages/homePage/index?shareid=${res.data.sid}&type=${2}`;
                that.setState({
                    sharyUrl: path
                })
                
                    Taro.hideLoading({
                        success: () => {
                            that.setState({
                                showView: true
                            });
                        }
                    });
            },
            fail: () => {
                Taro.reLaunch({
                    url: '/pages/index/index'
                });
            }
        })

    }

    componentWillUnmount() {
        if (this.state.router == 'logout') {
            Taro.reLaunch({
                url: '/pages/homePage/index?classInfo=person'
            });
        } else {
            Taro.reLaunch({
                url: '/pages/homePage/index'
            });
        }
    }
    add = (m) => {
        return m < 10 ? '0' + m : m
    }
    timeShow = (data) => {
        let time = new Date(data);
        var y = time.getFullYear();
        var m = time.getMonth() + 1;
        var d = time.getDate();
        var h = time.getHours();
        var mm = time.getMinutes();
        var s = time.getSeconds();
        return y + '-' + this.add(m) + '-' + this.add(d) + ' ' + this.add(h) + ':' + this.add(mm) + ':' + this.add(s);
    }

    play = () => {
        this.setState({
            viewStyle: {
                display: 'none',
            },
            videoStyle: { display: 'block' }
        });
        let video = Taro.createVideoContext('video');
        video.play();
    }
    render() {
        const { teacherInfo } = this.state;
        return (
            <View className='teacherInfo'>
                <View>
                    <View className='teacherInfo-head'>
                        <Image src={IconTea} className='img1'></Image>
                        <Text className='text1'>这是卡片</Text>
                        <View className='teacherInfo-time'>
                            <Image src={Time} className='img2'></Image>
                            <Text className='text2'>{teacherInfo.time}</Text>
                        </View>
                    </View>

                    <View class='info_card'>
                        <View class='message'>
                            <Image src={`${teacherInfo.avatar}?imageView2/1/w/150/h/150`} className='info_img'></Image>
                            <View class='class_info'>
                                <Text className='info_text'>熊本熊: {teacherInfo.nickname}</Text>
                                <Text className='info_text'>熊本熊: {teacherInfo.nation}</Text>
                                <Text className='info_text'>熊本熊: {teacherInfo.overall_score}</Text>
                            </View>
                        </View>
                    </View>

                    <View class='introduction'>
                        <Text className='info_text'>Self-introduction</Text>
                        <View class='main'>
                            <Text className='main_text'>{teacherInfo.self_intro}</Text>
                        </View>
                    </View>

                    <View class='introduction'>
                        <Text className='info_text'>Self-introduction-video</Text>
                        <View class='main_2'>
                            <Video className='video' src='http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400'
                                // onPlay={this.bindplay}
                                style={this.state.videoStyle}
                                controls={true}
                                customCache={false}
                                autoplay={false}
                                onPause={this.bindplay}
                                id='video'
                            >
                            </Video>
                            <View class='img_box' style={this.state.viewStyle}>
                                <Image className='img' src={Play} onClick={this.play} />
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

export default TeacherInfo
