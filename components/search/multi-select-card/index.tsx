import { Ionicons } from '@expo/vector-icons'
import { Checkbox, Space } from '@fruits-chain/react-native-xiaoshu'
import BaseCard from '../base-card'
import { themeColor } from '@/core/styleSheet/themeColor'

interface Props {
  title: string
}

function MultiSelectCard(props: Props) {
  const { title } = props

  return (
    <BaseCard title={title}>
      <Space>
        <Checkbox
          defaultValue
          label="自定义 icon 边距"
          activeColor={themeColor.primary}
          renderIcon={({ activeColor, size, active, onPress, disabled }) => {
            return (
              <>
                {
                  active ? <Ionicons suppressHighlighting name="square" size={size} color={activeColor} onPress={onPress} disabled={disabled} /> : <Ionicons suppressHighlighting name="square-outline" size={size} color={activeColor} onPress={onPress} disabled={disabled} />
                }
              </>
            )
          }}
        />
      </Space>
    </BaseCard>
  )
}

export default MultiSelectCard
