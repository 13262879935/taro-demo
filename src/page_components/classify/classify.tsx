import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { ClassifyProps, ClassifyState } from './classify.interface'
import './classify.scss'

class Classify extends Component<ClassifyProps,ClassifyState > {
  constructor(props: ClassifyProps) {
    super(props)
    this.state = {}
  }
  static options = {
    addGlobalClass: true
  }
  static defaultProps:ClassifyProps = {}

  render() {
    return (
      <View className='fx-classify-wrap'>

      </View>
    )
  }
}

export default Classify
