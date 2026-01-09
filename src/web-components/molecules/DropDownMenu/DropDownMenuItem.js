// @flow

import React, { type Element, forwardRef } from 'react'
import { useFela } from 'react-fela'
import Link from 'found/Link'

import { menutItemStyle, sizeStyle } from './DropDownMenuItem.style'

type ToPropType = {|
  name?: string,
  params?: { [string]: any },
|}

type PropTypes = {
  ariaLabel?: string,
  children: string | Element<any>,
  dataTestId?: string,
  href?: string,
  id?: string,
  isActive?: boolean,
  isFocused?: boolean,
  onClick?: () => void,
  onMouseEnter?: () => void,
  size?: 'lg' | 'md',
  to?: string | ToPropType,
}

const DropDownMenuItem: any = forwardRef<PropTypes, any>((props: PropTypes, ref): React$Node => {
  const {
    children,
    onClick,
    onMouseEnter,
    to,
    href,
    dataTestId,
    ariaLabel,
    id,
  } = props

  const { css } = useFela({ ...props })

  const LinkElement = to ? Link : 'a'
  const MenuItemElement = href || to ? LinkElement : 'div'

  return (
    <MenuItemElement
      ref={ref}
      className={css(menutItemStyle, sizeStyle)}
      onMouseEnter={onMouseEnter}
      onClick={onClick}
      href={href}
      to={to}
      data-testid={dataTestId}
      aria-label={ariaLabel}
      role="button"
      id={id}
    >
      {children}
    </MenuItemElement>
  )
})

export default DropDownMenuItem
