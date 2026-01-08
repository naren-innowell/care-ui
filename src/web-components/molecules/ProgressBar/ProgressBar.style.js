// @flow

type ThemeType = { [string]: any }

type SizeStyleProps = {
  size?: 'lg' | 'md',
  theme: ThemeType,
  value: number,
}

const getSize = (props: SizeStyleProps) => {
  const { size = 'md', theme } = props

  if (size === 'lg') {
    return theme.care.spacing.md
  }
  return theme.care.spacing.sm
}

export const wrapperStyle = (props: SizeStyleProps) => {
  const { theme } = props

  const progressValueStyle = {
    background: theme.care.palette.surface.accent,
    borderRadius: '0',
  }

  return {
    width: '100%',
    '> progress': {
      appearance: 'none',
      height: getSize(props),
      width: '100%',
      borderRadius: theme.care.radius.md,
      background: theme.care.palette.surface.subtle,
      overflow: 'hidden',
      '-moz-appearance': 'none',
      '-webkit-appearance': 'none',
      '::-webkit-progress-bar': {
        background: 'transparent',
      },
      '::-webkit-progress-value': {
        ...progressValueStyle,
      },
      '::-moz-progress-bar': {
        ...progressValueStyle,
      },
    },
  }
}

export const wrapperStyleSkip = (props: SizeStyleProps) => {
  const { theme } = props

  return {
    display: 'flex',
    width: '100%',
    borderRadius: theme.care.radius.md,
    background: theme.care.palette.surface.subtle,
    '> .progress': {
      height: getSize(props),
      width: '100%',
    },
    '> .progress:first-child': {
      borderTopLeftRadius: theme.care.radius.md,
      borderBottomLeftRadius: theme.care.radius.md,
    },
    '> .progress:last-child': {
      borderTopRightRadius: theme.care.radius.md,
      borderBottomRightRadius: theme.care.radius.md,
    },
    '> .done': {
      background: theme.care.palette.surface.accent,
    },
    '> .skipped': {
      background: `repeating-linear-gradient(-45deg, #fff, #fff 0.3px, ${
        theme.care.palette.surface.accent
      } 0.3px, ${theme.care.palette.surface.accent} 4px)`,
    },
  }
}
