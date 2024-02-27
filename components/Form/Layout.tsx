/**
 * @Date 2022-06-16 15:04:50
 * @Name 表单布局
 * @Description 核心布局组件，用于包裹表单内的所有表单项
 * @Preview https://cdn.yupaowang.com/yupao_app/component-selectcity.jpg
 * @HideDoc true
 */

import React from 'react'
import { Text, View } from 'react-native'
import YpIconMbxC from '@/components/Iconfont/YpIconMbxC'
import { c, create, pxToDp } from '@/core/styleSheet'

interface Props {
  // 内容格式
  contentStyle?: any
  // 第二层内容试图格式
  wrapStyle?: any
  // 显示左边标题格式
  labelStyle?: any
  // 中间内容试图
  children: React.ReactNode
  // 左边标题
  label: string
  // 是否显示右箭头icon
  icon?: boolean
  // 是否禁用输入
  forbid?: boolean
  // 显示底部内容试图信息，如果期望薪资推荐
  bottomContent?: React.ReactNode
}

function Index(props: Props) {
  const { children, label, icon, contentStyle, bottomContent, wrapStyle, labelStyle, forbid } = props
  return (
    <View style={styles.body}>
      <View style={[styles.wrap, wrapStyle]}>
        <View style={{ flexDirection: 'row' }}>
          <View style={[styles.label, labelStyle]}>
            <Text style={[styles.labelText, forbid ? styles.labelForbidText : {}]}>{label}</Text>
          </View>
          <View style={[styles.content, contentStyle]}>{children}</View>
          {icon
            ? (
              <View style={styles.icon} pointerEvents="none">
                <YpIconMbxC color="#ddd" size={pxToDp(48)} />
              </View>
              )
            : null}
        </View>
        {bottomContent}
      </View>
    </View>
  )
}

const styles = create({
  body: {
    paddingLeft: 32,
    backgroundColor: '#fff',
  },
  wrap: {
    paddingTop: 42,
    paddingBottom: 42,
    borderBottomColor: c.border,
    borderBottomWidth: 2,
    paddingRight: 32,
  },
  label: {
    width: 160,
    height: 44,
    lineHeight: 44,
    justifyContent: 'center',
  },
  labelText: {
    height: 44,
    lineHeight: 44,
    color: c.black65,
    fontSize: 28,
  },
  labelForbidText: {
    height: 44,
    lineHeight: 44,
    color: c.black25,
    fontSize: 28,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  icon: {
    marginRight: -16,
  },
})

export default Index
