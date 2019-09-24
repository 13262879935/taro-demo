/**
 * index.state 参数类型
 *
 * @export
 * @interface IndexState
 */
import {indexStoreState} from "./model";

export interface IndexState {
  current:number
}


/**
 * index.props 参数类型
 *
 * @export
 * @interface IndexProps
 */
export interface IndexProps {
  index:indexStoreState
  dispatch:any
}
