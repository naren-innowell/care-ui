// @flow

import React from 'react'
import { useFela } from 'react-fela'

import { IconNew } from 'web-components'
import { CloseIcon, SearchIcon } from 'web-components/atoms/icons-new'

import { inputStyle, searchBarStyle, sizeStyle } from './SearchBar.style'

type PropsType = {
  ariaLabel?: string,
  clearSearch: () => void,
  dataTestId?: string,
  fullWidth?: boolean,
  inputAttributes: {
    id?: string,
    name?: string,
    onChange: (e: SyntheticInputEvent<>) => void,
    placeholder: string,
    value?: string,
  },
  isDisabled?: boolean,
  size?: 'lg' | 'md',
}

const SearchBar = (props: PropsType): React$Node => {
  const {
    size = 'md',
    inputAttributes,
    dataTestId,
    ariaLabel,
    clearSearch,
    isDisabled = false,
  } = props
  const { id, value, onChange, placeholder } = inputAttributes
  const { css } = useFela({ ...props })

  return (
    <div
      className={css(searchBarStyle, sizeStyle)}
      data-testid={dataTestId}
      aria-label={ariaLabel}
    >
      <IconNew
        as={SearchIcon}
        color={isDisabled ? 'subtitle' : 'positive'}
        size={size}
        {...(!isDisabled && { onClick: clearSearch })}
      />

      <input
        id={id}
        type="text"
        value={value}
        onChange={(e) => onChange(e)}
        className={css(inputStyle, sizeStyle)}
        placeholder={placeholder}
        disabled={isDisabled}
      />

      {value && (
        <IconNew
          as={CloseIcon}
          onClick={clearSearch}
          color="positive"
          size={size}
        />
      )}
    </div>
  )
}

export default SearchBar
