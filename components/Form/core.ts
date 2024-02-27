/** 深拷贝，不能处理日期和函数 */
function deepClone<T>(any: T): T {
  if (any === null)
    return null

  if (typeof any !== 'object')
    return any

  const obj: any = Array.isArray(any) ? [] : {}
  for (const key in any) {
    if (typeof any[key] === 'object')
      obj[key] = deepClone(any[key])
    else
      obj[key] = any[key]
  }
  return obj
}

export type FormInstance<T = any> = ReturnType<typeof createFormStore<T>>

function createFormStore<T = any>() {
  const values = {} as T
  const listener = []

  function onChange(fn) {
    listener.push(fn)
    return () => {
      listener.splice(listener.indexOf(fn), 1)
    }
  }

  /** 设置表单的值 */
  function setValues(newValues) {
    // 保存上一次的值
    const prevValues = deepClone(values)
    // 当前的值
    Object.assign(values, newValues)
    listener.forEach(item => item(values, prevValues))
  }

  /** 获取表单值 */
  function getValues(clone = false): T {
    return clone ? deepClone(values) : values
  }

  /** 清空监听 */
  function clearListener() {
    listener.length = 0
  }

  return {
    setValues,
    getValues,
    onChange,
    clearListener,
  }
}

export default createFormStore
