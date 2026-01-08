// @flow

import { type ThemeType } from 'web-components/atoms'

type PropsType = {
  size?: 'md',
  theme: ThemeType,
}

export const containerStyle = () => ({
  position: 'relative',
})

export const selectStyle = ({ theme, size = "md" }: PropsType) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',
  borderRadius: theme.care.radius.sm,
  border: `1px solid transparent`,
  padding:
    size === 'md'
      ? `${theme.care.spacing.xxxs} ${theme.care.spacing.xs}`
      : `${theme.care.spacing.xs} ${theme.care.spacing.md}`,
  paddingRight: size === 'md' ? theme.care.spacing.xl : theme.care.spacing.xxl,
  backgroundColor: theme.care.palette.surface.default,
  width: '100%',
  color: theme.care.palette.text.positive,
  borderColor: theme.care.palette.border.default,
  ...theme.care.typography.desktop.bodyLg,

  '&:hover': {
    backgroundColor: theme.care.palette.surface.accentLighter,
    color: theme.care.palette.text.positive,
  },
  '&:selected': {
    backgroundColor: theme.care.palette.surface.subtle,
    color: theme.care.palette.text.positive,
    borderColor: theme.care.palette.border.default,
  },
  '&:disabled': {
    backgroundColor: theme.care.palette.surface.disabled,
    borderColor: theme.care.palette.surface.disabled,
    color: theme.care.palette.text.disabled,
    pointerEvents: 'none',
  },
  '-webkit-appearance': 'none',
})

export const arrowStyle = ({ theme, size }: PropsType) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute',
  top: '50%',
  right: size === 'md' ? theme.care.spacing.xs : theme.care.spacing.md,
  transform: 'translateY(-50%)',
  pointerEvents: 'none',
})
