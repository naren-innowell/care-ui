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
}: PropsType): { [key: string]: any } => ({
  display: 'flex',
  boxSizing: 'border-box',
  gridColumn: `span 12`,
  alignItems: 'center',
  gap: theme.care.spacing.sm,
  justifyContent: center ? 'center' : 'flex-start',
  ...(typeof xs === 'number' && { gridColumn: `span ${xs}` }),
  [theme.care.breakpoints.queries.sm]: {
    ...(typeof sm === 'number' && { gridColumn: `span ${sm}` }),
  },
  [theme.care.breakpoints.queries.md]: {
    ...(typeof md === 'number' && { gridColumn: `span ${md}` }),
  },
  [theme.care.breakpoints.queries.lg]: {
    ...(typeof lg === 'number' && { gridColumn: `span ${lg}` }),
  },
  [theme.care.breakpoints.queries.xl]: {
    ...(typeof xl === 'number' && { gridColumn: `span ${xl}` }),
  },
})
