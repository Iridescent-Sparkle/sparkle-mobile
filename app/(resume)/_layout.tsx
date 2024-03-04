import { AntDesign, Entypo, Feather, Ionicons } from '@expo/vector-icons'
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
          tabBarIcon: ({ focused }) => <Entypo name="home" size={24} color="black" />,
        }}
      />
      <Tabs.Screen
        name="collect"
        options={{
          title: '收藏',
          tabBarIcon: ({ focused }) => <Feather name="bookmark" size={24} color="black" />,
        }}
      />
      <Tabs.Screen
        name="deliver"
        options={{
          title: '投递',
          tabBarIcon: ({ focused }) => <FontAwesome name="briefcase" size={25} />,
        }}
      />
      <Tabs.Screen
        name="chat"
        options={{
          title: '聊天',
          tabBarIcon: ({ focused }) => <Ionicons name="chatbox-ellipses-outline" size={24} color="black" />,
        }}
      />
      <Tabs.Screen
        name="resume"
        options={{
          title: '我的',
          tabBarIcon: ({ focused }) => <AntDesign name="profile" size={24} color="black" />,
        }}
      />
    </Tabs>
  )
}
