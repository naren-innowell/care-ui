// @flow

import React, { type Node } from 'react'
import { useFela } from 'react-fela'

import { containerStyle } from './Section.style'

type PropsType = {
  children: Node,
  color?: string,
}

const Section = ({ children, color }: PropsType) => {
  const { css } = useFela({ color })

  return <div className={css(containerStyle)}>{children}</div>
}

export default Section
