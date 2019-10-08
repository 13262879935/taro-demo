import Taro, { Component } from '@tarojs/taro'
import { View ,Canvas} from '@tarojs/components'
import { ClassifyProps, ClassifyState } from './classify.interface'
import './classify.scss'

class Classify extends Component<ClassifyProps,ClassifyState > {
  constructor(props: ClassifyProps) {
    super(props)
    this.state = {
      screenWidth:0,
      screenHeight:0,
    }
  }
  static options = {
    addGlobalClass: true
  }
  static defaultProps:ClassifyProps = {}


  componentDidMount(): void {
    Taro.getSystemInfo({
      success: (res)=> {
        this.setState({
          screenWidth: res.screenWidth,
          screenHeight: res.screenHeight
        })
      }
    })
    const _this=this
    const ctx=Taro.createCanvasContext('myCanvas',_this.$scope);
    console.log(this,this.$scope)
    ctx.setFillStyle('red');
    ctx.fillRect(10, 10, 150, 100)
    ctx.draw()
    // ctx.fillRect(50, 50, 150, 100)
    // ctx.draw(true)
  }

  render() {
    console.log(this.state)
    return (
      <View className='fx-classify-wrap'>
        <Canvas  disableScroll={true}  canvasId={'myCanvas'}/>
      </View>
    )
  }
}

export default Classify
