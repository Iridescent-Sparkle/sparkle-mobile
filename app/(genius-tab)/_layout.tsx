import { Feather } from '@expo/vector-icons'
import { Tabs } from 'expo-router'
import React from 'react'
import { pxToDp } from '@/core/styleSheet'

export default function GeniusTabLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false, tabBarActiveTintColor: '#6D63FD' }}>
      <Tabs.Screen
        name="index"
        options={{
          title: '首页',
          tabBarIcon: ({ color }) => <Feather name="home" size={pxToDp(48)} color={color} />,
        }}
      />
      <Tabs.Screen
        name="collect"
        options={{
          title: '收藏',
          tabBarIcon: ({ color }) => <Feather name="bookmark" size={pxToDp(48)} color={color} />,
        }}
      />
      <Tabs.Screen
        name="deliver"
        options={{
          title: '投递',
          tabBarIcon: ({ color }) => <Feather name="briefcase" size={pxToDp(48)} color={color} />,
        }}
      />
      <Tabs.Screen
        name="chat"
        options={{
          title: '聊天',
          tabBarIcon: ({ color }) => <Feather name="message-circle" size={pxToDp(48)} color={color} />,
        }}
      />
      <Tabs.Screen
        name="member"
        options={{
          title: '我的',
          tabBarIcon: ({ color }) => <Feather name="user" size={24} color={color} />,
        }}
      />
    </Tabs>
  )
}
