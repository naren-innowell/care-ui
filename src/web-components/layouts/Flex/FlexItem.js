// @flow

import React, { type Node } from 'react'
import { useFela } from 'react-fela'

import { flexItem } from './FlexItem.style'

type PropTypes = {
  alignSelf?: 'center' | 'end' | 'start',
  children: Node,
  dataTestId?: string,
  flex?: string | number,
}
const FlexItem = (props: PropTypes) => {
  const { children, dataTestId } = props

  const { css } = useFela({ ...props })

  return (
    <div className={css(flexItem)} data-testid={dataTestId}>
      {children}
    </div>
  )
}

export default FlexItem
