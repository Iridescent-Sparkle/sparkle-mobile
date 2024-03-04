import { Search, Toast } from '@fruits-chain/react-native-xiaoshu'
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons'
import { create } from '@/core/styleSheet'

function SearchBar() {
  const [value, setValue] = useState('')

  const onSearch = () => {
    const { close } = Toast.loading('加载中')
    setTimeout(() => {
      close()
    }, 800)
  }

  return (
    <Search
      key="keyword"
      placeholder="请输入关键词搜索"
      value={value}
      onChangeText={setValue}
      onSearch={onSearch}
      style={styles.search}
      showSearchButton={false}
      autoSearch
      onSearchDebounceWait={800}
      suffix={<Ionicons name="options-outline" size={24} color="#246BFD" />}
    />
  )
}

const styles = create({
  search: {
    width: '100%',
    height: 96,
    borderRadius: 24,
    paddingHorizontal: 16,
  },
})

export default SearchBar
