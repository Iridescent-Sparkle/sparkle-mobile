import { Space } from '@fruits-chain/react-native-xiaoshu'
import { Image } from 'expo-image'
import React from 'react'
import { Text, View } from 'react-native'
import { create } from '@/core/styleSheet'
import { IMAGE_PREFIX } from '@/constants'

function RecruitListHeader() {
  return (
    <View style={styles.container}>
      <Space direction="horizontal">
        <Image style={styles.logo} source={`${IMAGE_PREFIX}/stars.png`}></Image>
        <Text style={styles.title}>收藏的工作</Text>
      </Space>
      {/* <View style={styles.button}>
        <Feather name="bell" size={pxToDp(48)} color="black" />
      </View> */}
    </View>
  )
}

const styles = create({
  container: {
    flexDirection: 'row',
    height: 164,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  title: {
    height: 80,
    lineHeight: 80,
    fontSize: 42,
    fontWeight: '700',
    color: '#212121',
  },
  name: {
    fontSize: 36,
    fontWeight: '700',
    color: '#21201F',
  },
  button: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 4,
    borderColor: '#F5F5F5',
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default RecruitListHeader
