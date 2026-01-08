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

export const containerStyle = ({ theme, extend }: PropsType) => ({
  width: '100%',
  paddingRight: theme.care.spacing.md,
  paddingLeft: theme.care.spacing.md,
  [theme.care.breakpoints.queries.md]: {
    paddingRight: theme.care.spacing.xl,
    paddingLeft: theme.care.spacing.xl,
  },
  [theme.care.breakpoints.queries.lg]: {
    width: '80%',
    paddingRight: '0',
    paddingLeft: '0',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  ...(extend && extend({ theme })),
})
