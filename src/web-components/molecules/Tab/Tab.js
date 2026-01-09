// @flow

import React from 'react'
import { useFela } from 'react-fela'

import { sizeStyle, tabStyle } from './Tab.style'

type PropsType = {
  dataTestId?: string,
  disabled: boolean,
  isActive: boolean,
  label: string,
  onClick: () => void,
  size?: 'lg' | 'md',
}

const Tab = (props: PropsType): React$Node => {
  const { label, onClick, dataTestId } = props

  const { css } = useFela({ ...props })

  return (
    <div
      onClick={onClick}
      onKeyPress={onClick}
      role="button"
      tabIndex={0}
      className={css(tabStyle, sizeStyle)}
      data-testid={dataTestId}
    >
      {label}
    </div>
  )
}

export default Tab
