
/**
 * MyTabBar.state 参数类型
 *
 * @export
 * @interface MyTabBarState
 */
export interface MyTabBarState {}

/**
 * MyTabBar.props 参数类型
 *
 * @export
 * @interface MyTabBarProps
 */
export interface MyTabBarProps {
  current:number
  onCurrentKey:(key:number)=>any
}
