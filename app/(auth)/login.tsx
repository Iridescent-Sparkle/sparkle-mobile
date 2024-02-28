import React, { useState } from 'react'
import { Image, Text, View } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import { Button, Field, Form } from '@fruits-chain/react-native-xiaoshu'
import { IMAGE_PREFIX } from '@/constants'
import { create } from '@/core/styleSheet'

function Login() {
  const router = useRouter()
  const [form] = Form.useForm()
  const [showPassword, setShowPassword] = useState(false)

  const handleRegisterClick = () => {
    router.replace('/(auth)/register')
  }

  const handleShowPassword = () => {
    setShowPassword(true)
  }

  const handleHiddenPassword = () => {
    setShowPassword(false)
  }

  return (
    <View style={styles.container}>
      <Image style={styles.logo} src={`${IMAGE_PREFIX}/stars.png`}></Image>
      <Text style={styles.title}>请登录</Text>
      <Form form={form}>
        <View style={styles.formItem}>
          <Feather name="phone" size={24} color="#A9A9A9" style={styles.icon} />
          <Form.Item name="phoneNumber">
            <Field.TextInput style={styles.input}>
            </Field.TextInput>
          </Form.Item>
        </View>
        <View style={styles.formItem}>
          <Feather name="lock" size={24} color="#A9A9A9" style={styles.icon} />
          <Form.Item name="password">
            <Field.TextInput style={styles.input}></Field.TextInput>
          </Form.Item>
          {showPassword
            ? <Feather name="eye-off" size={24} color="#A9A9A9" onPress={handleHiddenPassword} />
            : <Feather name="eye" size={24} color="#A9A9A9" onPress={handleShowPassword} />}
        </View>
      </Form>
      <View style={styles.passwordTipWrapper}>
        <Text style={styles.passwordTip}>忘记了密码？</Text>
      </View>
      <Button type="primary" style={styles.button}>登录</Button>
      <View style={styles.accountTipWrapper}>
        <Text style={styles.accountTip}>未拥有账户？</Text>
      </View>
      <Button style={styles.button} onPress={handleRegisterClick}>注册</Button>
    </View>
  )
}

const styles = create({
  container: {
    flex: 1,
    paddingTop: 200,
    paddingHorizontal: 60,
    alignItems: 'center',
  },
  title: {
    marginTop: 16,
    fontSize: 40,
    fontWeight: '700',
  },
  logo: {
    width: 160,
    height: 160,
  },
  formItem: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 64,
    padding: 24,
    borderWidth: 4,
    borderColor: '#F4F4F4',
    borderRadius: 28,
  },
  input: {
    width: 460,
  },
  icon: {
    marginRight: 24,
  },
  passwordTipWrapper: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 48,
    marginBottom: 72,
  },
  passwordTip: {
    fontSize: 24,
  },
  accountTipWrapper: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 64,
    marginBottom: 44,
  },
  accountTip: {
    fontSize: 24,
    color: '#A9A9A9',
  },
  button: {
    width: '100%',
  },
})
export default Login
