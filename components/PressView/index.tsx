import React from 'react'
import type { TouchableOpacityProps } from 'react-native'
import { TouchableOpacity } from 'react-native'
import useClick from '@/core/hooks/useClick'

/** 可点击的容器，支持防抖节流 */
type Props = TouchableOpacityProps & {
  /** 节流时间间隔 */
  throttle?: number
  /** 点击事件回调 */
  onPress?: () => void | null
}

function TouchView(props: Props) {
  const { throttle = 500, onPress, ...viewProps } = props

  const handlePressFn = useClick(() => {
    onPress && onPress()
  }, throttle)

  return <TouchableOpacity {...viewProps} onPress={handlePressFn} />
}

export default TouchView
