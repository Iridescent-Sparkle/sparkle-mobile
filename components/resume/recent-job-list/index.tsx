import { Tabs } from '@fruits-chain/react-native-xiaoshu'
import React from 'react'
import { View } from 'react-native'
import { themeColor } from '@/core/styleSheet/themeColor'
import { create, pxToDp } from '@/core/styleSheet'

function RecentJobList() {
  return (
    <View>
      <Tabs tabBarStyle={styles.tabBar} tabAlign="left" indicatorColor={themeColor.primary} indicatorWidth={pxToDp(64)} activeTextColor={themeColor.primary}>
        <Tabs.TabPane key="1" tab="全部">
        </Tabs.TabPane>
        <Tabs.TabPane key="2" tab="前端开发">
        </Tabs.TabPane>
        <Tabs.TabPane key="3" tab="Web前端">
        </Tabs.TabPane>
        <Tabs.TabPane key="4" tab="后端开发工程师">
        </Tabs.TabPane>
        <Tabs.TabPane key="5" tab="大数据工程师">
        </Tabs.TabPane>
        <Tabs.TabPane key="6" tab="测试工程师">
        </Tabs.TabPane>
      </Tabs>
    </View>
  )
}

const styles = create({
  tabBar: {
    height: 114,
    paddingHorizontal: 0,
  },
})

export default RecentJobList
