// @flow

import { type ThemeType } from 'web-components/atoms'

type GetPaddingProps = {
  compactPadding?: boolean,
  icon?: string,
  leftIcon?: string,
  rightIcon?: string,
  theme: ThemeType,
}

const getPadding = (props: GetPaddingProps) => {
  const { icon, rightIcon, leftIcon, theme, compactPadding = false } = props

  // FORCE OVERRIDE FOR THE PADDING
  if (compactPadding) {
    return theme.care.spacing.xxs
  }

  if (icon) {
    return theme.care.spacing.xxs
  }

  if (rightIcon) {
    return `${theme.care.spacing.xxs} ${theme.care.spacing.xxs} ${theme.care.spacing.xxs} ${theme.care.spacing.sm}`
  }

  if (leftIcon) {
    return `${theme.care.spacing.xxs} ${theme.care.spacing.sm} ${theme.care.spacing.xxs} ${theme.care.spacing.xxs}`
  }

  return `${theme.care.spacing.xxs} ${theme.care.spacing.sm}`
}
type SizeStyleProps = {
  compactPadding?: boolean,
  icon?: string,
  isIconButton?: boolean,
  leftIcon?: string,
  rightIcon?: string,
  size?: 'lg' | 'md' | 'sm',
  theme: ThemeType,
}

export const sizeStyle = (props: SizeStyleProps) => {
  const { size = 'md', theme } = props

  // large size
  if (size === 'lg') {
    return {
      ...theme.care.typography.desktop.bodyLg,
      padding: getPadding(props),
    }
  }

  // small size
  if (size === 'sm') {
    return {
      ...theme.care.typography.desktop.bodySm,
      padding: getPadding(props),
    }
  }

  // medium size | Default
  return {
    ...theme.care.typography.desktop.bodyMd,
    padding: getPadding(props),
  }
}

type VariantStyleProps = {
  active?: boolean,
  icon?: boolean,
  theme: ThemeType,
  variant?: 'primary' | 'secondary' | 'text' | 'pill' | 'danger' | 'link',
}

export const variantStyle = (props: VariantStyleProps) => {
  const { theme, variant, active, icon } = props

  const disabledStyle = {
    backgroundColor: icon ? 'transparent' : theme.care.palette.surface.disabled,
    borderColor: icon ? 'none' : theme.care.palette.surface.disabled,
    color: theme.care.palette.text.disabled,
    pointerEvents: 'none',
  }

  if (variant === 'primary') {
    return {
      backgroundColor: theme.care.palette.surface.accent,
      color: theme.care.palette.text.default,
      '&:hover': {
        backgroundColor: theme.care.palette.surface.accentLight,
      },
      '&:selected': {
        backgroundColor: theme.care.palette.surface.accentDark,
      },
      '&:disabled': disabledStyle,
    }
  }

  if (variant === 'secondary') {
    return {
      backgroundColor: theme.care.palette.surface.default,
      color: theme.care.palette.text.positive,
      borderColor: theme.care.palette.border.default,
      '&:hover': {
        backgroundColor: theme.care.palette.surface.accentLighter,
        color: theme.care.palette.text.positive,
      },
      '&:selected': {
        backgroundColor: theme.care.palette.surface.subtle,
        color: theme.care.palette.text.positive,
        borderColor: theme.care.palette.border.default,
      },
      '&:disabled': disabledStyle,
    }
  }

  if (variant === 'danger') {
    return {
      backgroundColor: theme.care.palette.surface.danger,
      color: theme.care.palette.text.default,
      '&:hover': {
        backgroundColor: theme.care.palette.surface.dangerDark,
      },
      '&:selected': {
        backgroundColor: theme.care.palette.surface.dangerDark,
      },
      '&:disabled': disabledStyle,
    }
  }

  if (variant === 'text') {
    const backgroundColor = active
      ? theme.care.palette.surface.accentLighter
      : theme.care.palette.surface.default

    return {
      backgroundColor: icon && !active ? 'transparent' : backgroundColor,
      color: theme.care.palette.text.positive,
      '&:hover': {
        backgroundColor: theme.care.palette.surface.accentLighter,
        color: theme.care.palette.text.positive,
      },
      '&:selected': {
        backgroundColor: theme.care.palette.surface.subtle,
        color: theme.care.palette.text.positive,
        borderColor: theme.care.palette.border.default,
      },
      '&:disabled': disabledStyle,
    }
  }

  if (variant === 'pill') {
    return {
      backgroundColor: theme.care.palette.surface.accent,
      color: theme.care.palette.text.default,
      borderRadius: theme.care.radius.xl,
      '&:hover': {
        backgroundColor: theme.care.palette.surface.accentLight,
      },
      '&:selected': {
        backgroundColor: theme.care.palette.surface.accentDark,
      },
      '&:disabled': disabledStyle,
    }
  }

  if (variant === 'link') {
    return {
      backgroundColor: 'transparent',
      color: theme.care.palette.text.positive,
      border: 'none',
      padding: 0,
      textDecoration: 'underline',
    }
  }

  return {
    backgroundColor: 'transparent',
    color: theme.care.palette.text.positive,
    border: 'none',
    padding: 0,
  }
}

type DefaultStyleProps = {
  fullWidth: boolean,
  leftIcon?: string,
  theme: ThemeType,
}

export const defaultStyle = (props: DefaultStyleProps) => {
  const { theme, fullWidth, leftIcon } = props

  return {
    display: 'flex',
    justifyContent: leftIcon ? 'flex-start' : 'space-between',
    alignItems: 'center',
    gap: theme.care.spacing.xxs,
    cursor: 'pointer',
    borderRadius: theme.care.radius.sm,
    border: `1px solid transparent`,
    whiteSpace: 'nowrap',
    width: fullWidth ? '100%' : 'fit-content',
  }
}
