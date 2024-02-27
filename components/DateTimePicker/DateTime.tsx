import dayjs from 'dayjs'
import React, { useRef, useState } from 'react'
import { View } from 'react-native'
import styles from './styles'
import type { DateTypeArr } from './utils'
import { getDates, getHours, getMinutes } from './utils'
import List from '@/components/DateTimePicker/List'
import { pxToDp } from '@/core/styleSheet'

interface Props {
  /** 当前选中的值 */
  value?: string
  /** 最小日期 */
  minDate?: string
  /** 最大日期 */
  maxDate?: string
  /** 行高 */
  rowHeight?: number
  /** 事件 */
  onChange?: (date: string) => void
}
function Index(props: Props) {
  const { minDate, maxDate, rowHeight = pxToDp(80) } = props
  /** 保存日期 */
  const dates = useRef(
    getDates(new Date(minDate || dayjs().valueOf()), new Date(maxDate || dayjs().add(1, 'year').valueOf())),
  )
  /** 保存小时 */
  const hours = useRef(getHours())
  /** 保存分钟 */
  const minutes = useRef(getMinutes())
  /** 当前选中的数据 */
  const [dateTime, setDateTime] = useState(() => {
    const date = props.value ? new Date(dayjs(props.value).format('YYYY/MM/DD HH:mm')) : new Date()
    return {
      date: dates.current.find(item => item.value === dayjs(date).format('YYYY/MM/DD')) || dates.current[0],
      hour: hours.current.find(item => item.value == dayjs(date).format('H')) || hours.current[0],
      minute: minutes.current.find(item => item.value == dayjs(date).format('m')) || minutes.current[0],
    }
  })
  /** 事件监听处理 */
  const onValueChange = (row: DateTypeArr[0], type: 'date' | 'hour' | 'minute') => {
    const newDateTime = { ...dateTime, [type]: row }
    setDateTime(newDateTime)
    const hourStr = Number(newDateTime.hour.value) < 10 ? `0${newDateTime.hour.value}` : newDateTime.hour.value
    const minuteStr = Number(newDateTime.minute.value) < 10 ? `0${newDateTime.minute.value}` : newDateTime.minute.value
    props.onChange?.(`${newDateTime.date.value} ${hourStr}:${minuteStr}`)
  }

  return (
    <View>
      <View style={styles.container}>
        {/* 年月日 */}
        <List
          containerStyle={styles.dateList}
          data={dates.current}
          rowHeight={rowHeight}
          value={dateTime.date}
          onValueChange={row => onValueChange(row, 'date')}
        />
        {/* 小时数 */}
        <List
          containerStyle={styles.smallFlatList}
          data={hours.current}
          rowHeight={rowHeight}
          value={dateTime.hour}
          onValueChange={row => onValueChange(row, 'hour')}
        />
        {/* 分钟数 */}
        <List
          containerStyle={styles.smallFlatList}
          data={minutes.current}
          rowHeight={rowHeight}
          value={dateTime.minute}
          onValueChange={row => onValueChange(row, 'minute')}
        />
        {/* 选择区样式 */}
        <View style={styles.chooseArea} />
      </View>
    </View>
  )
}
export default Index
