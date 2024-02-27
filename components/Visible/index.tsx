type Props = {
  /** 是否显示 */
  visible: any
  /** 包裹的子组件 */
  children: any
}

const Index = ({ visible, children }: Props) => {
  if (!visible) return null
  return children
}

export default Index
