import { View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import UserCard from '@/components/recruit/recruit-list/recruit-user-card'
import { create } from '@/core/styleSheet'
import SearchBar from '@/components/recruit/recruit-list/recruit-search-bar'
import RecentJobList from '@/components/recruit/recruit-list/recent-job-list'

export default function GeniusHome() {
  const insets = useSafeAreaInsets()

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <UserCard />
      <SearchBar />
      <RecentJobList />
    </View>
  )
}

const styles = create({
  container: {
    flex: 1,
    paddingHorizontal: 44,
    backgroundColor: '#FFF',
  },
})
