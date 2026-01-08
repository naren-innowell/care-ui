// @flow

import { type ThemeType } from 'web-components/atoms'

export const selectBoxWrapper = () => ({
  position: 'relative',
  width: '100%',
})

export const optionsContainer = ({
  theme,
  position,
  label,
}: {
  label?: string,
  position: string,
  theme: ThemeType,
}) => {
  const defaultStyle = {
    display: 'block',
    position: 'absolute',
    backgroundColor: theme.care.palette.surface.default,
    borderRadius: theme.care.radius.sm,
    padding: `${theme.care.spacing.xxs} ${theme.care.spacing.sm}`,
    boxShadow: theme.care.elevation[2],
    marginTop: theme.care.spacing.xxs,
    zIndex: 100,
    minWidth: '100%',
  }

  const positionStyle = {}

  // REVERSE
  if (position === 'reverse') {
    positionStyle.top = 0
    positionStyle.right = 0
    positionStyle.transform = label ? 'translateY(-90%)' : 'translateY(-105%)'
  }

  return {
    ...defaultStyle,
    ...positionStyle,
  }
}

export const optionImageStyle = ({ theme }: { theme: ThemeType }) => ({
  width: theme.care.spacing.md,
})

export const labelStyle = ({ theme }: { theme: ThemeType }) => ({
  color: theme.care.palette.text.positive,
  ...theme.care.typography.desktop.bodyMd,
})
