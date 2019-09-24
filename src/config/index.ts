/**
 * 线上环境
 * 为了方便测试，使用的是聚合数据免费接口
 * 网址：https://www.juhe.cn/
 */
export const ONLINEHOST = 'http://192.168.6.125:8080';

/**
 * 测试环境
 */
export const QAHOST = 'http://xxx.cn';

/**
 * 线上mock
 */
export const MOCKHOST = 'http://xxx/mock';

/**
 * 是否mock
 */
export const ISMOCK = false

/**
 * 当前的host  ONLINEHOST | QAHOST | MOCKHOST
 */
export const MAINHOST = ONLINEHOST;

/**
 * 全局的分享信息 不用每一个都去写
 */
export const SHAREINFO=(title:string) => {
  return{
    'title': title,
    'path': 'pages/index/index',
    'imageUrl': 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3837896923,2902945184&fm=26&gp=0.jpg'
  }
};
