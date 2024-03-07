import { AntDesign } from '@expo/vector-icons'
import { Tabs } from 'expo-router'
import React from 'react'
import { pxToDp } from '@/core/styleSheet'

export default function BossTabLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false, tabBarActiveTintColor: '#6D63FD' }}>
      <Tabs.Screen
        name="index"
        options={{
          title: '首页',
          tabBarIcon: ({ color }) => <AntDesign name="home" size={pxToDp(48)} color={color} />,
        }}
      />
      <Tabs.Screen
        name="manage"
        options={{
          title: '管理招聘',
          tabBarIcon: ({ color }) => <AntDesign name="inbox" size={pxToDp(48)} color={color} />,
        }}
      />
      <Tabs.Screen
        name="chat"
        options={{
          title: '聊天',
          tabBarIcon: ({ color }) => <AntDesign name="message1" size={pxToDp(48)} color={color} />,
        }}
      />
      <Tabs.Screen
        name="member"
        options={{
          title: '我的',
          tabBarIcon: ({ color }) => <AntDesign name="user" size={pxToDp(48)} color={color} />,
        }}
      />
    </Tabs>
  )
}
