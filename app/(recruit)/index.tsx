import { StyleSheet, View } from 'react-native'
import UserCard from '../../components/resume/user-card/index'

export default function RecruitHome() {
  return (
    <View style={styles.container}>
      <UserCard></UserCard>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
})
