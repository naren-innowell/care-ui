// @flow

import { type ThemeType } from 'web-components/atoms'

type ModalStyleProps = {
  theme: ThemeType,
  width: string,
}
export const modalStyle = ({ theme, width }: ModalStyleProps): any => ({
  background: theme.care.palette.surface.default,
  width: width || '70vw',
  overflow: 'auto',
  padding: '0px',
  borderRadius: theme.care.radius.md,
  border: 'none',
  '::backdrop': {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
  },
})

export const modalHeader = ({ theme }: { theme: ThemeType }): any => ({
  borderBottom: `1px solid ${theme.care.palette.border.subtle}`,
  padding: `${theme.care.spacing.sm} ${theme.care.spacing.lg}`,
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
})

export const modalBody = ({
  theme,
  height,
}: {
  height: string,
  theme: ThemeType,
}): any => ({
  padding: `${theme.care.spacing.sm} ${theme.care.spacing.lg}`,
  height: height || 'auto',
})

export const modalFooter = ({ theme }: { theme: ThemeType }): any => ({
  padding: `${theme.care.spacing.sm} ${theme.care.spacing.lg}`,
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
})

export const modalOverlay = (): any => ({
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.75)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 999,
})

export const modalContainer = ({ theme, width }: ModalStyleProps): any => ({
  background: theme.care.palette.surface.default,
  borderRadius: theme.care.radius.md,
  width: width || '70vw',
  height: 'auto',
  position: 'relative',
  zIndex: 1000,
})
