import { Button } from '@fruits-chain/react-native-xiaoshu'
import { useLocalSearchParams, useNavigation, useRouter } from 'expo-router'
import React, { useEffect } from 'react'
import { Image, Text, View } from 'react-native'
import { create } from '@/core/styleSheet'
import { IMAGE_PREFIX } from '@/constants'

function ChangePassword() {
  const router = useRouter()
  const navigation = useNavigation()
  const { title } = useLocalSearchParams<{ title: string }>()

  useEffect(() => {
    navigation.setOptions({
      headerTitle: title,
    })
  }, [])

  const handleRegisterClick = () => {
    router.replace('/(auth)/register')
  }

  const handleLoginClick = () => {
    router.replace('/(auth)/login')
  }

  return (
    <View style={styles.container}>
      <Image style={styles.banner} src={`${IMAGE_PREFIX}/mobile_login.png`}></Image>
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>欢迎</Text>
        <Text style={styles.subTitle}>
          搜索职位找到你梦想中的职业!
        </Text>
      </View>
      <View style={styles.buttonWrapper}>
        <Button style={styles.button} onPress={handleRegisterClick}>注册</Button>
        <Button style={styles.button} onPress={handleLoginClick}>登录</Button>
      </View>
    </View>
  )
}

const styles = create({
  container: {
    flex: 1,
    paddingTop: 200,
    paddingHorizontal: 60,
  },
  banner: {
    width: 630,
    height: 540,
  },
  titleWrapper: {
    marginBottom: 96,
  },
  title: {
    fontSize: 40,
    fontWeight: '700',
    marginBottom: 42,
  },
  subTitle: {
    fontSize: 32,

  },
  buttonWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    width: 244,
  },
})

export default ChangePassword
