import { Feather } from '@expo/vector-icons'
import React from 'react'
import { Text, View } from 'react-native'
import { Image } from 'expo-image'
import { Space } from '@fruits-chain/react-native-xiaoshu'
import { create } from '@/core/styleSheet'
import { IMAGE_PREFIX } from '@/constants'

function UserCard() {
  return (
    <View style={styles.container}>
      <Space direction="horizontal">
        <Image style={styles.avatar} source={`${IMAGE_PREFIX}/stars.png`}></Image>
        <View>
          <Text style={styles.tip}>早上好</Text>
          <Text style={styles.name}>Andrew</Text>
        </View>
      </Space>
      <View style={styles.button}>
        <Feather name="bell" size={24} color="black" />
      </View>
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
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  tip: {
    fontSize: 30,
    color: '#898989',
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

export default UserCard
