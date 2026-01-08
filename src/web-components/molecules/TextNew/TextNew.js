// @flow

import React, { type Node } from 'react'
import { useFela } from 'react-fela'

import { textStyle } from './TextNew.style'

type TextProps = {
  as?: string,
  children: string | Node,
  color?: 'positive' | 'title' | 'default' | 'caption' | 'danger' | 'disabled',
  dataTestId?: string,
  marginLeft?: string,
  removeBlockMargin?: boolean,
  textAlign?: 'left' | 'center' | 'right',
  truncateText?: boolean,
  typography?:
    | 'display'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'bodyLg'
    | 'bodyLgBold'
    | 'bodyLgLink'
    | 'bodyMd'
    | 'bodyMdBold'
    | 'bodyMdLink'
    | 'bodySm'
    | 'bodySmBold'
    | 'bodySmLink',
  whiteSpace?: 'nowrap' | 'wrap',
}

const TextNew = (props: TextProps) => {
  const { children, as: Component = 'p', dataTestId } = props

  const { css } = useFela({ ...props })

  return (
    <Component className={css(textStyle)} data-testid={dataTestId}>
      {children}
    </Component>
  )
}

export default TextNew
