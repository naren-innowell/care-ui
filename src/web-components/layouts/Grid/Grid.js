// @flow

import React, { type Node } from 'react'
import { useFela } from 'react-fela'

import { gridStyle } from './Grid.style'

type PropsType = {
  children: ?Array<?Node>,
  extend?: (
    props: any,
  ) => {
    [key: string]: string,
  },
}

const Grid = ({ children, extend }: PropsType) => {
  const { css } = useFela({ extend })

  return <div className={css(gridStyle)}>{children}</div>
}

export default Grid
