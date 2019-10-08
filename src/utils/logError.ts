import Taro from '@tarojs/taro'
// @ts-ignore
import moment from 'moment'



export const logError = (name:string, action:string, info:any='empty') => {
  let device;
  try {
    let deviceInfo = Taro.getSystemInfoSync() ;
     device = JSON.stringify(deviceInfo)
  } catch (err) {
    console.error('not support getSystemInfoSync api', err.message)
  }
  let time = moment().format('YYYY-MM-DD');
  Taro.showToast({title:'时间:'+time+'状态码:'+name+'原因:'+action+'信息:'+info+'参数:'+device})
};
