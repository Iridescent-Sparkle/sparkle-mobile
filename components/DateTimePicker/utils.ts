import dayjs from 'dayjs'

/** 根据最小日期和最大日期，导出所有符合条件的日期，格式如下：2022年8月25日 周五 */
export function getDates(minDate: Date, maxDate: Date) {
  const dates: DateTypeArr = []
  let date = minDate
  /** 获取当前年份 */
  const year = new Date().getFullYear()
  while (date <= maxDate) {
    const dataYear = date.getFullYear()
    if (year == dataYear) {
      dates.push({
        value: dayjs(date).format('YYYY/MM/DD'),
        label: `${date.getMonth() + 1}月${date.getDate()}日 ${getWeekStr(date.getDay())}`,
      })
    }
    else {
      dates.push({
        value: dayjs(date).format('YYYY/MM/DD'),
        label: `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日 ${getWeekStr(date.getDay())}`,
      })
    }
    date = new Date(date.getTime() + 24 * 60 * 60 * 1000)
  }
  return dates
}

/** 获取星期几 */
function getWeekStr(week: number) {
  switch (week) {
    case 0:
      return '周日'
    case 1:
      return '周一'
    case 2:
      return '周二'
    case 3:
      return '周三'
    case 4:
      return '周四'
    case 5:
      return '周五'
    case 6:
      return '周六'
    default:
      return ''
  }
}

/** 根据minDate和maxDate获取到当前可选的所有年份 */
export function getYears(minDate: Date, maxDate: Date) {
  const years: DateTypeArr = []
  let year = minDate.getFullYear()
  while (year <= maxDate.getFullYear()) {
    years.push({
      value: year,
      label: `${year}年`,
    })
    year++
  }
  return years
}

/** 根据minDate和maxDate和当前选中的年份，获取到当前可选的所有月份 */
export function getMonths(minDate: Date, maxDate: Date, date: Date) {
  const months: DateTypeArr = []
  const year = date.getFullYear()
  let month = 0
  while (month < 12) {
    if (year === minDate.getFullYear() && month < minDate.getMonth()) {
      month++

      continue
    }
    if (year === maxDate.getFullYear() && month > maxDate.getMonth())
      break

    months.push({
      value: month + 1,
      label: `${month + 1}月`,
    })
    month++
  }
  return months
}

/** 根据minDate和maxDate和当前选中的年份，月份，获取到当前可选的所有日期 */
export function getDays(minDate: Date, maxDate: Date, date: Date) {
  const days: DateTypeArr = []
  const year = date.getFullYear()
  const month = date.getMonth()
  /** 获取当前月份的天数 */
  const dayCount = new Date(year, month + 1, 0).getDate()
  let day = 1
  while (day <= dayCount) {
    if (year === minDate.getFullYear() && month === minDate.getMonth() && day < minDate.getDate()) {
      day++

      continue
    }
    if (year === maxDate.getFullYear() && month === maxDate.getMonth() && day > maxDate.getDate())
      break

    days.push({
      value: day,
      label: `${day}日`,
    })
    day++
  }
  return days
}

/** 导出小时数 */
export function getHours() {
  const hours: DateTypeArr = []
  for (let i = 0; i < 24; i++)
    hours.push({ value: i, label: `${i}时` })

  return hours
}

/** 导出分钟数 */
export function getMinutes() {
  const minutes: DateTypeArr = []
  for (let i = 0; i < 60; i++)
    minutes.push({ value: i, label: `${i}分` })

  return minutes
}

/** 展示数据 */
export function showTextByObj(date: string) {
  const data = dayjs(date)
  const week = data.format('d')
  return data.format('YYYY年M月D日周d  HH：mm').replace(`周${week}`, getWeekStr(Number(week)))
}

/** 数据结构导出各层使用 */
export type DateTypeArr = { value: number | string, label: string }[]
