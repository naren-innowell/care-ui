// @flow

type ThemeType = { [string]: any }

export const dropdown = ({ fullWidth }: { fullWidth: true }): { [key: string]: any } => {
  const widthStyle = fullWidth ? { width: '100%' } : {}

  return {
    position: 'relative',
    display: 'inline-block',
    ...widthStyle,
  }
}

export const dropdownContent = ({
  theme,
  position = 'start',
  minWidth = '180px',
}: {
  minWidth?: string,
  position: string,
  theme: ThemeType,
}): { [key: string]: any } => {
  const defaultStyle = {
    display: 'block',
    position: 'absolute',
    backgroundColor: theme.care.palette.surface.default,
    borderRadius: theme.care.radius.sm,
    padding: `${theme.care.spacing.xs} ${theme.care.spacing.xxxs}`,
    boxShadow: theme.care.elevation[2],
    marginTop: theme.care.spacing.xxs,
    zIndex: 100,
    minWidth,
  }

  // POSITION VARIANCE -> START(default) | END | LEFT | RIGHT | REVERSE
  const positionStyle: { [key: string]: any } = {}

  // START
  if (position === 'start') {
    positionStyle.left = 0
    positionStyle.transform = 'translateX(1%)'
  }
  // END
  if (position === 'end') {
    positionStyle.right = 0
  }

  // LEFT
  if (position === 'left') {
    positionStyle.right = '100%'
    positionStyle.top = 0
    positionStyle.marginRight = '8px'
  }

  // REVERSE
  if (position === 'reverse') {
    positionStyle.top = 0
    positionStyle.right = 0
    positionStyle.transform = 'translateY(-105%)'
  }

  return {
    ...(defaultStyle: { [key: string]: any }),
    ...(positionStyle: { [key: string]: any }),
  }
}
