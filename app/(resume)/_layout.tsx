import React from 'react'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import { Link, Tabs } from 'expo-router'
import { Pressable } from 'react-native'

import { AntDesign, Entypo, Feather, Ionicons } from '@expo/vector-icons'

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        // tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        // headerShown: useClientOnlyValue(false, true),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: '首页',
          tabBarIcon: ({ color }) => <Entypo name="home" size={24} color="black" />,
          headerRight: () => (
            <Link href="/modal" asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="info-circle"
                    size={25}

                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="collect"
        options={{
          title: '收藏',
          tabBarIcon: ({ color }) => <Feather name="bookmark" size={24} color="black" />,
        }}
      />
      <Tabs.Screen
        name="deliver"
        options={{
          title: '投递',
          tabBarIcon: ({ color }) => (
            <FontAwesome
              name="briefcase"
              size={25}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="chat"
        options={{
          title: '聊天',
          tabBarIcon: ({ color }) => <Ionicons name="chatbox-ellipses-outline" size={24} color="black" />,
        }}
      />
      <Tabs.Screen
        name="resume"
        options={{
          title: '我的',
          tabBarIcon: ({ color }) => <AntDesign name="profile" size={24} color="black" />,
        }}
      />
    </Tabs>
  )
}
