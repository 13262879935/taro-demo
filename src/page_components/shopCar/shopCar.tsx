import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { ShopCarProps, ShopCarState } from './shopCar.interface'
import './shopCar.scss'

class ShopCar extends Component<ShopCarProps,ShopCarState > {
  constructor(props: ShopCarProps) {
    super(props)
    this.state = {}
  }
  static options = {
    addGlobalClass: true
  }
  static defaultProps:ShopCarProps = {}

  render() {
    return (
      <View className='fx-shopCar-wrap'>

      </View>
    )
  }
}

export default ShopCar
