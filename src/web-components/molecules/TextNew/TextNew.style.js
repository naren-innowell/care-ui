// @flow

import { type ThemeType } from 'web-components/atoms'

type TextStyle = {
  color?: string,
  marginLeft?: string,
  removeBlockMargin?: boolean,
  textAlign?: 'left' | 'center' | 'right',
  theme: ThemeType,
  truncateText?: boolean,
  typography?:
    | 'display'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'bodyLg'
    | 'bodyLgBold'
    | 'bodyLgLink'
    | 'bodyMd'
    | 'bodyMdBold'
    | 'bodyMdLink'
    | 'bodySm'
    | 'bodySmBold'
    | 'bodySmLink',
  whiteSpace?: 'nowrap' | 'wrap',
}

export const textStyle = (props: TextStyle): any => {
  const {
    typography,
    theme,
    color = 'positive',
    whiteSpace = 'wrap',
    textAlign,
    marginLeft,
    removeBlockMargin,
    truncateText = false,
  } = props

  const truncatingTextStyle = {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    '-webkit-line-clamp': 6,
    '-webkit-box-orient': 'vertical',
  }

  return {
    color: theme.care.palette.text[color],
    whiteSpace,
    textAlign,
    ...(removeBlockMargin && {
      margin: 0,
    }),
    marginLeft: marginLeft ? theme.care.spacing[marginLeft] : undefined,
    ...theme.care.typography.desktop[typography],
    ...(truncateText && truncatingTextStyle),
  }
}
