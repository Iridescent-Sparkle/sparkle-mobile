import React from 'react'
import { Image, Text, View } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { IMAGE_PREFIX } from '@/constants'
import { create } from '@/core/styleSheet'

function UserCard() {
  const insets = useSafeAreaInsets()
  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <View style={styles.userWrapper}>
        {/* <Image style={styles.avatar} src={`${IMAGE_PREFIX}/logo.png}`}></Image> */}
        <View>
          <Text style={styles.tip}>早上好</Text>
          <Text style={styles.name}>Andrew</Text>
        </View>
      </View>
      <View style={styles.button}>
        <Feather name="bell" size={24} color="black" />
      </View>
    </View>
  )
}

const styles = create({
  container: {
    flexDirection: 'row',
    height: 164,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  userWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 80,
    height: 80,
  },
  tip: {
    fontSize: 40,
    fontWeight: '700',
  },
  name: {
    fontSize: 40,
    fontWeight: '700',
  },
  button: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 4,
    borderColor: '#F5F5F5',
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default UserCard
