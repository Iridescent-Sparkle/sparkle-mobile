import React, { memo, useEffect, useRef, useState } from 'react'
import type { ViewStyle } from 'react-native'
import { FlatList, Text, View } from 'react-native'
import PressView from '../TouchView'
import styles from './styles'
import type { DateTypeArr } from './utils'

interface Props {
  value: DateTypeArr[0]
  /** 数据源 */
  data: DateTypeArr
  /** 行高 */
  rowHeight?: number
  /** 列表样式 */
  containerStyle?: ViewStyle
  // 滑动中
  onScroll?: () => void
  /** 选中的值，返回给调用组件 */
  onValueChange?: (row: DateTypeArr[0]) => void
  /** 初始化的数量 */
  initialNumToRender?: number
  /** 是否初始化滚动 */
  shouldInitialScroll?: boolean
}

/** 渲染列表项 */
// eslint-disable-next-line react/display-name
const RenderItem = memo(
  ({ item, value, rowHeight, onItemPress }: any) => {
    return (
      <PressView

        style={[styles.item, { height: rowHeight }, item.value == value.value ? styles.activeItem : {}]}
        onPress={() => onItemPress(item)}
      >
        <Text style={[styles.itemText, item.value == value.value ? styles.activeItemText : {}]}>{item.label}</Text>
      </PressView>
    )
  },
  (prevProps, nextProps) => {
    /** 需要触发更新条件的情况清单 */
    let needUpdate = false
    /** 1. 值发生变化 */
    if (prevProps.item.value !== nextProps.item.value)
      needUpdate = true

    /** 2. 选中的值变为未选中 */
    if (prevProps.item.value == prevProps.value.value && nextProps.item.value !== nextProps.value.value)
      needUpdate = true

    /** 3. 之前未选中的值，现在选中了 */
    if (nextProps.item.value == nextProps.value.value && prevProps.item.value !== prevProps.value.value)
      needUpdate = true

    /** 返回值需要取反 */
    return !needUpdate
  },
)

function Index(props: Props) {
  const { data, rowHeight, containerStyle = {}, onScroll, onValueChange, value, initialNumToRender = 10, shouldInitialScroll = true } = props
  // console.log(value)
  /** flatlist权柄 */
  const flatlistRef = useRef(null)
  /** 防抖专用 */
  const timer = useRef(null)
  /** 初始化对应的initIndex值 */
  const initIndex = useRef(
    (() => {
      const index = data.findIndex(item => item.value == value?.value)
      return index == -1 ? 0 : index
    })(),
  )
  /** 保存滚动信息 */
  const scrollConfig = useRef({
    currentOffset: initIndex.current * rowHeight,
    currentIndex: initIndex.current,
  })
  /** 强制渲染 */
  const [, forceUpdate] = useState({})

  /** 滚动到指定位置 */
  // useEffect(() => {
  //   const item = data.find((item) => item.value == value.value)
  //   if (item) {
  //     let index = data.findIndex((item) => item.value == value.value)
  //     if (index > data.length - 1) {
  //       index = 0
  //     }
  //     scrollToIndex.current(index)
  //   } else {
  //     scrollToIndex.current(0)
  //     onValueChange?.(data[0])
  //   }
  //
  // }, [data, value.value])
  /** 保存初始时数据长度 */
  const prevDataLength = useRef(data.length)
  // console.log(value, 'value')
  useEffect(() => {
    /** 没有初始值时默认选中第一个 */
    const item = data.find(item => item.value == value?.value)
    if (!item)
      typeof data[0] != 'undefined' && onValueChange?.(data[0])

    // 当data变化过后，判断上一次和这一次的变化，如果时间减少了，那么就自动滑动到最后一个数据，比如31到28号，自动滑动到28号
    if (prevDataLength.current !== data.length) {
      if (data.length < prevDataLength.current) {
        setTimeout(() => {
          scrollToIndex.current(data.length - 1)
          onValueChange?.(data[data.length - 1])
        }, 100)
      }
      prevDataLength.current = data.length
    }
    // 值更新
    if (item) {
      const itemIndex = data.findIndex(item => item.value == value?.value)
      onValueChange?.(item)
      scrollToIndex.current(itemIndex)
    }
  }, [data, value?.value])

  /** 滚动到某个位置 */
  const scrollToIndex = useRef((index) => {
    flatlistRef.current?.scrollToOffset({ offset: index * rowHeight, animated: true })
  })

  useEffect(() => {
    scrollToIndex.current(scrollConfig.current.currentIndex)
  }, [scrollConfig.current.currentOffset])

  /** 滚动结束的事件监听 */
  const onScrollEndHandle = ({ nativeEvent }) => {
    timer.current = setTimeout(() => {
      const { y } = nativeEvent.contentOffset
      let index = Math.min(Math.round(y / rowHeight), data.length - 1)
      if (index > data.length - 1)
        index = data.length - 1
      else if (index < 0)
        index = 0

      const item = data[index]
      scrollConfig.current.currentOffset = y
      scrollConfig.current.currentIndex = index
      onValueChange?.(item)
      forceUpdate({})
    }, 100)
  }

  /** 滚动事件监听 */
  const onScrollHandle = () => {
    onScroll?.()
    timer.current && clearTimeout(timer.current)
  }

  /** 卡片点击事件 */
  const onItemPress = (row) => {
    const index = data.findIndex(item => item.value == row.value)
    if (index > data.length - 1)

      row = data[0]

    if (row.value != value.value) {
      onValueChange?.(row)
      scrollToIndex.current(index)
    }
  }

  return (
    <View style={[styles.listContainer, containerStyle]}>
      <FlatList
        contentContainerStyle={styles.flatList}
        ref={flatlistRef}
        data={data}
        getItemLayout={(data, index) => ({ length: rowHeight, offset: index * rowHeight, index })}
        initialScrollIndex={shouldInitialScroll ? initIndex.current : undefined}
        initialNumToRender={initialNumToRender}
        bounces={false}
        keyExtractor={(item, index) => `${item.value}_${index}`}
        renderItem={({ item, index }) => (
          <RenderItem rowHeight={rowHeight} item={item} value={value} index={index} onItemPress={onItemPress} />
        )}
        showsVerticalScrollIndicator={false}
        onMomentumScrollEnd={onScrollEndHandle}
        onScrollEndDrag={onScrollEndHandle}
        onScroll={onScrollHandle}
      />
    </View>
  )
}
export default Index
