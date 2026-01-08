// @flow

import React from 'react'
import { useFela } from 'react-fela'

import {
  errorTextStyle,
  labelStyle,
  textAreaStyle,
  wrapperStyle,
} from './TextArea.style'

type PropsType = {
  cols?: number,
  dataTestId?: string,
  error?: string,
  id: string,
  label?: string,
  labelDataTestId?: string,
  name: string,
  onBlur?: (event: SyntheticInputEvent<HTMLInputElement>) => void,
  onChange: (event: SyntheticInputEvent<HTMLInputElement>) => void,
  placeholder?: string,
  rows?: number,
  value: string,
}

const TextArea = (props: PropsType) => {
  const {
    id,
    name,
    rows,
    cols,
    placeholder,
    onBlur,
    onChange,
    value,
    dataTestId,
    label,
    error,
    labelDataTestId,
  } = props

  const { css } = useFela()

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

      <textarea
        id={id}
        name={name}
        rows={rows}
        cols={cols}
        placeholder={placeholder}
        onBlur={onBlur}
        onChange={onChange}
        value={value}
        className={css(textAreaStyle)}
        data-testid={dataTestId}
      />

      {error && <div className={css(errorTextStyle)}>{error}</div>}
    </div>
  )
}

export default TextArea
