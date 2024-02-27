/*
 * @Date: 2022-05-24 19:34:47
 * @Description: 描述
 */
import { c, create } from '@/core/styleSheet'

export default create({
  mask: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    position: 'relative',
  },
  body: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#ffffff',
    width: '100%',
    height: 750,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    paddingHorizontal: 32,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 80,
  },
  title: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontWeight: '500',
    fontSize: 28,
    color: c.black85,
  },
  cancel: {
    fontWeight: '400',
    fontSize: 28,
    color: c.black45,
  },
  confirm: {
    fontWeight: '500',
    fontSize: 28,
    color: c.primary,
  },
  chooseDate: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 32,
  },
  chooseDateText: {
    fontWeight: '400',
    fontSize: 32,
    color: c.black65,
  },
})
