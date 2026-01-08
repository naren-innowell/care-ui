// @flow

import React, { type Node } from 'react'
import { useFela } from 'react-fela'

import type { SpacingOptions } from 'web-components/atoms/themeHelpers'

import { boxContainer } from './Box.style'

type PropTypes = {
  alignContent?: string,
  alignItems?: 'center' | 'left' | 'right',
  backgroundColor?: string,
  border?: string,
  borderBottom?: string,
  borderLeft?: string,
  borderRadius?: string,
  borderTop?: string,
  boxShadow?: 1 | 2 | 3 | 4 | 5,
  children?: Node,
  dataTestId?: string,
  direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse',
  display?: string,
  height?: string,
  id?: string,
  justifyContent?: string,
  marginBottom?: SpacingOptions | string,
  marginTop?: SpacingOptions | string,
  marginX?: SpacingOptions | string,
  marginY?: SpacingOptions | string,
  maxHeight?: string,
  maxWidth?: string,
  minHeight?: string,
  minWidth?: string,
  onClick?: () => void,
  overflow?: 'auto' | 'hidden' | 'none' | 'scroll',
  paddingLeft?: SpacingOptions | string,
  paddingTop?: SpacingOptions | string,
  paddingX?: SpacingOptions | string,
  paddingY?: SpacingOptions | string,
  position?: 'sticky' | 'fixed' | 'absolute' | 'relative',
  textAlign?: 'center' | 'left' | 'right',
  top?: number,
  width?: string,
  zIndex?: number,
}

const Box = (props: PropTypes) => {
  const { children, dataTestId, onClick, id } = props
  const { css } = useFela({ ...props })

  // Only add these if onClick is provided
  const clickableProps = onClick
    ? {
        onClick,
        onKeyPress: onClick,
        role: 'button',
        tabIndex: 0,
      }
    : {}

  return (
    <div
      className={css(boxContainer)}
      data-testid={dataTestId}
      id={id}
      {...clickableProps}
    >
      {children}
    </div>
  )
}

export default Box
