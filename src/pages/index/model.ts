
// import Taro from '@tarojs/taro';
export interface indexStoreState {
  testCount:number
}

export default {
  namespace: 'index',
  state: {
    testCount:0
  },

  reducers: {
    'addCount'(state:indexStoreState){
      return {...state,testCount:state.testCount+1}
    },
    'resetCount'(state:indexStoreState){
      return {...state,testCount:0}
    }
  },

  effects: {

  },

}
