// @flow

import { type ThemeType } from 'web-components/atoms'

type Props = {
  color: string,
  theme: ThemeType,
}

export const containerStyle = ({ theme, color }: Props) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: color
    ? theme.care.palette.surface[color]
    : theme.care.palette.surface.default,
  paddingBottom: theme.care.spacing.xl,
})
