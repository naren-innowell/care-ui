// @flow

import { type ThemeType } from 'web-components/atoms'

type SizeStyleProps = {
  size?: 'lg' | 'md' | 'sm',
  theme: ThemeType,
}

export const sizeStyle = (props: SizeStyleProps): { [key: string]: any } => {
  const { size, theme } = props

  // large size
  if (size === 'lg') {
    return {
      ...theme.care.typography.desktop.bodyLg,
      padding: `${theme.care.spacing.xxs} ${theme.care.spacing.sm}`,
    }
  }

  // medium size | Default
  return {
    ...theme.care.typography.desktop.bodyMd,
    padding: `${theme.care.spacing.xxxs} ${theme.care.spacing.xxs} ${
      theme.care.spacing.xxxs
    } ${theme.care.spacing.sm}`,
  }
}

type VariantStyleProps = {
  theme: ThemeType,
  variant?: 'primary' | 'secondary',
}

export const variantStyle = (props: VariantStyleProps): { [key: string]: any } => {
  const { variant, theme } = props

  const disabledStyle = {
    backgroundColor: theme.care.palette.surface.disabled,
    borderColor: theme.care.palette.surface.disabled,
    color: theme.care.palette.text.disabled,
    pointerEvents: 'none',
  }

  if (variant === 'primary') {
    return {
      backgroundColor: theme.care.palette.surface.default,
      color: theme.care.palette.text.positive,
      '&:hover': {
        backgroundColor: theme.care.palette.surface.accentLight,
        color: theme.care.palette.text.negative,
      },
      '&:selected': {
        backgroundColor: theme.care.palette.surface.accentLighter,
        color: theme.care.palette.text.positive,
      },
      '&:disabled': disabledStyle,
    }
  }

  // Secondary variant | Default
  return {
    backgroundColor: theme.care.palette.surface.neutralLighter,
    color: theme.care.palette.text.positive,
    borderColor: theme.care.palette.border.subtle,
    '&:hover': {
      backgroundColor: theme.care.palette.surface.accentLight,
      color: theme.care.palette.text.negative,
    },
    '&:selected': {
      backgroundColor: theme.care.palette.surface.accentLighter,
      color: theme.care.palette.text.positive,
    },
    '&:disabled': disabledStyle,
  }
}

export const chipContainer = ({ theme }: { theme: ThemeType }): { [key: string]: any } => {
  return {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: theme.care.spacing.xxs,
    cursor: 'pointer',
    borderRadius: theme.care.radius.pill,
    border: `1px solid ${theme.care.palette.border.subtle}`,
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    maxWidth: 'fit-content',
  }
}
