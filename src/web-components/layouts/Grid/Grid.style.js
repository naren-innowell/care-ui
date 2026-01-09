// @flow

import { type ThemeType } from 'web-components/atoms'

type PropsType = {
  extend?: (
    props: any,
  ) => {|
    [key: string]: string,
  |},
  theme: ThemeType,
}

export const gridStyle = ({ theme, extend }: PropsType): { [key: string]: any } => {
  return {
    ...(extend && extend({ theme })),
  display: 'grid',
  gridTemplateColumns: 'repeat(12, 1fr)',
  width: '100%',
  gap: theme.care.spacing.xxs,
  gridRowGap: theme.care.spacing.xs,
  [theme.care.breakpoints.queries.md]: {
    gap: theme.care.spacing.sm,
    gridRowGap: theme.care.spacing.md,
  },
  [theme.care.breakpoints.queries.lg]: {
    gap: theme.care.spacing.lg,
    gridRowGap: theme.care.spacing.xl,
    },
  }
}
