/**
 * pages页面快速生成脚本
 * 用法：npm run tep `文件名`
 */

const fs = require('fs');


const dirName = process.argv[2];
const capPirName = dirName.substring(0, 1).toUpperCase() + dirName.substring(1);
if (!dirName) {
  console.log('文件夹名称不能为空！');
  console.log('示例：npm run tep test');
  process.exit(0);
}

//页面模板
const indexTep = `
import Taro, { Component, Config } from '@tarojs/taro'
import { View } from '@tarojs/components'
// import { connect } from '@tarojs/redux'
// import Api from '../../utils/request'
// import Tips from '../../utils/tips'
import { ${capPirName}Props, ${capPirName}State } from './${dirName}.interface'
import './${dirName}.less'
// import { } from '../../components'

// @connect(({ ${dirName} }) => ({
//     ${dirName},
// }))

class ${capPirName} extends Component<${capPirName}Props,${capPirName}State > {
  config:Config = {
    navigationBarTitleText: '标题'
  }
  constructor(props: ${capPirName}Props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    
  }

  render() {
    return (
      <View className='${dirName}-wrap'>
          
      </View>
    )
  }
}

export default ${capPirName}
`

// less文件模版
const lessTep = `
.${dirName}-wrap {
    width: 100%;
    min-height: 100vh;
}
`


// 接口请求模板
const serviceTep = `
// import {Api} from '../../utils/request'
`

//model模板

const modelTep = `
// import Taro from '@tarojs/taro';

export default {
  namespace: '${dirName}',
  state: {
  },


  reducers: {},
  
  effects: {}

}
`

const interfaceTep = `
/**
 * ${dirName}.state 参数类型
 *
 * @export
 * @interface ${capPirName}State
 */
export interface ${capPirName}State {}

/**
 * ${dirName}.props 参数类型
 *
 * @export
 * @interface ${capPirName}Props
 */
export interface ${capPirName}Props {}
`

fs.mkdirSync(`./src/pages/${dirName}`); // mkdir $1
process.chdir(`./src/pages/${dirName}`); // cd $1

fs.writeFileSync(`${dirName}.tsx`, indexTep); //tsx
fs.writeFileSync(`${dirName}.less`, lessTep); // less
fs.writeFileSync('service.ts', serviceTep); // service
fs.writeFileSync('model.ts', modelTep); // model
fs.writeFileSync(`${dirName}.interface.ts`, interfaceTep); // interface
process.exit(0);
