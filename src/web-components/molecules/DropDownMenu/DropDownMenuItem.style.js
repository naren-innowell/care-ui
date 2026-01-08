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

type MenuItemStyleProps = {
  isActive?: boolean,
  isFocused?: boolean,
  theme: ThemeType,
}

export const menutItemStyle = (props: MenuItemStyleProps) => {
  const { theme, isActive, isFocused } = props

  return {
    display: 'flex',
    flexDirection: 'column',
    color: theme.care.palette.text.positive,
    padding: `${theme.care.spacing.xxs} ${theme.care.spacing.xs}`,
    cursor: 'pointer',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textAlign: 'left',
    ...(isActive || isFocused
      ? {
          background: theme.care.palette.surface.accentLighter,
          borderRadius: theme.care.radius.sm,
        }
      : {}),
    '&:hover': {
      backgroundColor: theme.care.palette.surface.accentLighter,
      borderRadius: theme.care.radius.sm,
    },
  }
}
