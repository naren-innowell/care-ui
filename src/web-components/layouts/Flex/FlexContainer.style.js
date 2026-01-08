// @flow

import { type ThemeType } from 'web-components/atoms'

type FlexContainerStyleProps = {
  alignItems?:
    | 'stretch'
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'baseline'
    | 'start'
    | 'end',
  boxStyle?: { [string]: string },
  direction?: string,
  gap?: string,
  height?: string,
  justifyContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly',
  marginTop?: string,
  paddingX?: string,
  paddingY?: string,
  theme: ThemeType,
  width?: string,
  wrap?: 'wrap' | 'nowrap',
}

export const flexContainer = (props: FlexContainerStyleProps) => {
  const {
    theme,
    direction,
    paddingX = 0,
    paddingY = 0,
    marginTop,
    justifyContent,
    alignItems,
    gap,
    width,
    height,
    wrap,
  } = props

  const widthStyle = width ? { width } : {}

  return {
    display: 'flex',
    flexDirection: direction || 'row',
    padding: `${theme.care.spacing?.[paddingX] || paddingX} ${theme.care
      .spacing?.[paddingY] || paddingY}`,
    justifyContent,
    alignItems,
    flexWrap: wrap || 'wrap',
    gap: theme.care.spacing?.[gap] || gap,
    height,
    marginTop: theme.care.spacing?.[marginTop] || marginTop,
    ...widthStyle,
  }
}
