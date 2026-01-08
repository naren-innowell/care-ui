// @flow

type ThemeType = { [string]: any }

const ICON_SIZES = { xl: '44px', lg: '36px', md: '22px', sm: '16px' }

type IconStyleProps = {
  color?: string,
  isClickable?: boolean,
  onClick?: () => void,
  size?: 'xl' | 'lg' | 'md' | 'sm',
  theme: ThemeType,
}

export const iconStyle = (props: IconStyleProps) => {
  const {
    theme,
    size = 'md',
    color = 'currentColor',
    onClick,
    isClickable = !!onClick,
  } = props

  const iconSize = ICON_SIZES[size]

  return {
    display: 'inline-block',
    height: iconSize,
    lineHeight: iconSize,
    width: iconSize,
    userSelect: 'none',
    cursor: isClickable ? 'pointer' : '',

    '& [data-name="SVG background containers"]': {
      visibility: 'hidden',
    },

    '& *[fill]:not([fill="none"])': {
      fill: theme.care.palette.text?.[color] || color,
    },

    '& *[stroke]:not([stroke="none"])': {
      stroke: theme.care.palette.text?.[color] || color,
    },
  }
}
