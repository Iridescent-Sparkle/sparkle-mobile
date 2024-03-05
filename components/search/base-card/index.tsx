import { Collapse } from '@fruits-chain/react-native-xiaoshu'
import type { ReactNode } from 'react'
import { View } from 'react-native'
import { themeColor } from '@/core/styleSheet/themeColor'
import { create } from '@/core/styleSheet'

interface Props {
  title: string
  children: ReactNode
}

function BaseCard(props: Props) {
  const { title, children } = props

  return (
    <View style={styles.container}>
      <Collapse title={title} titleTextStyle={styles.titleText} iconColor={themeColor.primary}>
        {children}
      </Collapse>
    </View>
  )
}

const styles = create({
  container: {
    borderRadius: 40,
    borderWidth: 4,
    borderColor: '#F1F1F1',
    overflow: 'hidden',
  },
  titleText: {
    fontSize: 36,
    fontWeight: '700',
    color: '#393939',
  },
})

export default BaseCard
