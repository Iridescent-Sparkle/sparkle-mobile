import dayjs from 'dayjs'
import React, { useEffect, useRef, useState } from 'react'
import { View } from 'react-native'
import styles from './styles'
import type { DateTypeArr } from './utils'
import { getDays, getMonths, getYears } from './utils'
import List from '@/components/DateTimePicker/List'

interface Props {
  /** 当前选中的值,可传入任意dayjs直接转换的值 */
  value?: string | number | Date
  /** 最小日期，可接收任意new Date支持转换的值 */
  minDate?: string | number | Date
  /** 最大日期 */
  maxDate?: string | number | Date
  /** 行高 */
  rowHeight?: number
  /** 事件，date为时间戳 */
  onChange?: (date: number) => void
}
function Index(props: Props) {
  const { minDate, maxDate, rowHeight = $.pxToDp(80) } = props
  /** 获取可选择的年份, 格式：2020年 */
  const [yearArr] = useState(
    getYears(
      new Date(minDate || dayjs().format('YYYY/MM/DD').valueOf()),
      new Date(maxDate || dayjs().add(100, 'year').valueOf()),
    ),
  )
  /** 获取可选择的月份, 格式：1月 */
  const [monthArr, setMonthArr] = useState(
    getMonths(
      new Date(minDate || dayjs().format('YYYY/MM/DD').valueOf()),
      new Date(maxDate || dayjs().add(100, 'year').valueOf()),
      props.value ? new Date(dayjs(props.value).format('YYYY/MM/DD')) : new Date(),
    ),
  )
  /** 获取可选择的日期, 格式：1日 */
  const [dateArr, setDateArr] = useState(
    getDays(
      new Date(minDate || dayjs().format('YYYY/MM/DD').valueOf()),
      new Date(maxDate || dayjs().add(100, 'year').valueOf()),
      props.value ? new Date(dayjs(props.value).format('YYYY/MM/DD')) : new Date(),
    ),
  )
  /** 当前选中的数据 */
  const [chooseDate, setChooseDate] = useState(() => {
    const date = props.value ? new Date(dayjs(props.value).format('YYYY/MM/DD')) : new Date()
    return {
      year: yearArr.find(item => item.value == dayjs(date).format('YYYY')) || yearArr[0],
      month: monthArr.find(item => item.value == dayjs(date).format('MM')) || monthArr[0],
      date: dateArr.find(item => item.value == dayjs(date).format('DD')) || dateArr[0],
    }
  })
  /** 缓存当前选中的日期 */
  const cacheParams = useRef({
    chooseDate,
  })
  cacheParams.current.chooseDate = chooseDate
  /** 事件监听处理 */
  const onValueChange = (row: DateTypeArr[0], type: 'year' | 'month' | 'date') => {
    if (row && row.value == cacheParams.current.chooseDate[type].value)
      return

    const newDate = {
      ...cacheParams.current.chooseDate,
      [type]: row,
    }
    setChooseDate(newDate)
    if (props.onChange)
      props.onChange(dayjs(`${newDate.year.value}/${newDate.month.value}/${newDate.date.value}`).valueOf())
  }

  /** 年份改变，修改可选月份 */
  useEffect(() => {
    const { year, month } = chooseDate
    const newMonthArr = getMonths(
      new Date(minDate || dayjs().format('YYYY/MM/DD').valueOf()),
      new Date(maxDate || dayjs().add(100, 'year').format('YYYY/MM/DD').valueOf()),
      new Date(`${year.value}/${month.value}/10`),
    )
    setMonthArr(newMonthArr)
    const newDateArr = getDays(
      new Date(minDate || dayjs().format('YYYY/MM/DD').valueOf()),
      new Date(maxDate || dayjs().add(100, 'year').format('YYYY/MM/DD').valueOf()),
      new Date(`${year.value}/${month.value}/10`),
    )
    setDateArr(newDateArr)
  }, [chooseDate.year])

  /** 月份改变，修改可选日期 */
  useEffect(() => {
    const { year, month } = chooseDate
    const newDateArr = getDays(
      new Date(minDate || dayjs().format('YYYY/MM/DD').valueOf()),
      new Date(maxDate || dayjs().add(100, 'year').format('YYYY/MM/DD').valueOf()),
      new Date(`${year.value}/${month.value}/10`),
    )
    setDateArr(newDateArr)
  }, [chooseDate.month])

  return (
    <View style={styles.container}>
      {/* 年 */}
      <List
        containerStyle={styles.dateList}
        data={yearArr}
        rowHeight={rowHeight}
        value={chooseDate.year}
        onValueChange={row => onValueChange(row, 'year')}
      />
      {/* 月 */}
      <List
        containerStyle={styles.dateList}
        data={monthArr}
        rowHeight={rowHeight}
        value={chooseDate.month}
        onValueChange={row => onValueChange(row, 'month')}
      />
      {/* 日 */}
      <List
        containerStyle={styles.dateList}
        data={dateArr}
        rowHeight={rowHeight}
        value={chooseDate.date}
        onValueChange={row => onValueChange(row, 'date')}
      />
      {/* 选择区样式 */}
      <View style={styles.chooseArea} />
    </View>
  )
}
export default Index
