/*
 * @Date: 2022-06-30 10:21:48
 * @Description: form 表单值改变就会触发
 */

import { useEffect, useState } from 'react'
import type { FormInstance } from './core'

/** 监听form的改变，第一个参数是form，后面的参数就是监听的字段，什么字段更新了才触发渲染 */
function useFormValues<T = any[]>(form: FormInstance, ...deps: string[]): T {
  /** 保存表单所有数据 */
  const [values, setValues] = useState<any>([form.getValues(), {}])

  useEffect(() => {
    const unChange = form.onChange((value, prevValues) => {
      // 没有指定依赖值直接渲染
      if (!deps) {
        setValues([value, prevValues])
        return
      }
      // 循环判断指定的值是否有变化，有变化在触发渲染
      for (let i = 0; i < deps.length; i++) {
        const name = deps[i]
        const v = value[name]
        const pv = prevValues[name]
        if (v !== pv) {
          setValues([value, prevValues])
          break
        }
      }
    })
    return () => unChange()
  }, [deps, form])

  return values
}

export default useFormValues
