import dayjs from 'dayjs'
import React, { Fragment, useState } from 'react'
import { Pressable, Text, View } from 'react-native'
import DateTimePickerModal from '@/components/DateTimePicker/Modal/Date'
import { c, create } from '@/core/styleSheet'

type Props = FormItemChildrenProps<string> & Partial<{
  /** 展位符 */
  placeholder: string
  /** 选择器title */
  title: string
  /** 最大时间 */
  max: string
  /** 最小时间 */
  min: string
  /** 是否被禁用 */
  forbidInput: boolean
}>

function Index(props: Props) {
  const { placeholder, title, value, onChange, max, min, forbidInput } = props
  /** 控制日期选择器展示 */
  const [open, setOpen] = useState(false)

  return (
    <Fragment>
      <DateTimePickerModal
        title={title || '请选择'}
        show={open}
        value={value}
        maxDate={max}
        minDate={min}
        maskClose={false}
        onCancel={() => {
          setOpen(false)
        }}
        onPress={(date) => {
          setOpen(false)
          onChange(dayjs(date).format('YYYY-MM-DD'))
        }}
      />
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        {forbidInput
          ? (<Text style={[styles.font, { color: 'rgba(0, 0, 0, 0.25)' }]}>{dayjs(value).format('YYYY-MM-DD')}</Text>)
          : (
            <Pressable style={{ flex: 1 }} onPress={() => setOpen(true)}>
              <View>
                {value
                  ? (
                    <Text style={[styles.font, { color: 'rgba(0, 0, 0, 0.85)' }]}>{dayjs(value).format('YYYY-MM-DD')}</Text>
                    )
                  : (
                    <Text style={[styles.font, { color: 'rgba(0, 0, 0, 0.25)' }]}>{placeholder || '请选择'}</Text>
                    )}
              </View>
            </Pressable>
            )}
      </View>
    </Fragment>
  )
}

const styles = create({
  font: {
    fontSize: 28,
    color: c.black65,
  },
})

export default Index
