import useClick from '@/core/hooks/useClick'
import React from 'react'
import { Pressable, PressableProps } from 'react-native'

/** 可点击的容器，支持节流 */
type Props = PressableProps & {
  ref?: any,
  /** 节流时间间隔 */
  throttle?: number
  /** onPress事件 */
  onPress?: () => any
  /** 当前按钮埋点名 */
  btnName?: string
}
export default React.forwardRef((props: Props, ref) => {
  const { throttle = 500, onPress = () => { }, btnName, ...viewProps } = props

  const handlePressFn = useClick(() => {
    onPress()
  }, throttle)

  return <Pressable ref={ref} {...viewProps} onPress={handlePressFn} />
})
