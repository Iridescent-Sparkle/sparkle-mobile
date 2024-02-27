import React from 'react'
import type { StyleProp, TextStyle, ViewStyle } from 'react-native'
import { ActivityIndicator, Text, View } from 'react-native'
import Visible from '../Visible'
import TouchView from '../PressView'
import { c, create, pxToDp } from '@/core/styleSheet'

interface Props {
  /** 标题 */
  title?: string
  /** 点击事件 */
  onPress?: () => void
  /** 按钮类型 */
  type?: 'primary' | 'default' | 'white' | 'empty'
  /** 按钮样式 */
  style?: StyleProp<ViewStyle>
  /** loading状态 */
  loading?: boolean
  /** 文字样式 */
  textStyle?: StyleProp<TextStyle>
  /** 子元素 */
  children?: React.ReactNode
  /** 是否禁用 */
  disable?: boolean
}

const styles = create({
  primary: {
    backgroundColor: c.primary,
    borderColor: c.primary,
    borderWidth: 1,
    borderRadius: 12,
    height: 80,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  default: {
    backgroundColor: '#fff',
    borderColor: c.primary,
    borderWidth: 1,
    borderRadius: 12,
    height: 80,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  white: {
    backgroundColor: c.white,
    borderColor: c.white,
    borderWidth: 1,
    borderRadius: 12,
    height: 80,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  empty: {
    borderColor: c.primary,
    borderWidth: 1,
    borderRadius: 12,
    height: 80,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textprimary: {
    fontSize: 32,
    color: c.white,
    lineHeight: 80,
  },
  textdefault: {
    fontSize: 32,
    color: c.primary,
    lineHeight: 76,
  },
  textwhite: {
    fontSize: 32,
    color: c.black85,
    lineHeight: 76,
  },
  textempty: {
    fontSize: 32,
    color: c.primary,
    lineHeight: 76,
  },
  childrenWrap: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
})

function Button(props: Props) {
  const {
    title,
    onPress,
    type = 'default',
    style,
    loading,
    textStyle,
    children,
    disable = false,
  } = props

  /** 点击事件统一处理 */
  const onPressFn = () => {
    if (onPress)
      onPress()
  }
  if (disable) {
    return (
      <View style={[styles[type], style, { opacity: 0.5 }]}>
        <Visible visible={loading}>
          <ActivityIndicator color="#fff" size={pxToDp(48)} />
        </Visible>
        <Visible visible={!loading}>
          {children
            ? (
              <View style={styles.childrenWrap}>{children}</View>
              )
            : (
              <Text style={[styles[`text${type}`], textStyle]}>{title}</Text>
              )}
        </Visible>
      </View>
    )
  }
  return (
    <TouchView onPress={loading ? undefined : onPressFn} style={[styles[type], style]} activeOpacity={0.7}>
      <Visible visible={loading}>
        <ActivityIndicator color="#fff" size={pxToDp(48)} />
      </Visible>
      <Visible visible={!loading}>
        {children
          ? (
            <View style={styles.childrenWrap}>{children}</View>
            )
          : (
            <Text style={[styles[`text${type}`], textStyle]}>{title}</Text>
            )}
      </Visible>
    </TouchView>
  )
}

export default Button
