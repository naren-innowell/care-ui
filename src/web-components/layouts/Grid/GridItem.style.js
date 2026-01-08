// @flow

import { type ThemeType } from 'web-components/atoms'

type PropsType = {
  center?: boolean,
  lg?: number,
  md?: number,
  sm?: number,
  theme: ThemeType,
  xl?: number,
  xs?: number,
}

export const gridItemStyle = ({
  theme,
  xs,
  sm,
  md,
  lg,
  xl,
  center,
}: PropsType) => ({
  display: 'flex',
  boxSizing: 'border-box',
  gridColumn: `span 12`,
  alignItems: 'center',
  gap: theme.care.spacing.sm,
  justifyContent: center ? 'center' : 'flex-start',
  ...(xs && { gridColumn: `span ${xs}` }),
  [theme.care.breakpoints.queries.md]: {
    ...(sm && { gridColumn: `span ${sm}` }),
  },
  [theme.care.breakpoints.queries.md]: {
    ...(md && { gridColumn: `span ${md}` }),
  },
  [theme.care.breakpoints.queries.lg]: {
    ...(lg && { gridColumn: `span ${lg}` }),
  },
  [theme.care.breakpoints.queries.xl]: {
    ...(xl && { gridColumn: `span ${xl}` }),
  },
})
