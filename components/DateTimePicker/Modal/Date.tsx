import dayjs from 'dayjs'
import React, { useEffect, useRef, useState } from 'react'
import { Animated, Modal, Pressable, Text, View } from 'react-native'
import DateTime from '../Date'
import styles from './styles'

import { pxToDp } from '@/core/styleSheet'
import TouchView from '@/components/TouchView'

export interface PropsType {
  /** 是否显示弹框 */
  show?: boolean
  /** 蒙层是否默认点击关闭 */
  maskClose?: boolean
  /** 标题 */
  title?: string
  /** 当前选中时间 */
  value?: string
  /** 最小日期 */
  minDate?: string
  /** 最大日期 */
  maxDate?: string
  /** 点击事件 */
  onPress?: (item: any) => void
  /** 点击取消事件 */
  onCancel?: () => void
}
function DateTimePickerModal(props: PropsType) {
  const { show = false, maskClose = true, title = '选择时间', onPress, onCancel, minDate, maxDate, value } = props
  /** 组件是否展示 */
  const [visible, setVisible] = useState(false)
  /** 动画效果 */
  const fadeAnim = useRef(new Animated.Value(0)).current
  /** 当前选中的日期时间 */
  const [currentDateTime, setCurrentDateTime] = useState(dayjs().format('YYYY/MM/DD'))

  useEffect(() => {
    if (show) {
      setVisible(true)
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }).start()
    }
    else {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }).start()
      const timer = setTimeout(() => {
        setVisible(false)
      }, 200)
      return () => {
        clearTimeout(timer)
      }
    }
  }, [show])

  const onCancelPress = () => {
    onCancel && onCancel()
  }

  const onConfirmPress = () => {
    onPress && onPress(currentDateTime)
  }

  useEffect(() => {
    value && setCurrentDateTime(value)
  }, [value])

  return (
    <Modal visible={visible} transparent>
      <View>
        <Pressable style={styles.mask} onPress={maskClose ? onCancelPress : null} />
        <Animated.View
          style={[
            styles.body,
            {
              transform: [
                {
                  translateY: fadeAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: [pxToDp(734), 0],
                  }),
                },
              ],
            },
          ]}
        >
          <View style={styles.header}>
            <TouchView onPress={onCancelPress}>
              <Text style={styles.cancel}>取消</Text>
            </TouchView>
            <View style={styles.title}>
              <Text style={styles.titleText}>{title}</Text>
            </View>
            <TouchView onPress={onConfirmPress}>
              <Text style={styles.confirm}>确定</Text>
            </TouchView>
          </View>
          <DateTime
            value={currentDateTime}
            minDate={minDate}
            maxDate={maxDate}
            onChange={(date) => {
              setCurrentDateTime(dayjs(date).format('YYYY/MM/DD'))
            }}
          />
        </Animated.View>
      </View>
    </Modal>
  )
}

export default DateTimePickerModal
