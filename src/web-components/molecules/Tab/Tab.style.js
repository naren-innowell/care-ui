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
      ...theme.care.typography.desktop.bodyLg,
      padding: `${theme.care.spacing.xs} ${theme.care.spacing.sm}`,
    }
  }

  // medium size | Default
  return {
    ...theme.care.typography.desktop.bodyMd,
    padding: `${theme.care.spacing.xxs} ${theme.care.spacing.sm}`,
  }
}

type PropsType = {
  disabled?: boolean,
  isActive?: boolean,
  theme: ThemeType,
}

export const tabStyle = (props: PropsType): any => {
  const { isActive, disabled, theme } = props

  return {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    borderRadius: theme.care.radius.sm,
    color: theme.care.palette.text.positive,
    background: isActive ? theme.care.palette.surface.accentLighter : '',

    ':hover': {
      background: theme.care.palette.surface.accentLighter,
    },
    ...(disabled ? { pointerEvents: 'none' } : {}),
  }
}
