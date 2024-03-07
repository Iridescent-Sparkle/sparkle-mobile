import { Button, Card } from '@fruits-chain/react-native-xiaoshu'
import React, { useRef } from 'react'
import { FlatList, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import FilterTabs from '@/components/search/filter-tabs'
import LocationSalaryCard from '@/components/search/location-salary-card'
import MultiSelectCard from '@/components/search/multi-select-card'
import SingleSelectCard from '@/components/search/single-select-card'
import { educationList, employmentTypeList, experienceList, jobFunctionList, jobLevelList, workTypeList } from '@/constants'
import { create } from '@/core/styleSheet'

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
  const insets = useSafeAreaInsets()
  const listRef = useRef<FlatList>(null)

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <View>
        <FilterTabs data={listData} />
      </View>
      <View style={styles.list}>
        <FlatList ref={listRef} data={listData} renderItem={itemItem => itemItem.item.component} keyExtractor={item => item.id} />
      </View>
      <Card>
        <View style={styles.buttonWrapper}>
          <Button style={styles.button}>投递</Button>
        </View>
      </Card>
    </View>
  )
}

const styles = create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
    width: 660,
    borderRadius: 40,
  },
})

export default FilterOptions
