import React from 'react'
import type { TextInputProps } from 'react-native'
import { TextInput } from 'react-native'
import styles from './styles'
import { c } from '@/core/styleSheet'

type Props = FormItemChildrenProps & TextInputProps

function Index({ value, onChange, ...other }: Props) {
  return (
    <TextInput
      underlineColorAndroid="transparent"
      placeholder="请输入"
      placeholderTextColor={c.black25}
      {...other}
      style={[styles.input, other.style]}
      value={value}
      onChangeText={onChange as any}
    />
  )
}

export default Index
