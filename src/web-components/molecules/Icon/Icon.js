// @flow

import React from 'react'
import { useFela } from 'react-fela'

import { type ThemeType } from 'web-components/atoms'

type PropsType = {
  as: string,
  color?: string,
  dataTestId?: string,
  onClick?: () => void,
  scale?: number,
}

const iconStyle = ({ theme, color = 'currentColor', onClick, scale = 1 }: { theme: ThemeType, color?: string, onClick?: () => void, scale?: number }): { [key: string]: any } => {
  const { care } = theme

  const size = `calc(${care.spacing.lg} * ${scale})`
  return {
    display: 'inline-block',
    height: size,
    lineHeight: size,
    width: size,
    userSelect: 'none',
    cursor: onClick ? 'pointer' : 'default',

    '& [data-name="SVG background containers"]': {
      visibility: 'hidden',
    },

    '& *[fill]:not([fill="none"])': {
      fill: color,
    },

    '& *[stroke]:not([stroke="none"])': {
      stroke: color,
    },
  }
}

const Icon = ({ as: Component, ...props }: PropsType): React$Node => {
  if (!Component) {
    throw new Error('Component is required')
  }

  const { css } = useFela(props)
  const { onClick, dataTestId } = props

  return (
    <Component
      className={css(iconStyle)}
      onClick={onClick}
      data-testid={dataTestId}
    />
  )
}

export default Icon
