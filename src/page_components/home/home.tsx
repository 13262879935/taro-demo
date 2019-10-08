import Taro, {Component, Config} from '@tarojs/taro'
import {Input, Swiper, SwiperItem, View} from '@tarojs/components'
import { HomeProps, HomeState } from './home.interface'
import './home.less'
import {AtIcon} from "taro-ui";
import MyPicAndText from "@/components/MyPicAndText/MyPicAndText";
import {swiperMiddle} from "@/utils/swiperConfig";



class Home extends Component<HomeProps,HomeState > {
  constructor(props: HomeProps) {
    super(props);
    this.state = {
      searchValue:''
    }
  }
  config:Config = {
    "usingComponents": {
      "iconfont": "../../iconfont/iconfont"
    },


    "navigationBarBackgroundColor": "#ffffff",
    "navigationBarTextStyle": "black",
  }

  static options = {
    addGlobalClass: true
  }
  static defaultProps:HomeProps = {

  };



  changeSearch=()=>{

  };
  focusSearch=()=>{

  }


  render() {
    return (
      <View className={'fx-home-wrap'}>
        <View className={'at-row'} style={{backgroundColor:'#d81e06',color:'white',position:'fixed',top:'0',left:'0',height:'80rpx',zIndex:1}} >
          <View className='at-col at-col-1' style={{display:'flex',flexDirection:'column',alignItems:'center'}} >
            {
              // @ts-ignore
             <iconfont name="icontubiaozhizuomoban" size="20" color="white" />
            }
            <View style={{fontSize:'8px'}} >分类</View>
          </View>
          <View className='at-col at-col-10' style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
            <Input type="text" className='tj-input' placeholder={'搜索'} onInput={this.changeSearch}  onFocus={this.focusSearch} />
          </View>
          <View className='at-col at-col-1' style={{display:'flex',justifyContent:'center',alignItems:'center'}} >
            <AtIcon value='bell' size='20' color='white'/>
          </View>
        </View>
        <View className={'tj-header'}>
            <View className={'at-row tj-row'} >
              <View className={'at-col at-col-1 at-col-auto tj-flex'}>热搜</View>
              <View className={'at-col tj-flex'}>
               <View className={'tj-tag'}>显卡</View>
              </View>
              <View className={'at-col tj-flex'}>
                <View className={'tj-tag'}>老板椅</View>
              </View>
              <View className={'at-col tj-flex'}>
                <View className={'tj-tag'}>三只松鼠</View>
              </View>
              <View className={'at-col tj-flex'} >
                <View className={'tj-tag'}>显示器</View>
              </View>
            </View>
          <View className={'tj-swiperBox'}>
            <Swiper className='test-h' circular autoplay indicatorDots indicatorColor={'white'} indicatorActiveColor={'red'}>
              <SwiperItem>
                <View className={'tj-swiperItem tj-swiperItem1'}/>
              </SwiperItem>
              <SwiperItem>
                <View className={'tj-swiperItem tj-swiperItem2'}/>
              </SwiperItem>
              <SwiperItem>
                <View className={'tj-swiperItem tj-swiperItem3'}/>
              </SwiperItem>
            </Swiper>
          </View>
        </View>
        <View style={{marginTop:'20rpx'}}>
          <Swiper className='tj-swiperBox1' indicatorDots indicatorColor={'white'} indicatorActiveColor={'red'}>
            {swiperMiddle.map((v,k)=>{
              return <SwiperItem key={k}>
                <View className={'tj-swiper-view'}>
                  {v.map((value,key)=>{
                    return <MyPicAndText src={value.src} text={value.text} key={k+'-'+key}/>
                  })}
                </View>
              </SwiperItem>
            })}
          </Swiper>
        </View>
      </View>
    )
  }
}

export default Home
