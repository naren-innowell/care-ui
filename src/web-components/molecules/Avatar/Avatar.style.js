// @flow

import { type ThemeType } from 'web-components/atoms'

type AvatarStyle = {
  color?: string,
  initials?: string,
  requireSupport?: boolean,
  theme: ThemeType,
}

export const avatarStyle = (props: AvatarStyle): { [key: string]: any } => {
  const { color, requireSupport, theme } = props

  const border = requireSupport
    ? `1px dashed ${theme.care.palette.border.default}`
    : `1px solid ${theme.care.palette.border.white}`

  const backgroundColor = requireSupport
    ? theme.care.palette.surface.default
    : theme.care.palette.surface.accent

  return {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '30px',
    height: '30px',
    borderRadius: '50%',
    border,
    backgroundColor: theme.care.palette.surface[color] || backgroundColor,
    color: theme.care.palette.text.default,
    ...theme.care.typography.desktop.bodySm,
  }
}

export const avatarGroupStyle = (): { [key: string]: any } => ({
  display: 'flex',
  '& :not(:first-child)': {
    marginLeft: '-7.5px',
  },
})
