/*
 * @Date: 2022-06-28 10:53:02
 * @Description: 通用类型定义
 */

interface FormItemChildrenProps<T = any> {
  value?: T
  onChange?: (value: T) => void
}
