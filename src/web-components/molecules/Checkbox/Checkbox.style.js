// @flow

type ThemeType = { [string]: any }

type SizeStyleProps = {
  size?: 'lg' | 'md',
  theme: ThemeType,
}

export const sizeStyle = (props: SizeStyleProps) => {
  const { size, theme } = props

  // Styles for large size
  if (size === 'lg') {
    return {
      ...theme.care.typography.desktop.bodyLg,
      '& input': {
        width: theme.care.spacing.lg,
        height: theme.care.spacing.lg,
      },
    }
  }

  // Styles for medium size | Default
  return {
    ...theme.care.typography.desktop.bodyMd,
    '& input': {
      width: theme.care.spacing.md,
      height: theme.care.spacing.md,
    },
  }
}
type WrapperStyleProps = {
  disabled?: boolean,
  partial?: boolean,
  required?: boolean,
  theme: ThemeType,
}

export const wrapperStyle = (props: WrapperStyleProps) => {
  const { theme, partial, required, disabled } = props

  return {
    cursor: disabled ? 'default' : 'pointer',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    display: 'flex',
    alignItems: 'center',
    width: 'fit-content',

    '& span': {
      position: 'relative',
      display: 'flex',
    },

    '& input': {
      appearance: 'none',
      cursor: 'pointer',
      borderRadius: theme.care.radius.xs,
      border: `1px solid ${theme.care.palette.border.lighter}`,
      alignSelf: 'baseline',
    },

    '& input[required]': {
      border: `1px solid ${theme.care.palette.border.danger}`,
      backgroundColor: theme.care.palette.surface.dangerLight,
    },

    '& input:hover': {
      backgroundColor:
        !disabled &&
        !partial &&
        !required &&
        theme.care.palette.surface.accentLighter,
    },

    '& input[type="checkbox"]:checked, & input[type="checkbox"]:indeterminate': {
      border: `1px solid ${theme.care.palette.border.default}`,
      backgroundColor: theme.care.palette.surface.accent,
      position: 'relative',
    },

    '& input::before': {
      content: '""',
      display: 'block',
      width: '50%',
      height: '50%',
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      position: 'absolute',
      top: '25%',
      left: '25%',
    },

    '& input:checked::before': {
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='12' height='10' viewBox='0 0 12 10' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11.3595 0.879289C11.404 0.928949 11.4394 0.987943 11.4635 1.05289C11.4876 1.11784 11.5 1.18747 11.5 1.25779C11.5 1.32811 11.4876 1.39773 11.4635 1.46268C11.4394 1.52763 11.404 1.58663 11.3595 1.63629L4.66475 9.12072C4.62033 9.17051 4.56756 9.21001 4.50946 9.23696C4.45136 9.26391 4.38908 9.27778 4.32618 9.27778C4.26328 9.27778 4.201 9.26391 4.14291 9.23696C4.08481 9.21001 4.03204 9.17051 3.98762 9.12072L0.640238 5.37851C0.550445 5.27812 0.5 5.14197 0.5 5.00001C0.5 4.85804 0.550445 4.72189 0.640238 4.62151C0.73003 4.52112 0.851815 4.46473 0.978801 4.46473C1.10579 4.46473 1.22757 4.52112 1.31737 4.62151L4.32618 7.9863L10.6824 0.879289C10.7268 0.829503 10.7796 0.790004 10.8377 0.763053C10.8958 0.736102 10.958 0.722229 11.0209 0.722229C11.0838 0.722229 11.1461 0.736102 11.2042 0.763053C11.2623 0.790004 11.3151 0.829503 11.3595 0.879289Z' fill='%23F2F1F3'/%3E%3C/svg%3E%0A")`,
    },

    '& input:indeterminate::before': {
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='12' height='2' viewBox='0 0 12 2' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0.5 0.999996C0.5 0.662489 0.807804 0.388885 1.1875 0.388885H10.8125C11.1922 0.388885 11.5 0.662489 11.5 0.999996C11.5 1.3375 11.1922 1.61111 10.8125 1.61111H1.1875C0.807804 1.61111 0.5 1.3375 0.5 0.999996Z' fill='white'/%3E%3C/svg%3E%0A")`,
    },

    '& input:disabled': {
      backgroundColor: theme.care.palette.surface.disabled,
      borderColor: theme.care.palette.text.disabled,
      cursor: 'default',
    },

    '& input:disabled:checked, & input:disabled:indeterminate': {
      backgroundColor: theme.care.palette.surface.disabled,
      borderColor: theme.care.palette.text.disabled,
    },
  }
}

type LabelStylesProps = {
  checked?: boolean,
  disabled?: boolean,
  required?: boolean,
  theme: ThemeType,
}

export const labelStyles = (props: LabelStylesProps) => {
  const { required, checked, disabled, theme } = props
  const requiredStyle = {}

  if (required && !checked) {
    requiredStyle.color = theme.care.palette.text.danger
  }

  const disabledStyle = {}

  if (disabled) {
    disabledStyle.color = theme.care.palette.text.disabled
    disabledStyle.cursor = 'default'
  }

  return {
    cursor: 'pointer',
    color: theme.care.palette.text.positive,
    paddingLeft: theme.care.spacing.xxs,
    ...requiredStyle,
    ...disabledStyle,
  }
}

type ErrorTextStyleProps = {
  theme: ThemeType,
}

export const errorTextStyle = (props: ErrorTextStyleProps) => {
  const { theme } = props

  return {
    padding: `0 ${theme.care.spacing.xs}`,
    color: theme.care.palette.text.danger,
    ...theme.care.typography.desktop.bodySm,
  }
}
