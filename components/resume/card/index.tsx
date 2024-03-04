import React from 'react'
import { View } from 'react-native'
import { create } from '@/core/styleSheet'

function JobCard() {
  return (
    <View style={styles.container}>

    </View>
  )
}

const styles = create({
  container: {
    width: '100%',
    height: 96,
    borderRadius: 24,
    paddingHorizontal: 16,
  },
})

export default JobCard
