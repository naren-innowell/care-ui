// @flow

import React from 'react'
import { useFela } from 'react-fela'

import { gridStyle } from './Grid.style'

type PropsType = {
  children: ?Array<?React$Node>,
  extend?: (
    props: any,
  ) => {
    [key: string]: string,
  },
}

const Grid = ({ children, extend }: PropsType): React$Node => {
  const { css } = useFela({ extend })

  return <div className={css(gridStyle)}>{children}</div>
}

export default Grid
