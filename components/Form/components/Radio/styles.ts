import { c, create } from '@/core/styleSheet'

export default create({
  body: {
    flexDirection: 'row',
  },
  item: {
    flexDirection: 'row',
    marginRight: 110,
    alignItems: 'center',
  },
  text: {
    fontSize: 28,
    color: c.black85,
    marginLeft: 24,
  },
  forbidText: {
    fontSize: 28,
    color: c.black25,
  },
})
