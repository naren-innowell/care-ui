// @flow

import { type ThemeType } from 'web-components/atoms'

export const headerStyle = () => ({
  paddingTop: '2.4rem',
  textAlign: 'center',
})

export const scoreCardsHeaderStyle = ({ theme }: ThemeType) => ({
  fontSize: '1.6rem',
  display: 'flex',
  flexDirection: 'column',
  gap: theme.care.spacing.xs,
  [theme.care.breakpoints.queries.md]: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
})

export const wrapperStyle = ({ theme }: ThemeType) => ({
  margin: 'auto',
  display: 'flex',
  justifyContent: 'space-between',
  [theme.breakpoints.queries.xsOnly]: {
    justifyContent: 'center',
    flexDirection: 'column',
    '> a': {
      margin: 'auto',
      marginBottom: '20px',
    },
  },
})
