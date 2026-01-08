// @flow

type ThemeType = { [string]: any }

type DividerStyleProps = {
  theme: ThemeType,
  variant?: 'default' | 'positive',
}
export const dividerStyle = (props: DividerStyleProps) => {
  const { theme, variant = 'positive' } = props

  const borderBottomColor =
    variant === 'default'
      ? theme.care.palette.divider.default
      : theme.care.palette.border.subtle

  return {
    borderBottom: `1px solid ${borderBottomColor}`,
    width: '100%',
    margin: `${theme.care.spacing.xxxs} 0`,
  }
}
