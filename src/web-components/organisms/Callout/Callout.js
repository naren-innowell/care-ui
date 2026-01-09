// @flow

import React from 'react'
import { useFela } from 'react-fela'

import { IconNew, Text } from 'web-components'

import { calloutContainer, sizeStyle, variantStyle } from './Callout.style'

type CalloutPropsType = {
  calloutIcon?: string,
  calloutText: string | React$Node,
  size?: 'lg' | 'md',
  variant: 'danger' | 'warning',
}

const Callout = (props: CalloutPropsType): React$Node => {
  const { calloutText, calloutIcon, variant, size = 'md' } = props

  const { css } = useFela({ ...props })

  return (
    <div className={css(calloutContainer, sizeStyle, variantStyle)}>
      {calloutIcon && <IconNew as={calloutIcon} color={variant} size={size} />}

      <Text size={size} bold>
        {calloutText}
      </Text>
    </div>
  )
}

export default Callout
