/*
 * @Date: 2022-06-27 17:54:11
 * @Description:
 */
import { c, create } from '@/core/styleSheet'

export default create({
  body: {
    // backgroundColor: '#fff',
    // padding: 24,
  },
  input: {
    padding: 0,
    margin: 0,
    textAlignVertical: 'top',
    height: 240,
    fontSize: 28,
    color: c.black85,
  },
  placeholderTextColor: {
    fontSize: 28,
    color: c.placeholder,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  clear: {
    fontSize: 28,
    color: c.primary,
  },
  length: {
    fontSize: 28,
    color: c.black85,
  },
})
