import createFormStore from './core'

export type CreateForm<T = any> = typeof createForm<T>

/**
 * 返回一个 form 实例，并且可以传入指定的字段进行渲染
 * @param target 组件对象，传入this即可
 * @param fields 需要
 * @returns form 实例
 */
function createForm<T = any>(target?, ...fields: string[]) {
  const form = createFormStore<T>()
  if (!target)
    return form

  const { componentDidMount, componentWillUnmount } = target
  target.componentDidMount = function (...args) {
    this.formUnChange = form.onChange((values, prevValues) => {
      // 如果没有传入 fields 就所有字段变化都触发render
      if (fields.length === 0) {
        this.forceUpdate()
        return
      }
      // 循环判断指定的字段有变化才触发render
      for (let i = 0; i < fields.length; i++) {
        const name = fields[i]
        if (prevValues[name] !== values[name]) {
          this.forceUpdate()
          break
        }
      }
    })
    return componentDidMount && componentDidMount.call(this, ...args)
  }
  target.componentWillUnmount = function (...args) {
    this.formUnChange && this.formUnChange()
    return componentWillUnmount && componentWillUnmount.call(this, ...args)
  }
  return form
}

export default createForm
