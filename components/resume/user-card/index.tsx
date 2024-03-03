import React from 'react'
import { Image, Text, View } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { IMAGE_PREFIX } from '@/constants'
import { create } from '@/core/styleSheet'

function UserCard() {
  return (
    <View style={styles.container}>
      <View style={styles.userWrapper}>
        <Image style={styles.banner} src={`${IMAGE_PREFIX}/login.img}`}></Image>
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
  banner: {
    width: 630,
    height: 540,
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
    borderRadius: 40,
    borderWidth: 4,
    borderColor: '#F2F3F3',
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default UserCard
