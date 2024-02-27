import React from 'react'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import { Link, Tabs } from 'expo-router'
import { Pressable } from 'react-native'

import { AntDesign, Entypo, Feather } from '@expo/vector-icons'
import Colors from '@/constants/Colors'
import { useColorScheme } from '@/components/useColorScheme'
import { useClientOnlyValue } from '@/components/useClientOnlyValue'

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name']
  color: string
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />
}

export default function TabLayout() {
  const colorScheme = useColorScheme()

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        headerShown: useClientOnlyValue(false, true),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: '首页',
          tabBarIcon: ({ color }) => <FontAwesome name="list-alt" size={24} color="black" />,
          headerRight: () => (
            <Link href="/modal" asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="info-circle"
                    size={25}
                    color={Colors[colorScheme ?? 'light'].text}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="manage"
        options={{
          title: '管理招聘',
          tabBarIcon: ({ color }) => <Feather name="box" size={24} color="black" />,
        }}
      />
      <Tabs.Screen
        name="chat"
        options={{
          title: '聊天',
          tabBarIcon: ({ color }) => <Entypo name="chat" size={24} color="black" />,
        }}
      />
      <Tabs.Screen
        name="member"
        options={{
          title: '我的',
          tabBarIcon: ({ color }) => <AntDesign name="user" size={24} color="black" />,
        }}
      />
    </Tabs>
  )
}
