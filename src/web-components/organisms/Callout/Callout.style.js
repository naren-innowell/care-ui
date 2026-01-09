// @flow

import { type ThemeType } from 'web-components/atoms'

type SizeStyleProps = {
  size?: 'lg' | 'md',
  theme: ThemeType,
}

export const sizeStyle = (props: SizeStyleProps): any => {
  const { size = 'md', theme } = props

  // large size
  if (size === 'lg') {
    return {
      ...theme.care.typography.desktop.bodyLgBold,
    }
  }

  // medium size | Default
  return {
    ...theme.care.typography.desktop.bodyMdBold,
  }
}

type VariantStyleProps = {
  theme: ThemeType,
  variant?: 'danger' | 'warning',
}

export const variantStyle = (props: VariantStyleProps): any => {
  const { variant = 'danger', theme } = props

  if (variant === 'danger') {
    return {
      backgroundColor: theme.care.palette.surface.dangerLighter,
      border: `1px solid ${theme.care.palette.border.danger}`,
    }
  }

  // Warning Variant | Default
  return {
    backgroundColor: theme.care.palette.surface.warningLight,
    border: `1px solid ${theme.care.palette.border.warning}`,
  }
}

type StylePropsType = {
  theme: ThemeType,
}

export const calloutContainer = (styleProps: StylePropsType): any => {
  const { theme } = styleProps

  return {
    display: 'flex',
    justifyContent: 'start',
    alignItems: 'center',
    gap: theme.care.spacing.xxs,
    borderRadius: theme.care.radius.md,
    padding: `${theme.care.spacing.sm} ${theme.care.spacing.xs}`,
    width: '100%',
  }
}
