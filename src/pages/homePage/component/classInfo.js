import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import step1 from '../../../static/images/one.png'
import step2 from '../../../static/images/two.png'
import step3 from '../../../static/images/three.png'
import './style/classInfo.less'
import api from '../../../service/api'

class ClassInfo extends Component {
    config = {
        navigationBarTitleText: '兰迪英语体验课',
    }
    constructor() {
        super(this.props)
        this.state = {
            stepInfo: [{
                id: 1,
                imgUrl: step1,
                title: '熊本熊',
                status: '待完成',
                introduce: '熊本熊'
            }, {
                id: 2,
                imgUrl: step2,
                title: '熊本熊',
                status: '待完成',
                introduce: '熊本熊'
            }, {
                id: 3,
                imgUrl: step3,
                title: '熊本熊',
                status: '待完成',
                introduce: '熊本熊'
            }],
            getUrl_1: '/pages/steps/component/beforeClass?openid=1&nickName=2',
            getUrl_2: '/pages/steps/component/instructionLearning',
            getUrl_3: '/pages/steps/component/teachersInfo',
            getUrl_0: '/pages/steps/component/downPlatform',
            userInfo: {banner:step3},
        }
    }
    changeSteps(id) {
        const { getUrl_1, getUrl_2, getUrl_3 } = this.state;
        switch (id) {
            case 1:
                Taro.getStorage({
                    key: 'userInfoLandi',
                    success: () => {
                        Taro.navigateTo({ url: getUrl_1 });
                    },
                    fail: () => {
                        Taro.reLaunch({
                            url: '/pages/index/index'
                        });
                    }
                })

                break;
            case 2:
                Taro.getStorage({
                    key: 'userInfoLandi',
                    success: () => {
                        Taro.navigateTo({ url: getUrl_2 });
                    },
                    fail: () => {
                        Taro.reLaunch({
                            url: '/pages/index/index'
                        });
                    }
                })
                break;
            case 3:
                Taro.getStorage({
                    key: 'userInfoLandi',
                    success: () => {
                        Taro.navigateTo({ url: getUrl_3 });
                    },
                    fail: () => {
                        Taro.reLaunch({
                            url: '/pages/index/index'
                        });
                    }
                })
                break;
            default:
                break;
        }
    };
    goPage = () => {
        Taro.navigateTo({ url: this.state.getUrl_0 });
    };
    componentWillMount() {
        Taro.showLoading({ title: '加载中...', mask: true });
        Taro.getStorage({
            key: 'userInfoLandi',
            success: (res) => {
                // this.setState({
                //     getUrl_0: '/pages/nullPage/index',
                //     getUrl_1: '/pages/nullPage/index',
                //     getUrl_2: '/pages/nullPage/index',
                //     getUrl_3: '/pages/nullPage/index',
                // })
            },
            fail: () => {
                Taro.reLaunch({
                    url: '/pages/index/index'
                });
            }
        })

        const that = this;
        const stepList = this.state.stepInfo;
        Taro.showShareMenu({
            withShareTicket: true
        });
        Taro.getStorage({
            key: 'experience_classsteps_1',
            success: (res) => {
                if (res.data) {
                    stepList[0].status = '已完成';
                    that.setState({
                        stepInfo: stepList
                    })
                }
            },
            fail: () => {
                stepList[0].status = '待完成';
                that.setState({
                    stepInfo: stepList
                })
            }
        })
        Taro.getStorage({
            key: 'experience_classsteps_2',
            success: (res) => {
                if (res.data) {
                    stepList[1].status = '已完成';
                    that.setState({
                        stepInfo: stepList
                    })
                }
            },
            fail: () => {
                stepList[1].status = '待完成';
                that.setState({
                    stepInfo: stepList
                })
            }
        })
        Taro.getStorage({
            key: 'experience_classsteps_3',
            success: (res) => {
                if (res.data) {
                    stepList[2].status = '已完成';
                    that.setState({
                        stepInfo: stepList
                    })
                }
            },
            fail: () => {
                stepList[2].status = '待完成';
                that.setState({
                    stepInfo: stepList
                })
            }
        })

    }
    render() {
        const { stepInfo, userInfo } = this.state;
        return (
            <View className='classInfo' >
                <View>
                    <View className='classInfo-banner' >
                        <Image src={userInfo.banner} className='img_class' onClick={this.goPage}> downPlatform</Image>
                    </View >
                    <View className='main' >
                        {
                            stepInfo.map((list) =>
                                <View className='classInfo-centext' key={list.id} onClick={this.changeSteps.bind(this, list.id)} >
                                    <Image src={list.imgUrl} className='classInfo-centext_img'> </Image>
                                    <View className='classInfo-info' key={list.id}>
                                        <Text className='classInfo-centext_title'> {list.title} </Text>
                                        <Text className='classInfo-centext_status'> {list.status} </Text>
                                    </View>
                                    <Text className='classInfo-centext_introduce'> {list.introduce} </Text>
                                </View>
                            )
                        }
                    </View>
                </View>

            </View>
        )
    }
}

export default ClassInfo