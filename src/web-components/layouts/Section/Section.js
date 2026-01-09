// @flow

import React from 'react'
import { useFela } from 'react-fela'

import { containerStyle } from './Section.style'

type PropsType = {
  children: React$Node,
  color?: string,
}

const Section = ({ children, color }: PropsType): React$Node => {
  const { css } = useFela({ color })

  return <div className={css(containerStyle)}>{children}</div>
}

export default Section
