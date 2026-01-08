// @flow

import React, { type Node } from 'react'
import { useFela } from 'react-fela'

import { containerStyle } from './Container.style'

type PropsType = {
  children: Node,
  extend?: (
    props: any,
  ) => {
    [key: string]: string,
  },
}

const Container = ({ children, extend }: PropsType) => {
  const { css } = useFela({ extend })

  return <div className={css(containerStyle)}>{children}</div>
}

export default Container
