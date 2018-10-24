import Taro, { Component } from '@tarojs/taro'
import '@tarojs/async-await'
import { Provider } from '@tarojs/redux'
import HomePage from './pages/homePage/index'
import configStore from './store'
import './app.less'

const store = configStore()

class App extends Component {

  config = {
    pages: [
      'pages/index/index',
      'pages/login/index',
      'pages/homePage/index',
      'pages/nullPage/index',
      'pages/steps/component/downPlatform',
      'pages/steps/component/beforeClass',
      'pages/steps/component/instructionLearning',
      'pages/steps/component/teachersInfo',
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
  }
  constructor() {
    super(...arguments)
    this.state = {
    }
  }
  componentWillMount() {
    const params = this.$router.params;
    if (JSON.stringify(params.query) != '{}') {
      Taro.setStorage({ key: 'ccidInfo', data: params.query });
      Taro.setStorage({ key: 'sceneLandi', data: params.scene });
    } else {
      Taro.setStorage({ key: 'sceneLandi', data: params.scene });
    }
  }
  render() {
    return (
      <Provider store={store}>
        <HomePage />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
