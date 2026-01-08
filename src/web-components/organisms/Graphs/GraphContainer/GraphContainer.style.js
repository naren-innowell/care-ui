// @flow

import { type ThemeType } from 'web-components/atoms'

export const graphContainerHeader = ({ theme }: { theme: ThemeType }) => ({
  backgroundColor: theme.care.palette.surface.subtle,
  padding: theme.care.spacing.xs,
})
