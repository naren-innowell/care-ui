// @flow

import React from 'react'
import { useFela } from 'react-fela'

import {
  errorTextStyle,
  inputStyle,
  labelStyle,
  sizeStyle,
  wrapperStyle,
} from './Input.style'

type PropsType = {
  autoComplete?: string,
  disabled?: boolean,
  error?: string,
  fieldDataTestId?: string,
  halfWidth?: boolean,
  id: string,
  label?: string,
  labelDataTestId?: string,
  max?: number,
  min?: number,
  name: string,
  onBlur?: () => void,
  onChange: (e: any) => void,
  onFocus?: (e: any) => void,
  onInput?: (e: any) => void,
  onInvalid?: (e: any) => void,
  onKeyDown?: (e: any) => void,
  pattern?: string,
  placeholder?: string,
  readonly?: boolean,
  required?: boolean,
  size?: 'lg' | 'md',
  title?: string,
  type?: 'text' | 'number' | 'email' | 'password',
  value: string | number,
}

const Input = (props: PropsType) => {
  const {
    autoComplete,
    disabled = false,
    error,
    fieldDataTestId,
    id,
    label,
    labelDataTestId,
    max,
    min,
    name,
    onBlur,
    onChange,
    onFocus,
    onInput,
    onInvalid,
    onKeyDown,
    pattern,
    placeholder,
    readonly,
    required,
    title,
    type,
    value,
  } = props

  const { css } = useFela(props)

  return (
    <div className={css(wrapperStyle)}>
      {label && (
        <label
          htmlFor={id}
          className={css(labelStyle)}
          data-testid={labelDataTestId}
        >
          {label}
        </label>
      )}

      <input
        autoComplete={autoComplete}
        className={css(sizeStyle, inputStyle)}
        data-testid={fieldDataTestId}
        disabled={disabled}
        id={id}
        max={max}
        min={min}
        name={name}
        onKeyDown={onKeyDown}
        onBlur={onBlur}
        onChange={onChange}
        onFocus={onFocus}
        onInput={onInput}
        onInvalid={onInvalid}
        pattern={pattern}
        placeholder={placeholder}
        readOnly={readonly}
        required={required}
        title={title}
        type={type}
        value={value}
      />

      {error && <div className={css(errorTextStyle)}>{error}</div>}
    </div>
  )
}

export default Input
