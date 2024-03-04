import { AntDesign, Entypo, Feather } from '@expo/vector-icons'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import { Tabs } from 'expo-router'
import React from 'react'

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="index"
        options={{
          title: '首页',
          tabBarIcon: ({ focused }) => <FontAwesome name="list-alt" size={24} color="black" />,
        }}
      />
      <Tabs.Screen
        name="manage"
        options={{
          title: '管理招聘',
          tabBarIcon: ({ focused }) => <Feather name="box" size={24} color="black" />,
        }}
      />
      <Tabs.Screen
        name="chat"
        options={{
          title: '聊天',
          tabBarIcon: ({ focused }) => <Entypo name="chat" size={24} color="black" />,
        }}
      />
      <Tabs.Screen
        name="member"
        options={{
          title: '我的',
          tabBarIcon: ({ focused }) => <AntDesign name="user" size={24} color="black" />,
        }}
      />
    </Tabs>
  )
}
