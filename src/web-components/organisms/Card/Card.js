// @flow

import type { ThemeType } from "../../atoms";

import React from 'react'
import { useFela } from 'react-fela'

type PropsType = {
  children?: React$Node,
  dataTestId?: string,
  footer?: React$Node,
  headerColor?: string,
  selected?: boolean,
}

const cardStyle = ({ theme, selected }: { theme: ThemeType, selected?: boolean }): any => {
  const { care } = theme

  const backgroundColor = selected ? '#EFF9FC' : care.palette.surface.default

  return {
    backgroundColor,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    color: care.palette.text.positive,
    overflow: 'hidden',
    borderRadius: care.radius.md,
    height: '212px',
    maxWidth: '320px',
    width: '100%',
    boxShadow: care.elevation['1'],
    [care.breakpoints.queries.md]: {
      maxWidth: '232px',
      height: '231px',
    },
  }
}

const headerStyle = ({ theme, headerColor }: { theme: ThemeType, headerColor?: string }): any => {
  const { care } = theme
  const backgroundColor = headerColor || care.palette.surface.disabled

  return {
    height: care.spacing.lg,
    backgroundColor,
    flexShrink: 0,
  }
}

const contentStyle = ({ theme }: { theme: ThemeType }): any => {
  const { care } = theme

  return {
    display: 'flex',
    flexGrow: 1,
    paddingTop: care.spacing.sm,
    paddingLeft: care.spacing.sm,
    paddingRight: care.spacing.sm,
    paddingBottom: care.spacing.xxs,
  }
}

const Card = (props: PropsType): React$Node => {
  const { children, dataTestId, headerColor, footer, selected } = props
  const { css } = useFela({ headerColor, selected })

  return (
    <div className={css(cardStyle)} data-testid={dataTestId || 'card'}>
      <div className={css(headerStyle)} />
      <div className={css(contentStyle)}>{children}</div>
      <div>{footer}</div>
    </div>
  )
}

export default Card
