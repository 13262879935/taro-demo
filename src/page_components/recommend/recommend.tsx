import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { RecommendProps, RecommendState } from './recommend.interface'
import './recommend.scss'
import {AtButton} from "taro-ui";

class Recommend extends Component<RecommendProps,RecommendState > {
  constructor(props: RecommendProps) {
    super(props)
    this.state = {}
  }
  static options = {
    addGlobalClass: true
  }
  static defaultProps:RecommendProps = {}
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
  renderTab1=()=>{
    return (
      <view>
        <AtButton type='primary' openType={'share'}>分享</AtButton>
        <AtButton type='secondary' openType={'getPhoneNumber'} onGetPhoneNumber={this.getPhoneNumber}>获取手机号</AtButton>
        <AtButton type='primary' onClick={this.getLocation}>获取地理位置</AtButton>
      </view>

    )
  }
  render() {
    return (
      <View className='fx-recommend-wrap'>
        {this.renderTab1()}
      </View>
    )
  }
}

export default Recommend
