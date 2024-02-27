/*
 * @Date: 2022-06-16 14:22:21
 * @Description: context
 */

import { createContext } from 'react'
import type { FormInstance } from './core'

const Context = createContext<FormInstance>(null)

export default Context
