import React, { useState } from 'react'
import { Image } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import { Text, View } from '@/components/Themed'
import { IMAGE_PREFIX } from '@/constants'
import { create } from '@/core/styleSheet'
import Form from '@/components/Form'
import Input from '@/components/Form/components/Input'
import Button from '@/components/Button'

function Login() {
  const router = useRouter()
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
  const onPasswordChange = (value: string) => {
    console.log(value)
  }
  return (
    <View style={styles.container}>
      <Image style={styles.logo} src={`${IMAGE_PREFIX}/stars.png`}></Image>
      <Text style={styles.title}>请登录</Text>
      <Form>
        <View style={styles.formItem}>
          <Feather name="phone" size={24} color="#A9A9A9" style={styles.icon} />
          <Form.Item name="phoneNumber">
            <Input style={styles.input}>
            </Input>
          </Form.Item>
        </View>
        <View style={styles.formItem}>
          <Feather name="lock" size={24} color="#A9A9A9" style={styles.icon} />
          <Form.Item name="password" onChange={onPasswordChange}>
            <Input style={styles.input}></Input>
          </Form.Item>
          {showPassword
            ? <Feather name="eye-off" size={24} color="#A9A9A9" onPress={handleHiddenPassword} />
            : <Feather name="eye" size={24} color="#A9A9A9" onPress={handleShowPassword} />}
        </View>
      </Form>
      <View style={styles.passwordTipWrapper}>
        <Text style={styles.passwordTip}>忘记了密码？</Text>
      </View>
      <Button title="登录" type="primary" style={styles.button}></Button>
      <View style={styles.accountTipWrapper}>
        <Text style={styles.accountTip}>未拥有账户？</Text>
      </View>
      <Button title="注册" style={styles.button} onPress={handleRegisterClick}></Button>
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
