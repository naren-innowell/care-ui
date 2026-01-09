// @flow

import React, { type ComponentType } from 'react'
import { useFela } from 'react-fela'

import type { ThemeType } from "../../atoms";

const styleRules = ({ headingLevel, theme, color, margin, center }: { headingLevel: string, theme: ThemeType, color?: 'positive' | 'title', margin?: 'xxxs' | 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl', center?: boolean }): { [key: string]: any } => ({
  color: theme.care.palette.text[color],
  textAlign: center ? 'center' : 'left',
  marginTop: margin ? theme.care.spacing[margin] : 0,
  marginBottom: margin ? theme.care.spacing[margin] : 0,
  ...theme.care.typography.desktop[headingLevel],
})

export type HeadingProps = {
  as?: string | ComponentType<any>,
  center?: boolean,
  children: ?React$Node,
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
}: HeadingProps): React$Node => {
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
