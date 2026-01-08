// @flow

type ThemeType = { [string]: any }

type SizeStyleProps = {
  size?: 'lg' | 'md',
  theme: ThemeType,
}

export const sizeStyle = (props: SizeStyleProps) => {
  const { size = 'md', theme } = props

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

type SearchBarStyleProps = {
  fullWidth?: boolean,
  isDisabled?: boolean,
  theme: ThemeType,
}

export const searchBarStyle = (props: SearchBarStyleProps) => {
  const { fullWidth, isDisabled = false, theme } = props

  const backgroundColor = isDisabled
    ? theme.care.palette.surface.disabled
    : theme.care.palette.surface.default

  const borderColor = isDisabled
    ? theme.care.palette.border.disabled
    : theme.care.palette.border.lighter

  return {
    display: 'flex',
    alignItems: 'center',
    width: fullWidth ? '100%' : '365px',
    borderRadius: theme.care.radius.sm,
    border: `1px solid ${borderColor}`,
    backgroundColor,
    padding: `${theme.care.spacing.xxs} ${theme.care.spacing.xs}`,
    color: theme.care.palette.text.subtle,

    '&:focus-within': {
      outline: 'none',
      border: `1px solid ${theme.care.palette.border.default}`,
      color: theme.care.palette.text.positive,
    },
  }
}

export const inputStyle = ({ theme }: ThemeType) => ({
  flex: '1',
  border: 'none',
  outline: 'none',
  width: '100%',
  marginLeft: theme.care.spacing.xxs,

  '&:disabled': {
    backgroundColor: theme.care.palette.surface.disabled,
  },
  '&:disabled::placeholder': {
    color: theme.care.palette.text.subtitle,
  },
})
