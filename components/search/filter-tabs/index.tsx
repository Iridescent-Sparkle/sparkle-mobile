import { Tabs } from '@fruits-chain/react-native-xiaoshu'
import React, { useRef } from 'react'
import type { FlatList } from 'react-native'
import { themeColor } from '@/core/styleSheet/themeColor'
import { create, pxToDp } from '@/core/styleSheet'

interface Props {
  data: {
    id: string
    title: string
    component: React.JSX.Element
  }[]
}

function FilterTabs(props: Props) {
  const { data } = props

  const listRef = useRef<FlatList>(null)

  const handleTabChange = (activeKey: string) => {
    listRef.current?.scrollToIndex({
      index: Number(activeKey) - 1,
    })
  }

  return (
    <Tabs onChange={handleTabChange} tabBarStyle={styles.tabBar} tabAlign="left" indicatorColor={themeColor.primary} indicatorWidth={pxToDp(64)} activeTextColor={themeColor.primary}>
      {
            data.map(item => <Tabs.TabPane key={item.id} tab={item.title} />)
          }
    </Tabs>
  )
}

const styles = create({
  tabBar: {
    height: 114,
    paddingHorizontal: 0,
  },
})
export default FilterTabs
