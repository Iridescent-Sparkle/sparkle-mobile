import { Space } from '@fruits-chain/react-native-xiaoshu'
import { View } from 'react-native'
import Slider from '@react-native-community/slider'
import { Feather } from '@expo/vector-icons'
import BaseCard from '../base-card'
import { create, pxToDp } from '@/core/styleSheet'

function LocationSalary() {
  return (
    <BaseCard>
      <Space>
        <View style={styles.card}>
          <Feather name="map-pin" size={pxToDp(32)} color="black" />
        </View>
        <Slider
          style={{ width: 200, height: 40 }}
          minimumValue={0}
          maximumValue={1}
          minimumTrackTintColor="#FFFFFF"
          maximumTrackTintColor="#000000"
        />
        <View>

        </View>
      </Space>
    </BaseCard>
  )
}

const styles = create({
  card: {
    backgroundColor: '#FAFAFB',
    borderRadius: 8,
  },
})

export default LocationSalary
