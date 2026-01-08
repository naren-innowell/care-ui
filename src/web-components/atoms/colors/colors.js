// @flow

import * as colorTokens from './colorTokens'

const surfaceColors = {
  accent: colorTokens.navy[500],
  accentDark: colorTokens.navy[700],
  accentLight: colorTokens.navy[400],
  accentLighter: colorTokens.navy[100],
  accentVariant: colorTokens.mint[500],
  danger: colorTokens.red[500],
  dangerDark: colorTokens.red[700],
  dangerLight: colorTokens.red[300],
  dangerLighter: colorTokens.red[100],
  default: colorTokens.white,
  disabled: colorTokens.grey[100],
  subtle: colorTokens.grey[50],
  success: colorTokens.green[500],
  successDark: colorTokens.green[700],
  successLight: colorTokens.green[200],
  warning: colorTokens.orange[500],
  warningDark: colorTokens.orange[700],
  warningLight: colorTokens.orange[200],
  mild: colorTokens.yellow[400],
  mildLight: colorTokens.yellow[300],
  neutral: colorTokens.grey[400],
  neutralDark: colorTokens.grey[600],
  neutralLight: colorTokens.grey[200],
  neutralLighter: colorTokens.grey[100],
}

const borderColors = {
  subtle: colorTokens.navy[100],
  lighter: colorTokens.navy[200],
  default: colorTokens.navy[500],
  disabled: colorTokens.grey[300],
  darker: colorTokens.navy[700],
  danger: colorTokens.red[700],
  success: colorTokens.green[600],
  warning: colorTokens.orange[600],
  white: colorTokens.white,
}

const textColors = {
  title: colorTokens.grey[900],
  body: colorTokens.grey[800],
  subtitle: colorTokens.grey[300],
  lighter: colorTokens.navy[200],
  caption: colorTokens.grey[500],
  negative: colorTokens.grey[50],
  positive: colorTokens.navy[500],
  disabled: colorTokens.grey[300],
  danger: colorTokens.red[500],
  success: colorTokens.green[500],
  default: colorTokens.white,
}

const dividerColors = {
  default: colorTokens.grey[400],
  disabled: colorTokens.grey[300],
  darker: colorTokens.grey[700],
}

export const colors = {
  surface: { ...surfaceColors },
  border: { ...borderColors },
  text: { ...textColors },
  divider: { ...dividerColors },
}
