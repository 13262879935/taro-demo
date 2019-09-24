
import Taro, { Component, Config } from '@tarojs/taro'
import { View } from '@tarojs/components'
// import { connect } from '@tarojs/redux'
// import Api from '../../utils/request'
// import Tips from '../../utils/tips'
import { JwProps, JwState } from './jw.interface'
import './jw.less'
// import { } from '../../components'

// @connect(({ jw }) => ({
//     jw,
// }))

class Jw extends Component<JwProps,JwState > {
  config:Config = {
    navigationBarTitleText: '标题'
  }
  constructor(props: JwProps) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    
  }

  render() {
    return (
      <View className='jw-wrap'>
          
      </View>
    )
  }
}

export default Jw
