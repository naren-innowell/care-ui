// @flow

import theme from 'web-components/atoms'

// Define the type for the keys of the spacing object
type SpacingKeys = any
type ElevationKeys = any

export const getSpacingOptions = (): Array<SpacingKeys> => {
  return Object.keys(theme.spacing)
}

export type SpacingOptions =
  | 'xxxs'
  | 'xxs'
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | 'xxl'
  | 'xxxl'

export const getElevationOptions = (): Array<ElevationKeys> => {
  return Object.keys(theme.elevation)
}
