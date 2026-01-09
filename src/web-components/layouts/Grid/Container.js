// @flow

import React from 'react'
import { useFela } from 'react-fela'

import { containerStyle } from './Container.style'

type PropsType = {
  children: React$Node,
  extend?: (
    props: any,
  ) => {
    [key: string]: string,
  },
}

const Container = ({ children, extend }: PropsType): React$Node => {
  const { css } = useFela({ extend })

  return <div className={css(containerStyle)}>{children}</div>
}

export default Container
