import { Feather, FontAwesome, MaterialIcons } from '@expo/vector-icons'
import { Card, Space, Tag } from '@fruits-chain/react-native-xiaoshu'
import { Image } from 'expo-image'
import React, { useState } from 'react'
import { Text } from 'react-native'
import { pxToDp } from '../../../../core/styleSheet/index'
import { themeColor } from '@/core/styleSheet/themeColor'
import { create } from '@/core/styleSheet'
import { IMAGE_PREFIX } from '@/constants'

interface Props {

}

function RecruitJobCard(props: Props) {
  return (
    <Card style={styles.container}>
      <Space direction="horizontal" style={styles.header}>
        <Space direction="horizontal" gap={pxToDp(32)}>
          <Image style={styles.logo} source={`${IMAGE_PREFIX}/stars.png`} />
          <Space gap={pxToDp(20)}>
            <Text style={styles.title}>UI/UX Designer</Text>
            <Text style={styles.company}>Google LLC</Text>
            <Tag type="ghost" color="#979797">Full Time</Tag>
          </Space>
        </Space>
        <MaterialIcons name="arrow-forward-ios" size={pxToDp(32)} color="black" />
      </Space>
    </Card>
  )
}

const styles = create({
  container: {
    marginBottom: 32,
    borderBottomWidth: 2,
    borderColor: '#F0F1F1',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
})

export default RecruitJobCard
