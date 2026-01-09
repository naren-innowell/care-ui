// @flow

import { type ThemeType } from 'web-components/atoms'

type BoxContainerStyleProps = {
  alignContent?: string,
  alignItems?: 'center' | 'left' | 'right',
  backgroundColor?: string,
  border?: string,
  borderBottom?: string,
  borderLeft?: string,
  borderRadius?: string,
  borderTop?: string,
  boxShadow?: string,
  direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse',
  display?: string,
  height?: string,
  justifyContent?: string,
  marginBottom?: string,
  marginTop?: string,
  marginX?: string | number,
  marginY?: string | number,
  maxHeight?: string,
  maxWidth?: string,
  minHeight?: string,
  minWidth?: string,
  onClick?: () => void,
  overflow?: 'auto' | 'hidden' | 'none' | 'scroll',
  paddingLeft?: string,
  paddingTop?: string,
  paddingX?: string | number,
  paddingY?: string | number,
  position?: string,
  textAlign?: string,
  theme: ThemeType,
  top?: number,
  width?: string,
  zIndex?: number,
}

export const boxContainer = (props: BoxContainerStyleProps): { [key: string]: any } => {
  const {
    theme,
    marginX = 0,
    marginY = 0,
    paddingX = 0,
    paddingY = 0,
    alignContent,
    alignItems,
    justifyContent,
    marginBottom,
    marginTop,
    paddingLeft,
    paddingTop,
    minHeight,
    minWidth,
    maxHeight,
    maxWidth,
    overflow,
    position,
    textAlign,
    top,
    zIndex,
    display,
    direction,
    backgroundColor,
    borderRadius,
    height,
    width,
    boxShadow,
    border,
    borderTop,
    borderBottom,
    borderLeft,
    onClick,
  } = props

  const borderStyle = theme.care.palette.border?.[border]
    ? `1px solid ${theme.care.palette.border?.[border]}`
    : border

  const borderTopStyle = theme.care.palette.border?.[borderTop]
    ? `1px solid ${theme.care.palette.border?.[borderTop]}`
    : borderTop

  const borderBottomStyle = theme.care.palette.border?.[borderBottom]
    ? `1px solid ${theme.care.palette.border?.[borderBottom]}`
    : borderBottom

  const borderLeftStyle = theme.care.palette.border?.[borderLeft]
    ? `1px solid ${theme.care.palette.border?.[borderLeft]}`
    : borderLeft

  const backgroundColorStyle =
    theme.care.palette.surface?.[backgroundColor] || backgroundColor

  return {
    margin: `${theme.care.spacing?.[marginY] || marginY} ${
      theme.care.spacing?.[marginX] || marginX
    } `,
    marginBottom: `${theme.care.spacing?.[marginBottom] || marginBottom}`,
    marginTop: `${theme.care.spacing?.[marginTop] || marginTop}`,
    padding: `${theme.care.spacing?.[paddingX] || paddingX} ${
      theme.care.spacing?.[paddingY] || paddingY
    }`,
    paddingTop: `${theme.care.spacing?.[paddingTop] || paddingTop}`,
    paddingLeft: `${theme.care.spacing?.[paddingLeft] || paddingLeft}`,
    height,
    width,
    borderRadius: theme.care.radius?.[borderRadius] || borderRadius,
    boxShadow: theme.care.elevation?.[boxShadow] || boxShadow,
    border: borderStyle,
    borderTop: borderTopStyle,
    borderBottom: borderBottomStyle,
    borderLeft: borderLeftStyle,
    overflow,
    position,
    alignContent,
    alignItems,
    justifyContent,
    maxHeight,
    maxWidth,
    minHeight,
    minWidth,
    textAlign,
    top,
    zIndex,
    display,
    flexDirection: direction,
    backgroundColor: backgroundColorStyle,
    cursor: onClick ? 'pointer' : 'default',
  }
}
