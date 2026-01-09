// @flow

import React from 'react'
import { useFela } from 'react-fela'

import { iconStyle } from './IconNew.style'

type PropsType = {
  as: string,
  color?: string,
  isClickable?: boolean,
  onClick?: () => void,
  size?: 'xl' | 'lg' | 'md' | 'sm',
}

const IconNew = (props: PropsType): React$Node => {
  const { as: Component, onClick } = props

  const { css } = useFela({ ...props })

  return (
    <Component
      className={css(iconStyle)}
      onClick={onClick}
      preserveAspectRatio="xMidYMid meet"
    />
  )
}

export default IconNew
