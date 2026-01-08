// @flow

import theme from 'web-components/atoms'

// Define the type for the keys of the spacing object
type SpacingKeys = $Keys<typeof theme.spacing>
type ElevationKeys = $Keys<typeof theme.elevation>

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
