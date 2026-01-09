// @flow

import { type ThemeType } from 'web-components/atoms'

type DataTableProps = {
  theme: ThemeType,
}

export const dataTable = ({ theme }: DataTableProps): { [key: string]: any } => {
  return {
    minWidth: '1024px',
    width: '100%',
    textAlign: 'left',
    borderCollapse: 'collapse',
    color: theme.care.palette.text.body,
    ...theme.care.typography.desktop.bodymd,
  }
}

export const thStyles = ({ theme }: DataTableProps): { [key: string]: any } => {
  return {
    paddingRight: theme.care.spacing.xxl,
    fontWeight: 'inherit',
  }
}

export const lastColumnStyles = (): { [key: string]: any } => {
  return {
    paddingRight: '0',
    fontWeight: 'inherit',
  }
}

export const tbodyStyles = ({ theme }: DataTableProps): { [key: string]: any } => {
  return {
    color: theme.care.palette.text.positive,
    '> tr': {
      borderBottom: `1px solid ${theme.care.palette.border.subtle}`,
      height: theme.care.spacing.xxxl,
    },
  }
}

export const emptyStateStyles = (): { [key: string]: any } => ({
  height: '60vh',
})
