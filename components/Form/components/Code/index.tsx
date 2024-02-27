import React, { useMemo } from 'react'
import type { TextInputProps } from 'react-native'
import { Image, Pressable, Text, View } from 'react-native'
import Input from '../Input'
import type { FormItemChildrenProps } from '../../core'
import useCountDown from './useCountDown'
import TouchView from '@/components/TouchView'
import { c, create, pxToDp } from '@/core/styleSheet'
import { useRefState } from '@/core/hooks/useRefState'
import { isPhone } from '@/core/tools/validator'

type Props = FormItemChildrenProps & TextInputProps & {
  /** 当前手机号 */
  tel?: string
  /** 验证码字体 */
  codeFontSize?: number
  /** 验证码行高 */
  codeLineHeight?: number
  getVerifyCode: () => Promise<any>
  /** 是否展示 清空 图标 */
  isShowClear?: boolean
}

function Code(props: Props) {
  const { getVerifyCode, tel, codeFontSize, codeLineHeight, isShowClear = false, ...rest } = props
  const [countDown, setCountDown, $countDown] = useCountDown()
  const [loading, setLoading, $loading] = useRefState(false)
  async function fetchVerifyCode() {
    if (getVerifyCode && !$loading() && $countDown() <= 0) {
      if (!isPhone(tel)) {
        // $.msg('请输入正确的手机号')
        return
      }
      try {
        setLoading(true)
        const data = await getVerifyCode()
        setCountDown(data)
      }
      finally {
        setLoading(false)
      }
    }
  }

  const disabled = loading || !!countDown
  const buttonText = useMemo(() => {
    if (loading)
      return '获取中...'
    return countDown ? `${countDown}秒后重新获取` : '获取验证码'
  }, [loading, countDown])

  /** 点击 清空数据 事件 */
  const onPressClose = () => {

  }

  return (
    <View style={styles.container}>
      <Input style={styles.input} keyboardType="number-pad" {...rest} />
      <View style={styles.rightBox}>
        {isShowClear
        && (
          <Pressable onPress={onPressClose}>
            <Image style={styles.closeIcon} source={{ uri: 'https://cdn.yupaowang.com/yupao_app/yp_react_app_iconclosegray.png' }} />
          </Pressable>
        )}
        <TouchView btnName={buttonText} onPress={() => fetchVerifyCode()}>
          <Text style={[styles.text, disabled && styles.disabled, { fontSize: pxToDp(codeFontSize || 28), lineHeight: pxToDp(codeLineHeight || 44) }]}>{buttonText}</Text>
        </TouchView>
      </View>

    </View>
  )
}

const styles = create({
  container: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    fontSize: 30,
    fontWeight: '400',
    justifyContent: 'center',
    alignItems: 'center',
    color: c.black85,
    includeFontPadding: false,
  },
  text: {
    fontSize: 28,
    color: c.primary,
    lineHeight: 44,
    fontWeight: '400',
  },
  disabled: {
    color: c.placeholder,
  },
  rightBox: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  closeIcon: {
    width: 32,
    height: 32,
    marginRight: 24,
  },
})

export default Code
