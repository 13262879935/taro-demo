
import Taro, { Component, Config } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { connect } from '@tarojs/redux'
// import Api from '../../utils/request'
import { IndexProps, IndexState } from './index.interface'
import './index.less'
import {SHAREINFO} from "@/config/index";
import {AtButton, AtFab} from "taro-ui";
import Api from '../../utils/request'
import MyTabBar from "@/components/MyTabBar/MyTabBar";
import My from '@/page_components/my/my';
import ShopCar from '@/page_components/shopCar/shopCar';
import Recommend from '@/page_components/recommend/recommend';
import Classify from '@/page_components/classify/classify';
import Home from '@/page_components/home/home'
// import { } from '../../components'

@connect(({ index }) => ({
    ...index,
}))

class Index extends Component<IndexProps,IndexState > {
  config:Config = {
    navigationBarTitleText: '首页',
    // navigationBarBackgroundColor:'#F00',
    "usingComponents": {
      "iconfont": "../../iconfont/iconfont"
    },
    enablePullDownRefresh: true,  //开启下拉刷新
    "backgroundColorTop":'#aaaaaa', //下拉刷新的背景颜色
    onReachBottomDistance:100, //触发距离离底部100
  }
  constructor(props: IndexProps) {
    super(props);
    this.state = {
      current:0
    }
  }

  onPullDownRefresh(): void {
    console.log('触发刷新')
  }
  onReachBottom(): void {
    console.log('在触发距离内滑动期间，本事件只会被触发一次')
  }


  componentDidMount() {
    Api.get('/')
    // console.log(globalData)
    // Taro.login({
    //   //登陆成功
    //   success:res => {
    //     console.log(res)
    //   },
    //   //登陆失败
    //   fail:err=>{
    //     console.log(err)
    //   },
    //   //登陆结束
    //   complete:res=>{
    //     console.log(res)
    //   },
    //   //登陆超时时限
    //   timeout:2000
    // })
    // Tips.toast('普通提示');
    // Tips.success('成功提示',2000);
    // Tips.loading('正在加载');
    // setTimeout(()=>Tips.loaded(),1000)
    // Taro.openSetting({
    //
    // })
  }


  onShareAppMessage(obj: Taro.ShareAppMessageObject): Taro.ShareAppMessageReturn {
    if (obj.from==='menu'){
      return SHAREINFO('分享标题,通过点击右上角')
    }else {
      return SHAREINFO('分享标题,不是通过右上角')
    }
  }
  //获取手机号码
  getPhoneNumber=(event)=>{
    console.log(event)
  };
  //获取地理位置
  getLocation=()=>{
    Taro.getLocation({
      success:(res)=>{
        console.log(res)
      },
      fail:err => {
        console.log(err)
      }
    })
  }
  AtfabClick=(Event)=>{
    console.log(Event)
  }

  getRequest=()=>{
    Api.get('/ping').then(res=>{
      console.log(res)
    })
  }
  handleClick=(v)=>{
    console.log(v)
  };
  currentKey=(k:number)=>{
    const TabBarTitleArr:string[]=['首页','分类','推荐','购物车','我的'];
    Taro.setNavigationBarTitle({title:TabBarTitleArr[k]})
    this.setState({current:k})
  };
  renderTab0=()=>{
    return (
      // @ts-ignore
      <iconfont name="iconicon_add" color="{{['red', 'orange']}}" size="16"/>
    )
  }

  renderTab1=()=>{
    return (
      <view>
        <AtButton type='primary' openType={'share'}>分享</AtButton>
        <AtButton type='secondary' openType={'getPhoneNumber'} onGetPhoneNumber={this.getPhoneNumber}>获取手机号</AtButton>
        <AtButton type='primary' onClick={this.getLocation}>获取地理位置</AtButton>
      </view>

    )
  }

  renderTab2=()=>{
    return(
      <view>
        <View style={{position:'fixed',bottom:0,right:0}} >
          <AtFab onClick={this.AtfabClick}>
            {
              // @ts-ignore
              <iconfont name="iconicon_down" color='white' size="20"/>
            }
          </AtFab>
        </View>
        <AtButton type={'secondary'} onClick={this.getRequest}>发送get请求</AtButton>

      </view>
    )
  }
  render() {
    // const Iconfont=iconfont;
    return (
      <View className='index-wrap'>
        {this.state.current===0&&<Home/>}
        {this.state.current===1&&<Classify/>}
        {this.state.current===2&&<Recommend/>}
        {this.state.current===3&&<ShopCar/>}
        {this.state.current===4&&<My/>}
        <MyTabBar current={this.state.current} onCurrentKey={this.currentKey}/>
      </View>
    )
  }
}

export default Index
