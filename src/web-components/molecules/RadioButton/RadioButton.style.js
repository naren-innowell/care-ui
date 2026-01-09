// @flow

type ThemeType = { [string]: any }

type SizeStyleProps = {
  size?: 'lg' | 'md',
  theme: ThemeType,
}

type WrapperStyleProps = {
  checked?: boolean,
  disabled?: boolean,
  theme: ThemeType,
}

type LabelStyleProps = WrapperStyleProps & {
  wrapLabel?: boolean,
}

export const sizeStyle = (props: SizeStyleProps): any => {
  const { size, theme } = props

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

export const wrapperStyle = ({
  theme,
  disabled,
  checked,
}: WrapperStyleProps): any => {
  return {
    cursor: disabled ? 'default' : 'pointer',
    display: 'flex',
    alignItems: 'flex-start',
    whiteSpace: 'nowrap',
    padding: `${theme.care.spacing.xs} 0`,
    width: 'fit-content',

    '& input': {
      appearance: 'none',
      marginRight: theme.care.spacing.xs,
      cursor: disabled ? 'default' : 'pointer',
      height: theme.care.spacing.sm,
      width: theme.care.spacing.sm,
      borderRadius: theme.care.radius.pill,
      border: `1px solid ${theme.care.palette.border.default}`,
      padding: '2px',
      flexShrink: 0,
      alignSelf: 'flex-start',
      boxSizing: 'border-box',
      backgroundColor: checked && theme.care.palette.surface.accent,
      borderColor: checked && theme.care.palette.surface.accent,
      backgroundClip: 'content-box',
    },

    '& input:disabled': {
      borderColor: theme.care.palette.text.disabled,
      cursor: 'default',
    },
  }
}

export const labelStyles = ({
  disabled,
  wrapLabel,
  theme,
}: LabelStyleProps): any => {
  return {
    cursor: disabled ? 'default' : 'pointer',
    color: disabled
      ? theme.care.palette.text.disabled
      : theme.care.palette.text.positive,
    whiteSpace: wrapLabel ? 'normal' : 'nowrap',
  }
}
