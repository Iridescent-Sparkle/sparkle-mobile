import React from 'react'
import { ActivityIndicator, StyleProp, Text, TextStyle, View, ViewStyle } from 'react-native'
import { c, create, pxToDp } from '@/core/styleSheet'
import Visible from '../Visible'
import TouchView from '../PressView'

type Props = {
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
  /** 用于埋点的 btnName */
  btnName?: string
}

const styles = create({
  primary: {
    backgroundColor: c.primary,
    borderColor: c.primary,
    borderWidth: 1,
    borderRadius: 8,
    height: 80,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  default: {
    backgroundColor: '#fff',
    borderColor: c.primary,
    borderWidth: 1,
    borderRadius: 8,
    height: 80,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  white: {
    backgroundColor: c.white,
    borderColor: c.white,
    borderWidth: 1,
    borderRadius: 8,
    height: 80,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  empty: {
    borderColor: c.primary,
    borderWidth: 1,
    borderRadius: 8,
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

const Index = (props: Props) => {
  const {
    title,
    onPress,
    type = 'default',
    style,
    loading,
    textStyle,
    children,
    disable = false,
    btnName,
  } = props

  /** 点击事件统一处理 */
  const onPressFn = () => {
    if (onPress) {
      onPress()
    }
  }
  if (disable) {
    return (
      <View style={[styles[type], style, { opacity: 0.5 }]}>
        <Visible visible={loading}>
          <ActivityIndicator color="#fff" size={pxToDp(48)} />
        </Visible>
        <Visible visible={!loading}>
          {children ? (
            <View style={styles.childrenWrap}>{children}</View>
          ) : (
            <Text style={[styles[`text${type}`], textStyle]}>{title}</Text>
          )}
        </Visible>
      </View>
    )
  }
  return (
    <TouchView onPress={loading ? undefined : onPressFn} style={[styles[type], style]} activeOpacity={0.7} btnName={btnName}>
      <Visible visible={loading}>
        <ActivityIndicator color="#fff" size={pxToDp(48)} />
      </Visible>
      <Visible visible={!loading}>
        {children ? (
          <View style={styles.childrenWrap}>{children}</View>
        ) : (
          <Text style={[styles[`text${type}`], textStyle]}>{title}</Text>
        )}
      </Visible>
    </TouchView>
  )
}

export default Index
