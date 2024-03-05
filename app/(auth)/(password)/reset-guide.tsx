import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons'
import { Button, Space } from '@fruits-chain/react-native-xiaoshu'
import { Image } from 'expo-image'
import { useNavigation, useRouter } from 'expo-router'
import React, { useEffect } from 'react'
import { ScrollView, Text, View } from 'react-native'
import { create, pxToDp } from '@/core/styleSheet'
import { IMAGE_PREFIX } from '@/constants'

function ResetGuide() {
  const router = useRouter()
  const navigation = useNavigation()

  useEffect(() => {
    navigation.setOptions({
      headerTitle: '修改密码',
    })
  }, [])

  const handleContinueClick = () => {
    router.push('/(auth)/(password)/verification-code')
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.bannerWrapper}>
        <Image style={styles.banner} source={`${IMAGE_PREFIX}/my_password.png`}></Image>
      </View>
      <Text style={styles.title}>选择使用哪种联系方式来重置您的密码</Text>
      <View style={styles.card}>
        <View style={styles.circle}>
          <AntDesign name="message1" size={pxToDp(48)} color="#3E7CFD" />
        </View>
        <Space>
          <Text style={styles.desc}>通过短信：</Text>
          <Text style={styles.content}>
            +86 183****7538
          </Text>
        </Space>
      </View>
      <View style={styles.card}>
        <View style={styles.circle}>
          <MaterialCommunityIcons name="email-outline" size={pxToDp(48)} color="#3E7CFD" />
        </View>
        <Space>
          <Text style={styles.desc}>通过邮箱：</Text>
          <Text style={styles.content}>
            +86 183****7538
          </Text>
        </Space>
      </View>
      <Button style={styles.button} onPress={handleContinueClick}>继续</Button>
    </ScrollView>
  )
}

const styles = create({
  container: {
    flex: 1,
    paddingHorizontal: 40,
  },
  bannerWrapper: {
    width: '100%',
    alignItems: 'center',
  },
  banner: {
    width: 630,
    height: 540,
  },
  title: {
    fontSize: 40,
    fontWeight: '700',
    marginBottom: 42,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 40,
    marginBottom: 48,
    borderRadius: 64,
    borderWidth: 2,
    borderColor: '#F2F1F1',
  },
  circle: {
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 40,
    width: 140,
    height: 140,
    borderRadius: 70,
    backgroundColor: '#EEF5FF',
  },
  desc: {
    color: '#868587',
  },
  content: {
    color: '#2E2E2E',
    fontWeight: '700',
  },
  button: {
    width: '100%',
    borderRadius: 40,
    marginBottom: 40,
  },
})

export default ResetGuide
