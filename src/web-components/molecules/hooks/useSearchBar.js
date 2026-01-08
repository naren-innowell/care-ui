// @flow

import { useState } from 'react'

const useSearchBar = () => {
  const [searchString, setSearchString] = useState('')

  const handleOnChange = (e: SyntheticInputEvent<>) => {
    setSearchString(e.target.value)
  }

  const clearSearch = () => {
    setSearchString('')
  }

  return {
    searchString,
    handleOnChange,
    clearSearch,
  }
}

export default useSearchBar
