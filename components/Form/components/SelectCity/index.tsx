import React from 'react'
import { Pressable, Text } from 'react-native'
import styles from './styles'
import { pxToDp } from '@/core/styleSheet'

type Props = FormItemChildrenProps<{
  address?: string
  provinceId?: string
  cityId?: string
  areaId?: string
  detail?: string
  lat?: string
  lng?: string
}> & {
  // 占位符
  placeholder?: string
}

function Index(props: Props) {
  // 参数获取
  const { placeholder = '请选择地址', value = {}, onChange } = props
  /** 打开城市选择器 */
  const onPress = async () => {
    // const res = await native.goAddressSelect({
    //   address: value.address || '',
    //   provinceId: value.provinceId || '',
    //   cityId: value.cityId || '',
    //   areaId: value.areaId || '',
    //   detail: value.detail || '',
    //   lat: value.lat || '',
    //   lng: value.lng || '',
    //   source: '',
    // })
    // onChange(res)
  }
  return (
    <Pressable onPress={onPress} style={styles.container}>
      {value.detail
        ? (
          <Text style={styles.value}>{value.detail}</Text>
          )
        : (
          <Text style={styles.placeholder}>{placeholder}</Text>
          )}
      {/* <YpIcAllowRightOffset color="#8c8c8c" size={pxToDp(32)} /> */}
    </Pressable>
  )
}

export default Index
