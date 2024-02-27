import { c, create } from '@/core/styleSheet'

export default create({
  container: {
    backgroundColor: '#fff',
    height: 600,
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'relative',
  },
  listContainer: {

  },
  dateList: {
    flex: 1,
  },
  smallFlatList: {
    width: 162,
  },
  flatList: {
    paddingTop: 240,
    paddingBottom: 300,
  },
  item: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemText: {
    color: c.black45,
    fontSize: 28,
    fontWeight: '500',
  },
  activeItem: {

  },
  activeItemText: {
    fontSize: 36,
    fontWeight: '500',
    color: c.black85,
  },
  chooseArea: {
    position: 'absolute',
    top: 240,
    left: -10,
    backgroundColor: c.gray,
    width: 696,
    height: 80,
    zIndex: -1,
    borderRadius: 8,
  },
})
