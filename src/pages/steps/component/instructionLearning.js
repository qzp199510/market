import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import './style/beforeClass.less'
import './style/card.less'
import './style/btn.less'
import Purple from '../../../static/images/purple.png'
import Orange from '../../../static/images/orange.png'
import Norm from '../../../static/images/norm.png'
import Order from '../../../static/images/order.png'

const cardInfo = [{
    id: 1,
    leftImg: Norm,
    title: '一',
    introduc: '一一一 i i 一一一一一',
    rightImg: Purple
}, {
    id: 2,
    leftImg: Order,
    title: '二',
    introduc: '------------------2222',
    rightImg: Orange
}];

class InstructionLearning extends Component {

    config = {
        navigationBarTitleText: '熊本熊',
    }
    constructor() {
        super(this.props)
        this.state = {
            imagesShow: false,
            videoInfo: 'https://qn-static.landi.com/landiubase/assets/landi_classinfo.mp4',
            sharyUrl: '',
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
        Taro.setStorage({ key: 'experience_classsteps_2', data: true }).then(res => console.log(res));
        if (this.$router.params.types) {
            this.setState({
                router: that.$router.params.types
            });
        }
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
    componentWillUnmount() {
        Taro.reLaunch({
            url: '/pages/homePage/index'
        });
    }
    showImage(type) {
        this.setState({
            imagesShow: true
        })
        switch (type) {
            case 1:
                this.setState({
                    videoInfo: 'https://qn-static.landi.com/landiubase/assets/landi_classinfo.mp4',
                });
                break;
            case 2:
                this.setState({
                    videoInfo: 'https://qn-static.landi.com/landiubase/assets/mb-stu-video4.mp4',
                });
                break;
            default:
                break;
        }
    }
    closeImage = () => {
        this.setState({
            imagesShow: false
        })
    };
    getLearning = () => {
        Taro.navigateTo({ url: '/pages/steps/component/teachersInfo?types=steps' });
    }
    render() {
        const { imagesShow, videoInfo } = this.state;
        return (
            <View className='beforeClass'>
                {
                    imagesShow && <View className='images_show'>
                        <View className='video'>
                            <Video src={videoInfo}
                                // onPlay={this.bindplay}
                                controls={true}
                                customCache={false}
                                autoplay={true}
                                onPause={this.bindplay}
                                id='video'
                            >
                            </Video>
                        </View>
                        <Text onClick={this.closeImage} className='images_x'>×</Text>
                    </View>
                }
                <View className='beforeClass-main'>
                    {
                        cardInfo.map((list, index) =>
                            <View className='card' key={index} onClick={this.showImage.bind(this, list.id)}>
                                <View className='card-main'>
                                    <Image src={list.leftImg} className='card-left-img' > </Image>
                                    <View className='card-text'>
                                        <Text className='card-text-title'>{list.title}</Text>
                                        <Text className='card-text-introduc'>{list.introduc}</Text>
                                    </View>
                                    <Image src={list.rightImg} className='card-right-img'> </Image>
                                </View>
                            </View>
                        )
                    }
                </View>
                <Text className='beforeClass-btn' onClick={this.getLearning}>下一步</Text>
            </View>
        )
    }
}

export default InstructionLearning
