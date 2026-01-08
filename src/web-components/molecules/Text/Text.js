// @flow

import React from 'react'
import { useFela } from 'react-fela'
import { capitalize } from 'lodash'

type PropsType = {
  ariaLabel?: string,
  as?: string,
  bold?: boolean,
  center?: boolean,
  children: any,
  className?: string,
  color?: 'positive' | 'title' | 'subtitle',
  dataTestId?: string,
  extend?: any,
  margin?: 'xxxs' | 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl',
  size?: 'sm' | 'md' | 'lg',
  wrap?: 'nowrap' | 'wrap',
}

const textStyle = ({
  theme,
  bold,
  size,
  color,
  center,
  margin,
  wrap = 'wrap',
}) => {
  const sizeProp = bold
    ? `body${capitalize(size)}Bold`
    : `body${capitalize(size)}`

  return {
    marginTop: margin ? theme.care.spacing[margin] : 0,
    marginBottom: margin ? theme.care.spacing[margin] : 0,
    textAlign: center ? 'center' : 'left',
    color: theme.care.palette.text[color],
    overflow: 'hidden',
    whiteSpace: wrap,
    textOverflow: 'ellipsis',
    ...theme.care.typography.desktop[sizeProp],

    '& a': {
      color: theme.care.palette.text[color],
      ...theme.care.typography.desktop[sizeProp],
    },
  }
}

const Text = ({
  children,
  size = 'md',
  extend,
  className = '',
  as: Component = 'p',
  color = 'positive',
  bold,
  center,
  margin,
  dataTestId,
  ariaLabel,
  ...rest
}: PropsType) => {
  const { css } = useFela({ bold, size, color, center, margin })

  const allClasses = `${css([textStyle, extend])} ${className}`

  return (
    <Component
      aria-label={ariaLabel}
      data-testid={dataTestId}
      className={allClasses}
      {...(rest: any)}
    >
      {children}
    </Component>
  )
}

export default Text
