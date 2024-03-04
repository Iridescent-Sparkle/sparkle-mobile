import { View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import UserCard from '@/components/resume/user-card'
import { create } from '@/core/styleSheet'
import SearchBar from '@/components/resume/search'

export default function ResumeHome() {
  const insets = useSafeAreaInsets()

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <UserCard />
      <SearchBar />
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
