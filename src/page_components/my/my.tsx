import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { MyProps, MyState } from './my.interface'
import './my.scss'

class My extends Component<MyProps,MyState > {
  constructor(props: MyProps) {
    super(props)
    this.state = {}
  }
  static options = {
    addGlobalClass: true
  }
  static defaultProps:MyProps = {}

  render() {
    return (
      <View className='fx-my-wrap'>

      </View>
    )
  }
}

export default My
