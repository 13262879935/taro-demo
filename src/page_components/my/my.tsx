import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { MyProps, MyState } from './my.interface'
import './my.scss'
import {AtButton, AtFab} from "taro-ui";
import Api from "@/utils/request";

class My extends Component<MyProps,MyState > {
  constructor(props: MyProps) {
    super(props)
    this.state = {}
  }
  static options = {
    addGlobalClass: true
  }
  static defaultProps:MyProps = {
    index:{testCount:0},
    dispatch:null
  }

  AtfabClick=(Event)=>{
    console.log(Event)
  }

  getRequest=()=>{
    Api.get('/ping').then(res=>{
      console.log(res)
    })
  }

  addCount=()=>{
    this.props.dispatch({
      type:'index/addCount'
    })
  }
  //方法中要用JSX 只能在带有render前缀的方法中
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
    return (
      <View className='fx-my-wrap'>
        {this.renderTab2()}
        <AtButton type={'primary'} onClick={this.addCount}>{this.props.index.testCount}</AtButton>
      </View>
    )
  }
}

export default My
