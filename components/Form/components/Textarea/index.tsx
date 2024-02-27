import React from 'react'
import type { TextInputProps } from 'react-native'
import { Text, TextInput, View } from 'react-native'
import styles from './styles'
import Visible from '@/components/Visible'
import { c } from '@/core/styleSheet'
import TouchView from '@/components/TouchView'

type Props = TextInputProps &
  Partial<{
    /** 是否显示底部操作 */
    showFooter: boolean
    onChange?: (value) => void
  }>

function Index(props: Props) {
  const { value = '', maxLength = 1000, onChange, showFooter = true, ...other } = props
  return (
    <View style={styles.body}>
      <TextInput
        underlineColorAndroid="transparent"
        placeholder="请输入"
        multiline
        maxLength={maxLength}
        numberOfLines={1000}
        {...other}
        style={[styles.input, other.style]}
        placeholderTextColor={c.placeholder}
        value={value}
        onChangeText={onChange as any}
      />
      <Visible visible={showFooter}>
        <View style={styles.footer}>
          <View>
            <TouchView onPress={() => onChange('')}>
              <Text style={styles.clear}>清空内容</Text>
            </TouchView>
          </View>
          <View>
            <Text style={styles.length}>
              {value.length}
              {' '}
              / 500
            </Text>
          </View>
        </View>
      </Visible>
    </View>
  )
}

export default Index
