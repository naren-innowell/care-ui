// @flow

import React from 'react'
import { useFela } from 'react-fela'

import {
  errorTextStyle,
  labelStyles,
  sizeStyle,
  wrapperStyle,
} from './Checkbox.style'

type PropsType = {
  +ariaLabel?: string,
  +dataTestId?: string,
  error?: string,
  +inputAttributes: {
    +checked?: boolean,
    +disabled?: boolean,
    +id: string,
    +label?: string,
    +name: string,
    +onBlur?: (e: SyntheticInputEvent<>) => void,
    +onChange?: (e: SyntheticInputEvent<>) => void,
    +partial?: boolean,
    +required?: boolean,
    +value?: string | boolean | number,
  },
  size?: 'lg' | 'md',
}

const Checkbox = (props: PropsType) => {
  const { inputAttributes, error, dataTestId, ariaLabel, size = 'md' } = props
  const {
    id,
    name,
    label,
    value,
    checked = false,
    onChange,
    onBlur,
    disabled,
    partial = false,
    required = false,
  } = inputAttributes

  const { css } = useFela({ ...inputAttributes, size })

  const setIndeterminate = (input: ?HTMLInputElement) => {
    if (input) {
      const inputElement = input
      inputElement.indeterminate = partial
    }
  }

  return (
    <>
      <div
        data-testid={dataTestId}
        aria-label={ariaLabel}
        className={css(sizeStyle, wrapperStyle)}
      >
        <span>
          <input
            type="checkbox"
            id={id}
            name={name}
            value={value}
            checked={!!checked}
            onBlur={onBlur}
            onChange={onChange}
            onClick={onBlur}
            disabled={disabled}
            required={required}
            ref={setIndeterminate}
          />
        </span>

        {label && (
          <label htmlFor={id} className={css(labelStyles)} aria-labelledby={id}>
            {label}
          </label>
        )}
      </div>

      {error && <div className={css(errorTextStyle)}>{error}</div>}
    </>
  )
}

export default Checkbox
