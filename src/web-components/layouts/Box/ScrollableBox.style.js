// @flow

import { type ThemeType } from 'web-components/atoms'

type ScrollableBoxContainerProps = {
  backgroundColor?: string,
  direction?: 'horizontal' | 'vertical',
  hasScrollbar?: boolean,
  maxHeight?: string,
  maxWidth?: string,
  theme: ThemeType,
}

export const scrollableBoxContainer = (props: ScrollableBoxContainerProps) => {
  const {
    theme,
    maxHeight,
    maxWidth,
    backgroundColor,
    direction = 'vertical',
    hasScrollbar,
  } = props

  const backgroundColorStyle =
    theme.care.palette.surface?.[backgroundColor] || backgroundColor

  if (direction === 'vertical') {
    return {
      maxHeight,
      backgroundColor: backgroundColorStyle,
      paddingRight: hasScrollbar ? theme.care.spacing.xs : '',
      overflowY: 'auto',
      overflowX: 'hidden',
      scrollbarWidth: 'auto',
      '&::-webkit-scrollbar': {
        width: theme.care.spacing.xxxs,
        height: theme.care.spacing.xxxs,
      },
      '&::-webkit-scrollbar-thumb': {
        backgroundColor: theme.care.palette.surface.accentLighter,
        borderRadius: theme.care.radius.pill,
      },
      '&::-webkit-scrollbar-track': {
        backgroundColor: theme.care.palette.surface.default,
        borderRadius: theme.care.radius.pill,
        border: `1px solid ${theme.care.palette.border.subtle}`,
      },
    }
  }

  return {
    backgroundColor: backgroundColorStyle,
    maxWidth,
    overflowX: 'auto',
    overflowY: 'hidden',
    scrollbarWidth: 'auto',
    '&::-webkit-scrollbar': {
      width: theme.care.spacing.xxxs,
      height: theme.care.spacing.xxxs,
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: theme.care.palette.surface.accentLighter,
      borderRadius: theme.care.radius.pill,
    },
  }
}
