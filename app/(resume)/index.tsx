import { StyleSheet, Text, View } from 'react-native'

export default function ResumeHome() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>ResumeHome</Text>
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
