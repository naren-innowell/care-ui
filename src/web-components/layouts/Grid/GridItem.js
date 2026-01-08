// @flow

import React, { type Node } from 'react'
import { useFela } from 'react-fela'

import { gridItemStyle } from './GridItem.style'

type PropsType = {
  center?: boolean,
  children: Node,
  lg?: number,
  md?: number,
  sm?: number,
  xl?: number,
  xs?: number,
}

const GridItem = ({ xs, sm, md, lg, xl, center, children }: PropsType) => {
  const { css } = useFela({ xs, sm, md, lg, xl, center })

  return <div className={css(gridItemStyle)}>{children}</div>
}

export default GridItem
