import { Checkbox, Space } from '@fruits-chain/react-native-xiaoshu'
import BaseCard from '../base-card'
import { themeColor } from '@/core/styleSheet/themeColor'

interface Props {
  title: string
}

function SingleSelectCard(props: Props) {
  const { title } = props

  return (
    <BaseCard title={title}>
      <Space>
        <Checkbox
          defaultValue
          label="自定义 icon 边距"
          activeColor={themeColor.primary}
        />
      </Space>
    </BaseCard>
  )
}

export default SingleSelectCard
