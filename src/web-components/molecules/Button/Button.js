// @flow

import React from 'react'
import { useFela } from 'react-fela'
import Link from 'found/Link'

import { IconNew, Tooltip } from 'web-components'

import useBreakpoints from '../hooks/useBreakpoints'

import { defaultStyle, sizeStyle, variantStyle } from './Button.style'

type IconColorProps =
  | 'primary'
  | 'secondary'
  | 'text'
  | 'pill'
  | 'danger'
  | 'link'

const getIconColor = (variant: IconColorProps) => {
  if (variant === 'secondary' || variant === 'text') {
    return 'positive'
  }

  return 'default'
}

export type ToPropType = {|
  name?: string,
  params?: { [string]: any },
|}

type PropsType = {
  active?: boolean | string,
  ariaLabel?: string,
  children?: string | React$Node,
  compactPadding?: boolean,
  dataTestId?: string,
  disabled?: boolean,
  fullWidth?: boolean,
  href?: string,
  icon?: string,
  id?: string,
  leftIcon?: string,
  onClick?: (event?: SyntheticEvent<any>) => any,
  onKeyDown?: (event: SyntheticKeyboardEvent<any>) => any,
  onMouseEnter?: (event?: SyntheticEvent<any>) => any,
  onMouseLeave?: (event?: SyntheticEvent<any>) => any,
  rightIcon?: string,
  size?: 'lg' | 'md' | 'sm',
  target?: '' | '_blank',
  to?: string | ToPropType,
  tooltipPosition?: 'top' | 'bottom' | 'left' | 'right' | 'bottom-left',
  tooltipText?: string,
  type?: 'button' | 'submit' | 'reset',
  variant?: 'primary' | 'secondary' | 'text' | 'pill' | 'danger' | 'link',
}

const Button = (props: PropsType): React$Node => {
  const {
    children: buttonText,
    type = 'button',
    disabled,
    to,
    href,
    icon,
    id,
    leftIcon,
    rightIcon,
    target,
    onClick,
    onKeyDown,
    onMouseEnter,
    onMouseLeave,
    ariaLabel,
    dataTestId,
    active = 'true',
    size = 'md',
    tooltipText,
    tooltipPosition,
    variant = 'primary',
  } = props

  const breakpoints = useBreakpoints()

  const { css } = useFela({ ...props, breakpoints })

  const LinkElement = to ? Link : 'a'
  const ButtonElement = href || to ? LinkElement : 'button'

  // Button as Link
  const linkElementProps: { [key: string]: any } = {}
  if (to) {
    linkElementProps.to = to
  }

  // Button As Anchor Tag
  if (href) {
    linkElementProps.href = href
    linkElementProps.target = target
    linkElementProps.rel = 'noopener noreferrer'
  }

  const handleOnClick = (e: SyntheticEvent<any>) => {
    if (!onClick) {
      return
    }

    onClick(e)
  }

  const iconColor = disabled ? 'disabled' : getIconColor(variant)

  const buttonElement = (
    <ButtonElement
      {...linkElementProps}
      onKeyDown={onKeyDown}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={(e) => handleOnClick(e)}
      className={css(defaultStyle, sizeStyle, variantStyle)}
      disabled={disabled}
      type={type}
      aria-label={ariaLabel}
      data-testid={dataTestId}
      role={href || to ? 'link' : 'button'}
      active={String(active)}
      id={id}
    >
      {leftIcon && <IconNew as={leftIcon} size={size} color={iconColor} />}
      {!icon && buttonText}
      {rightIcon && <IconNew as={rightIcon} color={iconColor} />}
      {icon && <IconNew as={icon} color={iconColor} />}
    </ButtonElement>
  )
  return tooltipText ? (
    <Tooltip text={tooltipText} position={tooltipPosition}>
      {buttonElement}
    </Tooltip>
  ) : (
    buttonElement
  )
}

export default Button
