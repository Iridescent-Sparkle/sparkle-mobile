/**
 * @Date 2022-06-16 14:36:16
 * @Name Form表单item
 * @Description 用于展示带label标签的表单项
 * @Preview https://cdn.yupaowang.com/yupao_app/component-selectcity.jpg
 * @HideDoc true
 */

import { cloneElement, useContext, useEffect, useState } from 'react'
import Context from './context'

interface ItemProps {
  children: any
  name: string
  initValue?: any
}

function Item(props: ItemProps) {
  const { children, name, initValue } = props

  const store = useContext(Context)
  /** 保存表单项数据 */
  const [value, setValue] = useState(store.getValues()[name])

  useEffect(() => {
    // 监听值的改变，触发渲染当前item
    return store.onChange((values, prevValues) => {
      // 值变化了才更新
      if (prevValues[name] !== values[name])
        setValue(values[name])
    })
  }, [store, name])

  // 设置一次 initValue 值
  useEffect(() => {
    if (name && initValue !== undefined)
      store.setValues({ [name]: initValue })
  }, [name, store])

  // 挂载的时候判断一下 store.getValues() 是否有值，有值就更新一下
  useEffect(() => {
    const values = store.getValues()
    if (name && values[name] !== value)
      setValue(values[name])
  }, [name, store])

  if (!name)
    return children

  const { onChange } = children

  return cloneElement(children, {
    value,
    onChange: (value) => {
      store.setValues({ [name]: value })
      onChange && onChange(value)
    },
  })
}

export default Item
