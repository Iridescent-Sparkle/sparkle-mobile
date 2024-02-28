import { Feather } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import React, { useState } from 'react'
import { Button, Field, Form, PasswordInput } from '@fruits-chain/react-native-xiaoshu'

import { Text, View } from 'react-native'
import { create } from '@/core/styleSheet'

function Register() {
  const router = useRouter()
  const [form] = Form.useForm()
  const [showPassword, setShowPassword] = useState(false)

  const handleLoginClick = () => {
    router.replace('/(auth)/login')
  }

  const handleShowPassword = () => {
    setShowPassword(true)
  }

  const handleHiddenPassword = () => {
    setShowPassword(false)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>创建一个免费的账户</Text>
      <Form form={form}>
        <View style={styles.formItem}>
          <Feather name="phone" size={24} color="#A9A9A9" style={styles.icon} />
          <Form.Item name="phoneNumber">
            <Field.Text style={styles.input} placeholder="请输入手机号">
            </Field.Text>
          </Form.Item>
        </View>
        <View style={styles.formItem}>
          <Feather name="lock" size={24} color="#A9A9A9" style={styles.icon} />
          <Form.Item name="password">
            <PasswordInput style={styles.input} placeholder="请输入密码"></PasswordInput>
          </Form.Item>
          {showPassword
            ? <Feather name="eye-off" size={24} color="#A9A9A9" onPress={handleHiddenPassword} />
            : <Feather name="eye" size={24} color="#A9A9A9" onPress={handleShowPassword} />}
        </View>
        <View style={styles.formItem}>
          <Feather name="lock" size={24} color="#A9A9A9" style={styles.icon} />
          <Form.Item name="password">
            <PasswordInput style={styles.input} placeholder="确认你的密码"></PasswordInput>
          </Form.Item>
          {showPassword
            ? <Feather name="eye-off" size={24} color="#A9A9A9" onPress={handleHiddenPassword} />
            : <Feather name="eye" size={24} color="#A9A9A9" onPress={handleShowPassword} />}
        </View>
        <View style={styles.formItem}>
          <Feather name="code" size={24} color="#A9A9A9" style={styles.icon} />
          <Form.Item name="phoneNumber">
            <Field.Text style={styles.input} placeholder="请输入验证码">
            </Field.Text>
          </Form.Item>
        </View>
      </Form>
      <View style={styles.passwordTipWrapper}>
        <Text style={styles.passwordTip}>忘记了密码？</Text>
      </View>
      <Button type="primary" style={styles.button}>注册</Button>
      <View style={styles.accountTipWrapper}>
        <Text style={styles.accountTip}>已拥有账户？</Text>
      </View>
      <Button style={styles.button} onPress={handleLoginClick}>登录</Button>
    </View>
  )
}

const styles = create({
  container: {
    flex: 1,
    paddingTop: 80,
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
export default Register
