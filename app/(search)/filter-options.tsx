import { Button, Card, Tabs } from '@fruits-chain/react-native-xiaoshu'
import React, { useRef } from 'react'
import { FlatList, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import LocationSalaryCard from '@/components/search/location-salary-card'
import MultiSelectCard from '@/components/search/multi-select-card'
import SingleSelectCard from '@/components/search/single-select-card'
import { educationList, employmentTypeList, experienceList, jobFunctionList, jobLevelList, workTypeList } from '@/constants'
import Form from '@/core/components/Form'
import { create, pxToDp } from '@/core/styleSheet'
import { themeColor } from '@/core/styleSheet/themeColor'

const listData = [
  {
    id: '1',
    title: '位置和薪酬',
    component: <LocationSalaryCard />,
  },
  {
    id: '2',
    title: '工作类型',
    component: <SingleSelectCard title="工作类型" data={workTypeList} />,
  },
  {
    id: '3',
    title: '工作水平',
    component: <MultiSelectCard title="工作水平" data={jobLevelList} />,
  },
  {
    id: '4',
    title: '就业类型',
    component: <MultiSelectCard title="就业类型" data={employmentTypeList} />,
  },
  {
    id: '5',
    title: '工作经验',
    component: <MultiSelectCard title="工作经验" data={experienceList} />,
  },
  {
    id: '6',
    title: '教育层次',
    component: <MultiSelectCard title="教育层次" data={educationList} />,
  },
  {
    id: '7',
    title: '工作职能',
    component: <MultiSelectCard title="工作职能" data={jobFunctionList} />,
  },
]

function FilterOptions() {
  const form = Form.useForm()

  const insets = useSafeAreaInsets()
  const listRef = useRef<FlatList>(null)

  const handleTabChange = (activeKey: string) => {
    listRef.current?.scrollToIndex({
      index: Number(activeKey) - 1,
    })
  }

  return (
    <View style={[styles.container, { paddingBottom: insets.bottom }]}>
      <View>
        <Tabs onChange={handleTabChange} tabBarStyle={styles.tabBar} tabAlign="left" indicatorColor={themeColor.primary} indicatorWidth={pxToDp(64)} activeTextColor={themeColor.primary}>
          {
            listData.map(item => <Tabs.TabPane key={item.id} tab={item.title} />)
          }
        </Tabs>
      </View>
      <View style={styles.list}>
        <Form form={form}>
          <FlatList ref={listRef} data={listData} renderItem={itemItem => itemItem.item.component} keyExtractor={item => item.id} />
        </Form>
      </View>
      <Card>
        <View style={styles.buttonWrapper}>
          <Button type="ghost" style={styles.button}>重置</Button>
          <Button style={styles.button}>确认</Button>
        </View>
      </Card>
    </View>
  )
}

const styles = create({
  container: {
    flex: 1,
  },
  tabBar: {
    height: 114,
    paddingHorizontal: 0,
  },
  list: {
    flex: 1,
    paddingTop: 32,
    paddingHorizontal: 24,
  },
  buttonWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  button: {
    width: 320,
    borderRadius: 40,
  },
})

export default FilterOptions
