// @flow

import React, { useEffect, useState } from 'react'
import { useFela } from 'react-fela'
import { uniqueId } from 'lodash'

import { Icon } from 'web-components'
import ArrowDown from 'web-components/atoms/icons/arrow-down.svg'

import { arrowStyle, containerStyle, selectStyle } from './Select.style'

type StringValue = { [name: string]: string }
type NumberValue = { [name: string]: number }
type BooleanValue = { [name: string]: boolean }

type PropsType = {
  ariaLabel?: string,
  dataTestId?: string,
  id?: string,
  labelKey?: string,
  name?: string,
  onBlur?: (e: SyntheticEvent<HTMLSelectElement>) => void,
  onChange?: (e: SyntheticEvent<HTMLSelectElement>) => void,
  options: $ReadOnlyArray<StringValue | NumberValue | BooleanValue | string>,
  size?: 'md',
  value?: string | number | boolean,
  valueKey?: string,
}

const Select = ({
  options,
  onChange,
  onBlur,
  valueKey = 'value',
  labelKey = 'label',
  value,
  name,
  id,
  dataTestId,
  ariaLabel,
  size,
}: PropsType) => {
  const [selected, setSelected] = useState()
  const { css } = useFela({ size })

  useEffect(
    () => {
      if (value) {
        setSelected(value)
        return
      }

      if (typeof options[0] === 'object') {
        if (!valueKey) {
          throw new Error('valueKey is required when options are objects')
        }
        setSelected(options[0][valueKey])
      } else {
        setSelected(options[0])
      }
    },
    [value, options, valueKey],
  )

  const handleSelectChange = event => {
    const { value: targetValue } = event.target

    setSelected(targetValue)

    if (onChange) {
      onChange(event)
    }
  }

  const objectOption = option => {
    if (!valueKey || !labelKey) {
      throw new Error(
        'valueKey and labelKey are required when options are objects',
      )
    }

    const optionValue = option[valueKey]
    const optionLabel = option[labelKey]

    return (
      <option key={uniqueId('option-')} value={optionValue}>
        {optionLabel}
      </option>
    )
  }

  const stringOption = option => (
    <option key={uniqueId('option-')} value={option}>
      {option}
    </option>
  )

  const renderedOption = option =>
    typeof option === 'object' ? objectOption(option) : stringOption(option)

  return (
    <div className={css(containerStyle)}>
      <select
        value={selected}
        onChange={handleSelectChange}
        onBlur={onBlur}
        className={css(selectStyle)}
        name={name}
        id={id}
        data-testid={dataTestId}
        aria-label={ariaLabel}
      >
        {options?.map(option => renderedOption(option))}
      </select>
      <span className={css(arrowStyle)}>
        <Icon as={ArrowDown} scale={0.7} />
      </span>
    </div>
  )
}

export default Select
