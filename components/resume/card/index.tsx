import { Card, Space } from '@fruits-chain/react-native-xiaoshu'
import React from 'react'
import { Text } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { Image } from 'expo-image'
import { create } from '@/core/styleSheet'
import { IMAGE_PREFIX } from '@/constants'

function JobCard() {
  return (
    <Card style={styles.container}>
      <Space direction="horizontal">
        <Space direction="horizontal">
          <Image style={styles.logo} source={`${IMAGE_PREFIX}/logo.png}`}></Image>
          <Space>
            <Text>UI/UX</Text>
            <Text>Google</Text>
          </Space>
        </Space>
        <Feather name="bookmark" size={24} color="black" />
      </Space>
    </Card>
  )
}

const styles = create({
  container: {
    width: '100%',
    height: 300,
    padding: 32,
    marginTop: 32,
    borderColor: '#F0F1F1',
    borderWidth: 4,
    borderRadius: 32,
  },
  logo: {

  },
})

export default JobCard
