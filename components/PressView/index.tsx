import useClick from '@/core/hooks/useClick'
import React from 'react'
import { TouchableOpacity, TouchableOpacityProps } from 'react-native'

/** 可点击的容器，支持防抖节流 */
type Props = TouchableOpacityProps & {
  /** 节流时间间隔 */
  throttle?: number
  /** 用于埋点的 btnName */
  btnName?: string
  /** 点击事件回调 */
  onPress?: () => void | null
}

const TouchView = React.forwardRef((props: Props, ref) => {
  const { throttle = 500, btnName, onPress, ...viewProps } = props

  const handlePressFn = useClick(() => {
    onPress && onPress()
  }, throttle)

  return <TouchableOpacity {...viewProps} onPress={handlePressFn} />
})

export default TouchView
