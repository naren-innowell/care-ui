// @flow

import { type ThemeType } from 'web-components/atoms'

type PropsType = {
  theme: ThemeType,
}

export const textAreaStyle = (props: PropsType) => {
  const { theme } = props

  return {
    resize: 'none',
    borderRadius: theme.care.radius.sm,
    padding: `${theme.care.spacing.xxs} ${theme.care.spacing.xs}`,
    border: `1px solid ${theme.care.palette.border.lighter}`,
    '&::placeholder': {
      color: theme.care.palette.text.subtitle,
    },
    ...theme.care.typography.desktop.bodyLg,
  }
}

export const wrapperStyle = () => {
  return {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
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
