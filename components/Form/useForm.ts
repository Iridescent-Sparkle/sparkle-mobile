import { useEffect, useState } from 'react'
import type { FormInstance } from './core'
import createFormStore from './core'

function useForm<T>(form?: FormInstance<T>) {
  /** 保存数据store */
  const [store] = useState(form || createFormStore<T>())

  useEffect(() => {
    return () => {
      // 清除监听
      store.clearListener()
    }
  }, [store])

  return store
}

export default useForm
