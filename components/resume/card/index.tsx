import { FontAwesome } from '@expo/vector-icons'
import { Card, Space, Tag } from '@fruits-chain/react-native-xiaoshu'
import { Image } from 'expo-image'
import React from 'react'
import { Text } from 'react-native'
import { pxToDp } from '../../../core/styleSheet/index'
import { themeColor } from '@/core/styleSheet/themeColor'
import { create } from '@/core/styleSheet'
import { IMAGE_PREFIX } from '@/constants'

function RecruitJobCard() {
  return (
    <Card style={styles.container}>
      <Space direction="horizontal" style={styles.header}>
        <Space direction="horizontal" gap={pxToDp(32)}>
          <Image style={styles.logo} source={`${IMAGE_PREFIX}/stars.png`} />
          <Space gap={pxToDp(20)}>
            <Text style={styles.title}>UI/UX Designer</Text>
            <Text style={styles.company}>Google LLC</Text>
          </Space>
        </Space>
        {/* <Feather name="bookmark" size={pxToDp(48)} color={themeColor.primary} /> */}
        <FontAwesome name="bookmark" size={pxToDp(48)} color={themeColor.primary} />
      </Space>
      <Space style={styles.body}>
        <Text style={styles.address}>California, United States</Text>
        <Text style={styles.salary}>$10,000 - $25,000 /month</Text>
        <Space direction="horizontal">
          <Tag type="ghost" color="#979797">Full Time</Tag>
          <Tag type="ghost" color="#979797">Onsite</Tag>
        </Space>
      </Space>
    </Card>
  )
}

const styles = create({
  container: {
    width: '100%',
    height: 384,
    padding: 32,
    marginBottom: 32,
    borderWidth: 4,
    borderColor: '#F0F1F1',
    borderRadius: 32,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 2,
    borderColor: '#F0F1F1',
    paddingBottom: 16,
  },
  title: {
    fontSize: 34,
    fontWeight: '700',
    color: '#21201F',
  },
  company: {
    fontSize: 28,
    color: '#636363',
  },
  logo: {
    width: 108,
    height: 108,
    borderRadius: 24,
  },
  body: {
    paddingLeft: 140,
    paddingTop: 28,
    justifyContent: 'center',
  },
  address: {
    fontSize: 32,
    color: '#636363',
  },
  salary: {
    fontSize: 28,
    color: themeColor.primary,
  },
})

export default RecruitJobCard
