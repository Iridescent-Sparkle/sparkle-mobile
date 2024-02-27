import { createContext } from 'react'
import type { FormInstance } from './core'

const Context = createContext<FormInstance>(null)

export default Context
