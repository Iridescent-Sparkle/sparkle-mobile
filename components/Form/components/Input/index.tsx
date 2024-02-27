import React, { useEffect, useRef } from 'react'
import type { TextInputProps } from 'react-native'
import { Keyboard, TextInput } from 'react-native'
import type { FormItemChildrenProps } from '../../index'
import styles from './styles'
import { isAndroid } from '@/core/tools/validator'
import { c } from '@/core/styleSheet'

type Props = FormItemChildrenProps & TextInputProps & {
  /** 是否禁用 */
  disabled?: boolean
  /** 占位样式颜色 */
  placeholderColor?: string
  // 自定义正则过滤
  pattern?: RegExp
  // 埋点
  trackerCallBack?: () => void
}

function Input({ value, placeholderColor, pattern, trackerCallBack, onChange, maxLength, keyboardType, disabled = false, ...other }: Props) {
  /** input实例 */
  const input = useRef(null)

  useEffect(() => {
    // 键盘收起的时候输入框失去焦点
    const hidden = Keyboard.addListener('keyboardDidHide', () => {
      if (isAndroid())
        input.current?.blur()
    })
    const show = Keyboard.addListener('keyboardDidShow', () => {
      trackerCallBack?.()
    })
    return () => {
      hidden?.remove()
      show?.remove()
    }
  }, [])

  const editable = !disabled

  // 输入完成进行文字长度截取
  const onChangeTextEnd = (t) => {
    let result = pattern ? t?.replace(pattern, '') : t
    if (maxLength && result?.length > maxLength)
      result = result?.slice(0, maxLength)

    onChange && onChange(result)
  }

  // 输入中不能截取，因为会计算英文字符，拼音
  const onChangeText = (t) => {
    onChange && onChange(t)
  }

  return (
    <TextInput
      underlineColorAndroid="transparent"
      placeholder="请输入"
      placeholderTextColor={placeholderColor || c.black25}
      {...other}
      keyboardType={keyboardType}
      maxLength={keyboardType == 'number-pad' ? (maxLength || 11) : undefined}
      style={[styles.input, { color: editable ? c.black : c.black45 }, other.style]}
      ref={input}
      value={value}
      editable={editable}
      onChangeText={onChangeText}
      onEndEditing={(e) => {
        onChangeTextEnd(e.nativeEvent.text)
      }}
    />
  )
}

export default Input
