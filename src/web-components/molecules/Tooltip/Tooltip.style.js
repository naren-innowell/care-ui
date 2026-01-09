// @flow

import { type ThemeType } from 'web-components/atoms'

type SizeStyleProps = {
  size?: 'lg' | 'md',
  theme: ThemeType,
}

export const sizeStyle = (props: SizeStyleProps): any => {
  const { size, theme } = props

  // large size
  if (size === 'lg') {
    return {
      ...theme.care.typography.desktop.bodyLg,
    }
  }

  // medium size | Default
  return {
    ...theme.care.typography.desktop.bodySm,
  }
}

const getWidthStyle = (variant?: string, width?: string): any => {
  if (variant === 'info') {
    return { width: width || '300px' }
  }

  return {}
}

type PropsType = {
  left: string,
  position?: 'top' | 'bottom' | 'left' | 'right' | 'bottom-left',
  theme: ThemeType,
  top: string,
  variant?: 'tooltip' | 'info',
  width?: string,
}

export const tooltipContainerStyle = (): any => ({
  display: 'flex',
  ':hover span': {
    visibility: 'visible',
    opacity: '1',
  },
})

export const textStyle = ({
  theme,
  left,
  top,
  variant,
  width,
  position,
}: PropsType): any => {
  const widthStyle = getWidthStyle(variant, width)

  let transform = 'translateX(-50%)'
  if (position === 'left') transform = 'translateX(-100%) translateY(-50%)'
  if (position === 'right') transform = 'translateY(-50%)'
  if (position === 'top') transform = 'translateX(-50%) translateY(-100%)'

  return {
    left,
    top,
    transform,
    visibility: 'hidden',
    whiteSpace: 'nowrap',
    position: 'fixed',
    zIndex: '100',
    opacity: '0',
    transition: 'opacity 0.1s',
    backgroundColor: theme.care.palette.surface.subtle,
    borderRadius: theme.care.radius.xxs,
    padding: theme.care.spacing.xxs,
    boxShadow: theme.care.elevation['2'],
    textAlign: 'left',
    textWrap: 'wrap',
    ...widthStyle,
  }
}
