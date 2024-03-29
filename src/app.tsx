import Taro, { Component, Config } from "@tarojs/taro";
import "@tarojs/async-await";
import { Provider } from "@tarojs/redux";
import "./utils/request";
import Index from "./pages/index";
import dva from './utils/dva'
import models from './models'
import './app.less'
import 'taro-ui/dist/style/index.scss'
import { globalData } from "./utils/common";
// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

const dvaApp=dva.createApp({initialState:{},models:models});
const store=dvaApp.getStore()


//npx iconfont

class App extends Component {

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    pages: [
      'pages/index/index',
    ],
    "permission": {
      "scope.userLocation": {
        "desc": "你的位置信息将用于小程序位置接口的效果展示" // 高速公路行驶持续后台定位
      }
    },

    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },

  }

  async componentDidMount () {

    const referrerInfo: {[key: string]: any} | string |undefined = this.$router.params.referrerInfo;
    const query = this.$router.params.query;
    !globalData.extraData && (globalData.extraData = {});
    // @ts-ignore
    if (referrerInfo && referrerInfo.extraData) {globalData.extraData = referrerInfo.extraData;}
    if (query) {
      // @ts-ignore
      globalData.extraData = {...globalData.extraData, ...query};
    }

    // 获取设备信息  加到全局变量globalData里
    const sys = await Taro.getSystemInfo();
    sys && (globalData.systemInfo = sys);
  }

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Provider store={store}>
         <Index />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
