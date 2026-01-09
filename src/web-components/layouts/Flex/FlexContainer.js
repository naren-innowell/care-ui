// @flow

import React from 'react'
import { useFela } from 'react-fela'

import { flexContainer } from './FlexContainer.style'

type PropTypes = {
  alignItems?: string,
  boxStyle?: { [string]: string },
  children?: React$Node,
  dataTestId?: string,
  direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse',
  gap?: string,
  height?: string,
  id?: string,
  justifyContent?: string,
  marginTop?: string,
  paddingX?: string,
  paddingY?: string,
  width?: string,
  wrap?: 'wrap' | 'nowrap',
}

const FlexContainer = (props: PropTypes): React$Node => {
  const { children, dataTestId, id } = props

  const { css } = useFela({ ...props })

  return (
    <div className={css(flexContainer)} data-testid={dataTestId} id={id}>
      {children}
    </div>
  )
}

export default FlexContainer
