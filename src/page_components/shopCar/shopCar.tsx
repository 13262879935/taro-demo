import Taro, { Component } from '@tarojs/taro'
import { View,Image } from '@tarojs/components'
import { ShopCarProps, ShopCarState } from './shopCar.interface'
import './shopCar.scss'
import {AtButton, AtForm, AtInput} from "taro-ui";

class ShopCar extends Component<ShopCarProps,ShopCarState > {
  constructor(props: ShopCarProps) {
    super(props)
    this.state = {
      firstName:'',
      value2:2,
      value3:'',
      value4:'',
      value5:'',
      value6:'',
      value7:'',
      value8:'',
      value9:'',
      value10:'',
      value11:'',
    }
  }
  static options = {
    addGlobalClass: true
  }
  static defaultProps:ShopCarProps = {}


  handleChange=(v:string)=>{
    this.setState({firstName:v})
    // 在小程序中，如果想改变 v 的值，需要 `return v` 从而改变输入框的当前值
    return v
  }
  handleChangeValue10=(v:string|number)=>{
    this.setState({value10:v})
    return v
  }
  handleClick=(v)=>{
    console.log(v)
  }

  onSubmit=(event)=>{
    console.log(event)

    Taro.addPhoneContact({firstName:'tangjie'}).then(res=>{
      console.log(res)
    }).catch(err=>{
      console.log(err)
    })
  }

  onReset =(event)=> {
    console.log(event)
  }

  render() {
    return (
      <View className='fx-shopCar-wrap'>
        <AtForm
        onSubmit={this.onSubmit}
        onReset={this.onReset}
        >
          <AtInput
            name='value'
            title='名字'
            type='text'
            placeholder='名字'
            value={this.state.firstName}
            onChange={this.handleChange}
          />
          <AtInput
            name='value2'
            title='数字'
            type='number'
            placeholder='请输入数字'
            value={this.state.value2}
            onChange={this.handleChange.bind(this)}
          />
          <AtInput
            name='value3'
            title='密码'
            type='password'
            placeholder='密码不能少于10位数'
            value={this.state.value3}
            onChange={this.handleChange.bind(this)}
          />
          <AtInput
            name='value4'
            title='身份证'
            type='idcard'
            placeholder='身份证号码'
            value={this.state.value4}
            onChange={this.handleChange.bind(this)}
          />
          <AtInput
            name='value5'
            title='小数'
            type='digit'
            placeholder='请输入小数'
            value={this.state.value5}
            onChange={this.handleChange.bind(this)}
          />
          <AtInput
            name='value6'
            border={false}
            title='手机号码'
            type='phone'
            placeholder='手机号码'
            value={this.state.value6}
            onChange={this.handleChange.bind(this)}
          />
          <AtInput
            name='value7'
            disabled
            title='禁用'
            type='text'
            placeholder='禁止输入'
            value={this.state.value7}
            onChange={this.handleChange.bind(this)}
          />
          <AtInput
            name='value8'
            error
            title='出现错误'
            type='text'
            placeholder='点击按钮触发回调'
            value={this.state.value8}
            onChange={this.handleChange}
            onErrorClick={this.handleClick.bind(this)}
          />
          <AtInput
            name='value9'
            editable={false}
            title='不可编辑'
            type='text'
            placeholder='不可编辑'
            value={this.state.value9}
            onChange={this.handleChange.bind(this)}
          />
          <AtInput
            name='value10'
            clear={true}
            border={false}
            title='清除按钮'
            placeholder='点击清除按钮清空内容'
            type='text'
            value={this.state.value10}
            onChange={this.handleChangeValue10}
          />
          <AtInput
            name='value10'
            clear
            title='验证码'
            type='text'
            maxLength='4'
            placeholder='验证码'
            value={this.state.value11}
            onChange={this.handleChange.bind(this)}
          >
            <Image src='https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2854956166,1658664264&fm=26&gp=0.jpg' />
          </AtInput>

          <AtButton formType='submit'  type={'primary'}>提交</AtButton>
          <AtButton formType='reset'>重置</AtButton>
        </AtForm>


      </View>
    );


  }
}

export default ShopCar
