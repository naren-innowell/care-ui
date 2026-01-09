// @flow

import React from 'react'
import { useFela } from 'react-fela'

import { dividerStyle } from './Divider.style'

type DividerProps = {
  variant?: 'default' | 'positive',
}

const Divider = (props: DividerProps): React$Node => {
  const { css } = useFela({ ...props })

  return <div className={css(dividerStyle)} />
}

export default Divider
