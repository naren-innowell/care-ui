// @flow

import { type ThemeType } from 'web-components/atoms'

const VARIANT_COLORS = {
  general: 'accentVariant',
  good: 'successLight',
  moderate: 'warningLight',
  mild: 'mildLight',
  concern: 'dangerLighter',
  beta: 'accentVariant',
}

type SizeStyleProps = {
  size?: 'lg' | 'md',
  theme: ThemeType,
}

export const sizeStyle = (props: SizeStyleProps): { [key: string]: any } => {
  const { size, theme } = props

  // large size
  if (size === 'lg') {
    return {
      ...theme.care.typography.desktop.bodyLg,
    }
  }

  // medium size | Default
  return {
    ...theme.care.typography.desktop.bodySm,
  }
}

type VariantStylePropsProps = {
  size?: 'lg' | 'md',
  theme: ThemeType,
  variant: 'general' | 'good' | 'moderate' | 'mild' | 'concern',
}

export const variantStyle = (props: VariantStylePropsProps): { [key: string]: any } => {
  const { variant = 'general', theme } = props

  return {
    background: theme.care.palette.surface[VARIANT_COLORS[variant]],
  }
}

type BadgeContainerProps = {
  theme: ThemeType,
  variant: 'general' | 'good' | 'moderate' | 'mild' | 'concern',
}

export const badgeContainer = (props: BadgeContainerProps): { [key: string]: any } => {
  const { theme } = props

  return {
    padding: `${theme.care.spacing.xxxs} ${theme.care.spacing.xxs}`,
    borderRadius: theme.care.radius.sm,
    width: 'fit-content',
    color: theme.care.palette.text.positive,
  }
}

type BetaVariantStyleProps = {
  theme: ThemeType,
  variant: 'general' | 'good' | 'moderate' | 'mild' | 'concern' | 'beta',
}

export const betaVariantStyle = (props: BetaVariantStyleProps): { [key: string]: any } => {
  const { variant, theme } = props

  if (variant === 'beta') {
    return {
      padding: `${theme.care.spacing.xxxs} ${theme.care.spacing.xxs}`,
      borderRadius: theme.care.radius.xs,
      fontWeight: 600,
      fontSize: '6px',
      width: 'fit-content',
      color: theme.care.palette.text.positive,
    }
  }

  return {}
}
