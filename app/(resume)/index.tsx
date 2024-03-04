import { View } from 'react-native'
import UserCard from '@/components/resume/user-card'
import { create } from '@/core/styleSheet'

export default function ResumeHome() {
  return (
    <View style={styles.container}>
      <UserCard />
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
