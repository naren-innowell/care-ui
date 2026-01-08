// @flow

import { type ThemeType } from 'web-components/atoms'

type DataTableProps = {
  theme: ThemeType,
}

export const dataTable = ({ theme }: DataTableProps) => {
  return {
    minWidth: '1024px',
    width: '100%',
    textAlign: 'left',
    borderCollapse: 'collapse',
    color: theme.care.palette.text.body,
    ...theme.care.typography.desktop.bodymd,
  }
}

export const thStyles = ({ theme }: DataTableProps) => {
  return {
    paddingRight: theme.care.spacing.xxl,
    fontWeight: 'inherit',
  }
}

export const lastColumnStyles = () => {
  return {
    paddingRight: '0',
    fontWeight: 'inherit',
  }
}

export const tbodyStyles = ({ theme }: DataTableProps) => {
  return {
    color: theme.care.palette.text.positive,
    '> tr': {
      borderBottom: `1px solid ${theme.care.palette.border.subtle}`,
      height: theme.care.spacing.xxxl,
    },
  }
}

export const emptyStateStyles = () => ({
  height: '60vh',
})
