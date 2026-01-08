// @flow

import React from 'react'
import { useFela } from 'react-fela'

import { labelStyles, sizeStyle, wrapperStyle } from './RadioButton.style'

type PropsType = {
  +ariaLabel?: string,
  +dataTestId?: string,
  +inputAttributes: {
    +checked?: boolean,
    +disabled?: boolean,
    +id: string,
    +label: string,
    +name: string,
    +onBlur?: (e: SyntheticInputEvent<>) => void,
    +onChange?: (e: SyntheticInputEvent<>) => void,
    +onClick?: (e: SyntheticInputEvent<>) => void,
    readOnly?: boolean,
    +type?: 'radio' | 'checkbox',
    +value?: string | number | boolean,
  },
  size?: 'lg' | 'md',
  wrapLabel?: boolean,
}

const RadioButton = (props: PropsType) => {
  const { inputAttributes, ariaLabel, size = 'md', wrapLabel = false } = props
  const {
    id,
    name,
    label,
    value,
    checked,
    onChange,
    onBlur,
    onClick,
    type = 'radio',
    disabled,
    readOnly,
  } = inputAttributes

  const { css } = useFela({ ...inputAttributes, size, wrapLabel, checked })
  return (
    <label
      data-testid={`radio-button-${checked ? 'checked' : 'unchecked'}`}
      htmlFor={id}
      aria-label={ariaLabel}
      className={css(sizeStyle, wrapperStyle, labelStyles)}
    >
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        onBlur={onBlur}
        onClick={onClick}
        disabled={disabled}
        readOnly={readOnly}
        role={type}
      />
      {label}
    </label>
  )
}

export default RadioButton
