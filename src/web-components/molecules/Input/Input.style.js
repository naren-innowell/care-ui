// @flow

import { type ThemeType } from 'web-components/atoms'

type SizeStyleProps = {
  size?: 'lg' | 'md',
  theme: ThemeType,
}

export const sizeStyle = (props: SizeStyleProps) => {
  const { size, theme } = props

  // large size
  if (size === 'lg') {
    return {
      ...theme.care.typography.desktop.bodyLg,
    }
  }

  // medium size | Default
  return {
    ...theme.care.typography.desktop.bodyMd,
  }
}

type WrapperStyleProps = {
  halfWidth?: boolean,
}

export const wrapperStyle = (props: WrapperStyleProps) => {
  const { halfWidth = false } = props

  return {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    '& input': {
      width: halfWidth ? '50%' : '100%',
    },
  }
}

type InputStyleProps = {
  error?: boolean,
  theme: ThemeType,
}

export const inputStyle = (props: InputStyleProps) => {
  const { theme, error } = props

  return {
    border: `1px solid ${theme.care.palette.border.lighter}`,
    borderRadius: theme.care.radius.sm,
    color: theme.care.palette.text.subtitle,
    padding: `${theme.care.spacing.xxs} ${theme.care.spacing.xs}`,

    ':disabled': {
      backgroundColor: theme.Input.disabled.base,
      borderColor: theme.Input.disabled.accent,
    },
    ':focus': {
      border: `1px solid ${theme.care.palette.border.default}`,
      color: theme.care.palette.text.positive,
      outline: 'none',
    },
    ...(error &&
      ':invalid' && {
        border: `1px solid ${theme.care.palette.border.danger}`,
        backgroundColor: theme.care.palette.surface.dangerLighter,
        color: theme.care.palette.text.positive,
      }),
    ':not(:focus):valid:not(:placeholder-shown)': {
      border: `1px solid ${theme.care.palette.border.default}`,
      color: theme.care.palette.text.positive,
      outline: 'none',
    },
  }
}

export const labelStyle = ({ theme }: { theme: ThemeType }) => ({
  color: theme.care.palette.text.positive,
  ...theme.care.typography.desktop.bodyMd,
})

export const errorTextStyle = ({ theme }: { theme: ThemeType }) => ({
  padding: `0 ${theme.care.spacing.xs}`,
  color: theme.care.palette.text.danger,
  ...theme.care.typography.desktop.bodySm,
})
