// @ts-ignore
import moment from 'moment';

/** 时间格式的转换 */
export const formatTime = (time:any='') => {
    moment(time).format('YYYY-MM-DD')
}

export var globalData: any = {} // 全局公共变量
