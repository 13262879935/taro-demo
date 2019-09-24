import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { RecommendProps, RecommendState } from './recommend.interface'
import './recommend.scss'

class Recommend extends Component<RecommendProps,RecommendState > {
  constructor(props: RecommendProps) {
    super(props)
    this.state = {}
  }
  static options = {
    addGlobalClass: true
  }
  static defaultProps:RecommendProps = {}

  render() {
    return (
      <View className='fx-recommend-wrap'>

      </View>
    )
  }
}

export default Recommend
