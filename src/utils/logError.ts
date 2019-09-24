import Taro from '@tarojs/taro'
// @ts-ignore
import moment from 'moment'

import Tips from './tips'

export const logError = (name:string, action:string, info:any='empty') => {
  let device;
  try {
    let deviceInfo = Taro.getSystemInfoSync() ;
     device = JSON.stringify(deviceInfo)
  } catch (err) {
    console.error('not support getSystemInfoSync api', err.message)
  }
  let time = moment().format('YYYY-MM-DD');
  Tips.toast('时间:'+time+'状态码:'+name+'原因:'+action+'信息:'+info+'建议:'+device)
};
