import Taro, { Component } from '@tarojs/taro'
import { MyTabBarProps, MyTabBarState } from './MyTabBar.interface'
import './MyTabBar.scss'
import {AtTabBar} from "taro-ui";
import JD from '../../assets/iconPng/京东.png'
import JD1 from '../../assets/iconPng/京东1.png'
import Classify from '../../assets/iconPng/分类.png'
import Classify1 from '../../assets/iconPng/分类1.png'
import My from '../../assets/iconPng/我的.png'
import My1 from '../../assets/iconPng/我的1.png'
import Recommend from '../../assets/iconPng/推荐服务.png'
import Recommend1 from '../../assets/iconPng/推荐服务1.png'
import ShopCar from '../../assets/iconPng/购物车.png'
import ShopCar1 from '../../assets/iconPng/购物车1.png'

class MyTabBar extends Component<MyTabBarProps,MyTabBarState > {
  constructor(props: MyTabBarProps) {
    super(props)
    this.state = {}
  }
  static options = {
    addGlobalClass: true
  }
  static defaultProps:MyTabBarProps = {
    current:0,
    onCurrentKey:()=>{}
  }

  handleClick=(k:number)=>{
    this.props.onCurrentKey(k)
  }
  render() {
    return (
      <AtTabBar
        fixed={true}
        color={'#333333'}
        selectedColor={'#d81e06'}
        tabList={[
          { title: '首页',
            image: JD,
            selectedImage:JD1,
            // text: 'new',
          },
          { title: '分类',
            image: Classify,
            selectedImage:Classify1,
            max: 99,
            text:'1',
          },
          { title: '推荐',
            image: Recommend,
            selectedImage:Recommend1,
            max: 99,
            text:'10',
          },
          { title: '购物车',
            image: ShopCar,
            selectedImage:ShopCar1,
            max: 99,
            text:'5',
          },
          { title: '我的',
            image: My,
            selectedImage:My1,
            max: 99
          },
        ]}
        onClick={this.handleClick}
        current={this.props.current}
      />
    )
  }
}

export default MyTabBar
