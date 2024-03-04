import { Card } from '@fruits-chain/react-native-xiaoshu'
import React from 'react'
import { Text } from 'react-native'
import { create, s } from '@/core/styleSheet'

function JobCard() {
  return (
    <Card style={styles.container}>
      <Text>卡片无标题</Text>
      <Text>Card content</Text>
      <Text>Card content</Text>
      <Text>Card content</Text>
    </Card>
  )
}

const styles = create({
  container: {
    width: '100%',
    height: 300,
  },
})

export default JobCard
