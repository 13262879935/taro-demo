import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { MyProps, MyState } from './my.interface'
import './my.scss'
import {AtButton, AtFab} from "taro-ui";
import Api from "@/utils/request";
import Tips from "@/utils/tips";

class My extends Component<MyProps,MyState > {n
  private animation: Taro.Animation;
  constructor(props: MyProps) {
    super(props)
    this.state = {
      animation: [{}]
    }
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
      if (res.status){
        Tips.success(JSON.stringify(res.data))
      }
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

  componentDidMount(): void {
    this.animation = Taro.createAnimation({
      duration:600,
      timingFunction:'liner',
      delay:500,
      transformOrigin:'50% 50% 0'
    })
    Taro.getFileInfo({
      filePath:'',
    })

  }
  rotateView=()=>{
    this.animation.rotate(360).scale(2).step({})
    this.setState({
      animation: this.animation.export()   //输出动画
    })
  }
  rotateReverseView=()=>{
    this.animation.rotate(0).scale(1).step({})
    this.setState({
      animation: this.animation.export()   //输出动画
    })
  }
  render() {
    return (
      <View className='fx-my-wrap'>
        {this.renderTab2()}
        <AtButton type={'primary'} onClick={this.addCount}>{this.props.index.testCount}</AtButton>
        <View style={{textAlign:'center'}} animation={this.state.animation}>我要做动画</View>
        <AtButton onClick={this.rotateView}>点击旋转(一次)</AtButton>
        <AtButton loading={true} onClick={this.rotateReverseView}>点击还原(一次)</AtButton>
      </View>
    )
  }
}

export default My
