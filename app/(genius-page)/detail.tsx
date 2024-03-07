import { FontAwesome } from '@expo/vector-icons'
import { Button, Card, NavBar } from '@fruits-chain/react-native-xiaoshu'
import React, { useRef } from 'react'
import { FlatList, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import RecruitDescriptionCard from '@/components/recruit/recruit-detail/recruit-description-card'
import RecruitDetailCard from '@/components/recruit/recruit-detail/recruit-detail-card'
import MultiSelectCard from '@/components/recruit/recruit-search/multi-select-card'
import FilterTabs from '@/components/recruit/recruit-search/recruit-filter-tabs'
import { educationList, employmentTypeList, experienceList, jobFunctionList, jobLevelList } from '@/constants'
import { create, pxToDp } from '@/core/styleSheet'
import { themeColor } from '@/core/styleSheet/themeColor'

const listData = [
  {
    id: '1',
    title: '工作描述',
    component: <RecruitDescriptionCard title="工作描述" data={['能够运行设计冲刺交付最好的用户', '基于研究的经验。', '有领导团队的能力，能委派工作，有主动性。', '能够指导初级设计师制定战略', '如何收集特定的功能。', '能够对数据进行汇总和处理', '正在发生的决定。']} />,
  },
  {
    id: '2',
    title: '最低资格',
    component: <RecruitDescriptionCard title="最低资格" data={['2年以上UI/UX设计经验', '使用Figma、Sketch和Miro平台。', '具有数值设计的分析和转换能力', '冲刺到UI/UX。', '有相关B2C用户中心产品开发经验。']} />,
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
    <View style={[styles.container, { paddingTop: insets.top, paddingBottom: insets.bottom }]}>
      <NavBar rightExtra={<FontAwesome name="bookmark" size={pxToDp(48)} color={themeColor.primary} />} rightStyle={styles.rightExtra} divider={false} />
      <View style={styles.list}>
        <FlatList
          ListHeaderComponent={(
            <View>
              <RecruitDetailCard />
              <FilterTabs listRef={listRef} data={listData} />
            </View>
          )}
          ref={listRef}
          data={listData}
          renderItem={item => item.item.component}
          keyExtractor={item => item.id}
        />
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
    paddingHorizontal: 20,
  },
  rightExtra: {

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
  },
  button: {
    width: 660,
    borderRadius: 40,
  },
})

export default FilterOptions
