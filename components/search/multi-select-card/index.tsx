import { Ionicons } from '@expo/vector-icons'
import { Checkbox, Space } from '@fruits-chain/react-native-xiaoshu'
import BaseCard from '../base-card'
import { themeColor } from '@/core/styleSheet/themeColor'
import { create } from '@/core/styleSheet'

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
          iconStyle={{}}
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

const styles = create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FAFAFB',
    borderRadius: 16,
    height: 96,
    paddingHorizontal: 32,
  },
  text: {
    marginLeft: 32,
    fontSize: 32,
    color: '#363636',
    fontWeight: '500',
  },
  unit: {
    justifyContent: 'space-between',
  },
  label: {
    backgroundColor: themeColor.primary,
    borderRadius: 8,

  },
  labelText: {
    color: '#fff',
  },
})

export default MultiSelectCard
