import { c, create } from '@/core/styleSheet'

export default create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  placeholder: {
    fontSize: 28,
    color: c.placeholder,
  },
  value: {
    fontSize: 28,
    color: c.black85,
    flex: 1,
  },
})
