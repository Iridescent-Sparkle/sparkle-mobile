/**
 * @Date 2022-06-16 13:45:58
 * @Name 表单组件
 * @Description 用于包裹输入框、选择器等内部组件
 */

import type { ForwardRefExoticComponent } from 'react'
import React, { forwardRef, useImperativeHandle } from 'react'
import Context from './context'
import type { FormInstance } from './core'
import createFormStore from './core'
import type { CreateForm } from './createForm'
import createForm from './createForm'
import Item from './Item'
import Layout from './Layout'
import useForm from './useForm'
import useFormValues from './useFormValues'

export type { FormInstance } from './core'
export { createFormStore, useForm, useFormValues }

interface FormProps {
  children: any
  form?: FormInstance
}

interface Components {
  Item?: typeof Item
  Layout?: typeof Layout
  useForm?: typeof useForm
  createForm?: CreateForm
}

const Form: React.FC<any> & Components & ForwardRefExoticComponent<any> = forwardRef((props: FormProps, ref) => {
  const { children, form } = props
  const store = useForm(form)

  useImperativeHandle(ref, () => store, [store])

  return (
    <Context.Provider value={store}>
      {children}
    </Context.Provider>
  )
})

Form.Item = Item
Form.Layout = Layout
Form.useForm = useForm
Form.createForm = createForm

export default Form
