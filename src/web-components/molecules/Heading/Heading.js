// @flow

import React, { type ComponentType, type Node } from 'react'
import { useFela } from 'react-fela'

const styleRules = ({ headingLevel, theme, color, margin, center }) => ({
  color: theme.care.palette.text[color],
  textAlign: center ? 'center' : 'left',
  marginTop: margin ? theme.care.spacing[margin] : 0,
  marginBottom: margin ? theme.care.spacing[margin] : 0,
  ...theme.care.typography.desktop[headingLevel],
})

export type HeadingProps = {
  as?: string | ComponentType<any>,
  center?: boolean,
  children: ?Node,
  className?: string,
  color?: 'positive' | 'title',
  dataTestId?: string,
  extend?: any,
  level: number,
  margin?: 'xxxs' | 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl',
}

const Heading = ({
  level,
  children,
  extend,
  color = 'positive',
  className = '',
  center,
  dataTestId,
  margin,
}: HeadingProps) => {
  const headingLevel = `h${level}`
  const { css } = useFela({ headingLevel, color, margin, center })

  const allClassNames = `${css([styleRules, extend])} ${className}`

  const Component = headingLevel
  return (
    <Component className={allClassNames} data-testid={dataTestId}>
      {children}
    </Component>
  )
}

export default Heading
