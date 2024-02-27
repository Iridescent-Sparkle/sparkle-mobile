import React from 'react'
import { Pressable, Text, View } from 'react-native'
import styles from './styles'

interface Item {
  label: any
  value: any
}

type Props = FormItemChildrenProps & {
  options?: Item[]
}

function Index(props: Props) {
  const { options, value, onChange } = props
  return (
    <View style={styles.body}>
      {options.map((item) => {
        return (
          <Pressable key={item.value} onPress={() => onChange(item.value)} style={[styles.item, value == item.value ? styles.active : null]}>
            <Text style={[styles.text, value == item.value ? styles.activeText : null]}>{item.label}</Text>
          </Pressable>
        )
      })}
    </View>
  )
}

export default Index
