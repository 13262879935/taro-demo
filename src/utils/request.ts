import Taro, {request} from '@tarojs/taro'
import { HTTP_STATUS } from './HttpStatus'
import { MAINHOST } from '../config'
import { logError } from './logError'
import {BasicResponse} from "../types/BasicResponse";
import Tips from "@/utils/tips";



const token = ''

type requestMethod="GET" | "OPTIONS" | "HEAD" | "POST" | "PUT" | "DELETE" | "TRACE" | "CONNECT" | undefined;
type Datas = {[key: string]: any }

interface ParamsType {
  url:string,
  data:Datas|string
  contentType?:string
}
async function checkStatus(response:request.Promised<any>):Promise<any>{
  console.log(111)
  if (response.statusCode >= HTTP_STATUS.SUCCESS && response.statusCode < HTTP_STATUS.SUCCESSEND) {
    console.log(response);
    return response.data;
  }
  // @ts-ignore
  Tips.toast('网络请求状态码出错:' + String(response.statusCode));
  // notification['error']({
  //   message: '数据获取出错',
  //   description: "错误状态码:" + error.name,
  //   duration: 3,
  // });
}

async function checkDataStatus(response:BasicResponse):Promise<BasicResponse> {
  if (response.status){
  } else {
    Tips.toast(response.message)
  }
  return response
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
    fail(e) {
      console.log(e);
      logError('api', '请求接口出现问题', e)
    }
  }
  return Taro.request(option).then(checkStatus).then(checkDataStatus)
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
