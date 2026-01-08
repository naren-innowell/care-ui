// @flow

import React, { useRef } from 'react'
import { useFela } from 'react-fela'
import { useClickAway } from 'react-use'

import { truncateText } from 'platform_web/utility/formatText'
import { Box, Button, DropDownMenuItem, ScrollableBox } from 'web-components'
import { ChevronDownIcon } from 'web-components/atoms/icons-new'
import FlexContainer from 'web-components/layouts/Flex/FlexContainer'

import {
  labelStyle,
  optionImageStyle,
  optionsContainer,
  selectBoxWrapper,
} from './SimpleSelect.style'
import useSimpleSelect from './useSimpleSelect'

type OptionType = {
  icon?: Node | string,
  label: string,
  value: string,
}

type SimpleSelectProps = {
  dataTestIdForDropdown?: string,
  dataTestIdForDropdownOptions?: string,
  defaultOption?: OptionType,
  hasScrollbox?: boolean,
  id?: string,
  label?: string,
  maxHeight?: string,
  name?: string,
  onChange: (value: string) => void,
  options: Array<OptionType>,
  position?: string,
  reset?: boolean,
  size?: 'lg' | 'md' | 'sm',
  truncateLabel?: boolean,
  variant?: 'primary' | 'secondary' | 'text' | 'pill' | 'danger',
}

const SimpleSelect = (props: SimpleSelectProps) => {
  const {
    defaultOption,
    label,
    options,
    onChange,
    name,
    maxHeight,
    hasScrollbox = false,
    id,
    dataTestIdForDropdown,
    dataTestIdForDropdownOptions,
    size = 'md',
    variant = 'secondary',
    truncateLabel = false,
    reset,
  } = props

  const { css } = useFela({ ...props })

  const OptionsContainerComponent = hasScrollbox ? ScrollableBox : Box
  const ref = useRef(null)

  const {
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
  } = useSimpleSelect({ options, defaultOption, reset, onChange })

  useClickAway(ref, closeSelectBox)

  // Label for dropdown
  const getLabel = (option) => {
    // options with icon/image
    const { icon } = option || {}

    if (icon) {
      return (
        <FlexContainer alignItems="center" wrap="nowrap">
          <img src={icon} alt="flag" className={css(optionImageStyle)} />
          {option?.label}
        </FlexContainer>
      )
    }
    return (
      <div>{truncateLabel ? truncateText(option?.label) : option?.label}</div>
    )
  }

  return (
    <div
      className={css(selectBoxWrapper)}
      ref={ref}
      name={name}
      id={id}
      data-testid={dataTestIdForDropdown}
    >
      {label && (
        <label htmlFor={name} className={css(labelStyle)}>
          {label}
        </label>
      )}

      <Button
        id={id}
        onKeyDown={handleKeyDown}
        variant={variant}
        onClick={toggleSelectBox}
        size={size}
        fullWidth
        active={isSelectBoxOpen}
        rightIcon={ChevronDownIcon}
        compactPadding={!!selectedOption?.icon}
      >
        {getLabel(selectedOption)}
      </Button>

      {isSelectBoxOpen && (
        <div className={css(optionsContainer)}>
          <OptionsContainerComponent maxHeight={maxHeight || '250px'}>
            {filteredOptions.map((option, index) => {
              const isFocused = index === focusedIndex

              return (
                <DropDownMenuItem
                  ref={optionRefs.current[index]}
                  onClick={() => handleSelect(option)}
                  onMouseEnter={() => setFocusedIndex(index)}
                  dataTestId={dataTestIdForDropdownOptions}
                  key={option.value}
                  isFocused={isFocused}
                >
                  {option.icon ? getLabel(option) : option.label}
                </DropDownMenuItem>
              )
            })}
          </OptionsContainerComponent>
        </div>
      )}
    </div>
  )
}

export default SimpleSelect
