import React from 'react'
import { Pressable, Text, View } from 'react-native'
import styles from './styles'
import { c, pxToDp } from '@/core/styleSheet'

/// 性别配置信息，如：{value: 1 label: 男}
interface Item {
  label: any
  value: any
}

type Props = FormItemChildrenProps & Partial<{
  /// 性别配置信息
  options: Item[]
  /// 是否禁止选择
  forbid: boolean
  /// 只有当禁止选择时候才有效
  showText: string
}>

const size = pxToDp(40)

function Index(props: Props) {
  const { value, onChange, options = [], forbid, showText } = props
  return (
    <View>
      {
        forbid
          ? (<Text style={styles.forbidText}>{showText}</Text>)
          : (
            <View style={styles.body}>
              {options.map((item) => {
                return (
                  <Pressable key={item.value} onPress={() => onChange(item.value)}>
                    <View style={styles.item}>
                      {/* {value == item.value
                        ? (
                          <YpIconPayY color={[c.primary, '#fff']} size={size} />
                          )
                        : (
                          <YpIconPayN color={['#ddd', '#fff']} size={size} />
                          )} */}
                      <Text style={styles.text}>{item.label}</Text>
                    </View>
                  </Pressable>
                )
              })}
            </View>
            )
      }
    </View>
  )
}

export default Index
