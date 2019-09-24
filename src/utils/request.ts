import Taro from '@tarojs/taro'
import { HTTP_STATUS } from './HttpStatus'
import { MAINHOST } from '../config'
import { logError } from './logError'

const token = ''

type requestMethod="GET" | "OPTIONS" | "HEAD" | "POST" | "PUT" | "DELETE" | "TRACE" | "CONNECT" | undefined;
type Datas = {[key: string]: any }

interface ParamsType {
  url:string,
  data:Datas|string
  contentType?:string
}
const baseOptions=(params:ParamsType, method:requestMethod = 'GET')=> {
  let { url, data } = params;
  // let token = getApp().globalData.token
  // if (!token) login()
  let contentType = 'application/x-www-form-urlencoded'
  contentType = params.contentType || contentType;
  const option = {
    // isShowLoading: false,
    // loadingText: '正在加载',
    url: MAINHOST + url,
    data: data,
    method: method,
    header: { 'content-type': contentType, 'token': token },
    success(res) {
      if (res.statusCode === HTTP_STATUS.NOT_FOUND) {
        return logError('api', '请求资源不存在')
      } else if (res.statusCode === HTTP_STATUS.BAD_GATEWAY) {
        return logError('api', '服务端出现了问题')
      } else if (res.statusCode === HTTP_STATUS.FORBIDDEN) {
        return logError('api', '没有权限访问')
      } else if (res.statusCode === HTTP_STATUS.SUCCESS) {
        return res.data
      }
    },
    error(e) {
      logError('api', '请求接口出现问题', e)
    }
  }
  return Taro.request(option)
};




export default {
  get(url:string, data = '') {
    let option:ParamsType = { url, data }
    return baseOptions(option)
  },
  post: function (url, data, contentType) {
    let params:ParamsType = { url, data, contentType }
    return baseOptions(params, 'POST')
  }
}
