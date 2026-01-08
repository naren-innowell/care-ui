// @flow

import { colors } from './colors/colors'
import { elevations } from './elevations/elevations'
import { radius } from './radius/radius'
import { spacings } from './spacing/spacing'
import * as breakpoints from './tokens/breakpoints'
import { desktopTypography } from './typography/typography'

export type ThemeType = { [string]: any }

export default {
  breakpoints,
  palette: { ...colors },
  elevation: { ...elevations },
  radius: { ...radius },
  spacing: { ...spacings },
  typography: {
    desktop: { ...desktopTypography },
  },
}
