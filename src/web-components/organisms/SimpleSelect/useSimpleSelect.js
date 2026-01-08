// @flow

import { useEffect, useRef, useState } from 'react'

type OptionType = {
  icon?: Node | string,
  label: string,
  value: string,
}

type UseSimpleSelectProps = {
  defaultOption?: OptionType,
  onChange: (value: string) => void,
  options: Array<OptionType>,
  reset?: boolean,
}

const useSimpleSelect = ({
  options,
  defaultOption,
  reset,
  onChange,
}: UseSimpleSelectProps) => {
  const defaultOpt = defaultOption || options[0]

  const [selectedOption, setSelectedOption] = useState(defaultOpt)
  const [isSelectBoxOpen, setIsSelectBoxOpen] = useState(false)
  const [focusedIndex, setFocusedIndex] = useState<number>(0)
  const [typeAhead, setTypeAhead] = useState('')

  const typeAheadTimeout = useRef<?TimeoutID>(null)
  const optionRefs = useRef<any>(options.map(() => ({ current: null })))

  const filteredOptions: Array<OptionType> = options
    .filter((option: OptionType) => option.value !== selectedOption.value)
    .sort((a, b) => a.label.localeCompare(b.label))

  // Reset on prop change
  useEffect(() => {
    if (reset) setSelectedOption(defaultOpt)
  }, [reset])

  // Scroll into view when focused changes
  useEffect(() => {
    const focusedRef = optionRefs.current[focusedIndex]
    if (
      isSelectBoxOpen &&
      focusedRef &&
      focusedRef.current instanceof HTMLElement
    ) {
      focusedRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
      })
    }
  }, [focusedIndex, isSelectBoxOpen])

  // Clean up typeAhead timeout
  useEffect(
    () => () => {
      if (typeAheadTimeout.current) clearTimeout(typeAheadTimeout.current)
    },
    [],
  )

  const toggleSelectBox = () => setIsSelectBoxOpen((prev) => !prev)
  const closeSelectBox = () => setIsSelectBoxOpen(false)

  const handleSelect = (option: OptionType) => {
    setSelectedOption(option)
    onChange(option.value)
    setIsSelectBoxOpen(false)
    setFocusedIndex(0)
  }

  const handleKeyDown = (e: SyntheticKeyboardEvent<HTMLElement>) => {
    const lastIndex = filteredOptions.length - 1

    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setIsSelectBoxOpen(true)
      setFocusedIndex((prev) => (prev < lastIndex ? prev + 1 : 0))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setIsSelectBoxOpen(true)
      setFocusedIndex((prev) => (prev > 0 ? prev - 1 : lastIndex))
    } else if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      if (!isSelectBoxOpen) return
      const option = filteredOptions[focusedIndex]
      if (option) handleSelect(option)
    } else if (e.key === 'Escape') {
      setIsSelectBoxOpen(false)
    } else if (e.key.length === 1 && /\S/.test(e.key)) {
      // Type-ahead
      const char = e.key.toLowerCase()
      const newTypeAhead = typeAhead + char
      setTypeAhead(newTypeAhead)

      const matchIndex = filteredOptions.findIndex((option) =>
        option.label.toLowerCase().startsWith(newTypeAhead),
      )
      if (matchIndex >= 0) setFocusedIndex(matchIndex)

      if (typeAheadTimeout.current) clearTimeout(typeAheadTimeout.current)
      typeAheadTimeout.current = setTimeout(() => setTypeAhead(''), 1000)
    }
  }

  return {
    selectedOption,
    isSelectBoxOpen,
    focusedIndex,
    filteredOptions,
    optionRefs,
    toggleSelectBox,
    closeSelectBox,
    handleSelect,
    handleKeyDown,
    setFocusedIndex,
  }
}

export default useSimpleSelect
