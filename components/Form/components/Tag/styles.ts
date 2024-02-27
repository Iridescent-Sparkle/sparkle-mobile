import { c, create } from '@/core/styleSheet'

export default create({
  body: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 70,
    lineHeight: 70,
    backgroundColor: '#F5F6FA',
    borderRadius: 8,
    marginRight: 16,
    paddingHorizontal: 24,
    marginTop: -28,
  },
  text: {
    fontSize: 28,
    color: c.black85,
  },
  active: {
    backgroundColor: '#E5F4FF',
  },
  activeText: {
    fontSize: 28,
    color: c.primary,
  },
})
