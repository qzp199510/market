import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import './style/beforeClass.less'
import './style/card.less'
import './style/btn.less'
import Blue from '../../../static/images/blue.png'
import Red from '../../../static/images/red.png'
import Green from '../../../static/images/green.png'
import Step1 from '../../../static/images/step1.png'
import Step2 from '../../../static/images/step2.png'
import Step3 from '../../../static/images/step3.png'

const cardInfo = [{
    leftImg: Step1,
    title: 'Step1',
    introduc: '第一步',
    rightImg: Blue
}, {
    leftImg: Step2,
    title: '第二步',
    introduc: '熊本熊3',
    rightImg: Red
},
{
    leftImg: Step3,
    title: '第三步',
    introduc: '熊本熊4',
    rightImg: Green
}];

class BeforeClass extends Component {

    config = {
        navigationBarTitleText: '熊本熊',
    }
    constructor() {
        super(this.props)
        this.state = {
            imagesShow: false,
            longImg: '',
            imgStyle: {},
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
        })
        Taro.setStorage({ key: 'experience_classsteps_1', data: true }).then(res => console.log(res));
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
            case 'Step1':
                this.setState({
                    longImg: 'https://qn-static.landi.com/uploadtoole2314c712f8f477ce05ab80a145b3972.png',
                    imgStyle: { height: '280%' }
                });
                break;
            case 'Step2':
                this.setState({
                    longImg: 'https://qn-static.landi.com/uploadtool119f7788df42e3dba5b3b4cc8b553fcc.png',
                    imgStyle: { height: '550%' }
                });
                break;
            case 'Step3':
                this.setState({
                    longImg: 'https://qn-static.landi.com/uploadtool29175adca85f04474c163601cd7c28ab.png',
                    imgStyle: { height: '180%' }
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
        Taro.navigateTo({ url: '/pages/steps/component/instructionLearning?types=steps' });
    }
    render() {
        const { imagesShow, longImg, imgStyle } = this.state;
        return (
            <View className='beforeClass'>
                {
                    imagesShow && <View className='images_show'>
                        <Image src={longImg} className='long_images' style={imgStyle}></Image>
                        <Text onClick={this.closeImage} className='images_x'>×</Text>
                    </View>
                }
                <View className='beforeClass-main'>
                    {
                        cardInfo.map((list, index) =>
                            <View className='card' key={index} onClick={this.showImage.bind(this, list.title)}>
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

export default BeforeClass
