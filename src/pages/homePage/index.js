import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import person from '../../static/images/person.png'
import classImg from '../../static/images/class.png'
import classInfo from './component/classInfo'
import personInfo from './component/person'
import './index.less'
import api from '../../service/api'

class Login extends Component {

  config = {
    navigationBarTitleText: '熊本熊',
  }
  constructor() {
    super(this.props)
    this.state = {
      classStyle: {},
      personStyle: {},
      sharyUrl: '',
      viewStyle: { display: 'block' },
      viewStyle_2: { display: 'none' },
      router: ''
    }
  }
  onShareAppMessage(res) {
    let that = this;
    const { sharyUrl } = this.state;
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
    if (this.$router.params.classInfo) {
      this.setState({
        viewStyle: { display: 'none' },
        viewStyle_2: { display: 'block' },
        personStyle: { backgroundImage: `linear-gradient(-6deg, #24C8D8 0%, #52EDC7 100%)` },
        classStyle: { backgroundImage: `linear-gradient(-6deg,  #86D7DF 0%, #81F2D7 100%)` },
      })
    } else {
      this.setState({
        // classStyle : { backgroundImage: `url(https://qn-static.landi.com/uploadtool33c7ee1ec39618485b7911956fae7516.png)`,backgroundSize: 'cover'},
        classStyle: { backgroundImage: `linear-gradient(-6deg, #24C8D8 0%, #52EDC7 100%)` },
        personStyle: { backgroundImage: `linear-gradient(-6deg,  #86D7DF 0%, #81F2D7 100%)` }
        // personStyle : { backgroundImage: `url(https://qn-static.landi.com/uploadtool81a23b6b75444571f8b1b2b44074af8a.png)`,backgroundSize: 'cover'}
      })
    }
    Taro.getStorage({
      key: 'userInfoLandi',
      success: (res) => {
        const path = `/pages/homePage/index?shareid=${res.data.sid}&type=${2}`;
        Taro.getStorage({
          key: 'sceneLandi',
          success: (scene) => {
            Taro.getStorage({
              key: 'ccidInfo',
              success: () => {
                Taro.removeStorageSync('ccidInfo');
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

          },
          fail: () => {
            that.setState({
              sharyUrl: '/pages/index/index'
            })
          }
        });
      },
      fail: () => {
        Taro.reLaunch({
          url: '/pages/index/index'
        });
      }
    })

    Taro.showShareMenu({
      withShareTicket: true
    });

  }
  changeTags(info) {
    if (info === 0) {
      this.setState({
        classStyle: { backgroundImage: `linear-gradient(-6deg, #24C8D8 0%, #52EDC7 100%)` },
        personStyle: { backgroundImage: `linear-gradient(-6deg,  #86D7DF 0%, #81F2D7 100%)` },
        viewStyle: { display: 'block' },
        viewStyle_2: { display: 'none' },
      })
    } else {
      this.setState({
        classStyle: { backgroundImage: `linear-gradient(-6deg,  #86D7DF 0%, #81F2D7 100%)` },
        personStyle: { backgroundImage: `linear-gradient(-6deg, #24C8D8 0%, #52EDC7 100%)` },
        viewStyle_2: { display: 'block' },
        viewStyle: { display: 'none' },

      })
    }
  }

  render() {
    const { classStyle, personStyle, viewStyle, viewStyle_2 } = this.state;
    return (
      <View className='homePage'>
        <View className='main'>
          <View style={viewStyle}><classInfo ></classInfo></View>
          <View style={viewStyle_2}><personInfo ></personInfo></View>
        </View>
        <View className='homePage-footer'>
          <View className='footerText text_class' onClick={this.changeTags.bind(this, 0)} style={classStyle}> <Image src={classImg} className='img_class'></Image><Text className='text'>熊本熊</Text></View>
          <View className='footerText text_person' onClick={this.changeTags.bind(this, 1)} style={personStyle}> <Image src={person} className='img_person'></Image><Text className='text'>我的</Text></View>
        </View>
      </View>
    )
  }
}

export default Login
