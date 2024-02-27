/**
 * @Author xiaojiajun
 * @Date 2022-06-15 16:34:23
 * @LastEditors luoxi
 * @LastEditTime 2023-05-06 17:51:23
 * @FilePath /yp_rn_app/src/components/SiglePicker/index.tsx
 * @Name 日期时间选择器弹窗组件
 * @Description 用于进行日期时间的选择，Android和IOS统一样式，弹窗
 * @Preview https://cdn.yupaowang.com/yupao_app/component-dateTime.jpg
 */
import dayjs from 'dayjs'
import React, { useEffect, useRef, useState } from 'react'
import { Animated, Modal, Pressable, Text, View } from 'react-native'
import TouchView from '@/components/TouchView'
import { pxToDp } from '@/core/styleSheet'
import DateTime from '../DateTime'
import { showTextByObj } from '../utils'
import styles from './styles'

type Props = {
  /** 是否显示弹框 */
  show: boolean
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
export default (props: Props) => {
  const { show = false, maskClose = true, title = '选择时间', onPress, onCancel, minDate, maxDate, value } = props
  /** 组件是否展示 */
  const [visible, setVisible] = useState(false)
  /** 动画效果 */
  const fadeAnim = useRef(new Animated.Value(0)).current
  /** 当前选中的日期时间 */
  const [currentDateTime, setCurrentDateTime] = useState(dayjs().format('YYYY/MM/DD HH:mm'))
  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (show) {
      setVisible(true)
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }).start()
    } else {
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
          <View style={styles.chooseDate}>
            <Text style={styles.chooseDateText}>{showTextByObj(currentDateTime)}</Text>
          </View>
          <DateTime value={currentDateTime} minDate={minDate} maxDate={maxDate} onChange={setCurrentDateTime} />
        </Animated.View>
      </View>
    </Modal>
  )
}
