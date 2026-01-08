// @flow

import React, { type Node, useRef, useState } from 'react'
import { useFela } from 'react-fela'

import { Text } from 'web-components'

import { sizeStyle, textStyle, tooltipContainerStyle } from './Tooltip.style'

type PropsType = {
  children: Node,
  dataTestId?: string,
  note?: string,
  position?: 'top' | 'bottom' | 'left' | 'right' | 'bottom-left',
  size?: 'lg' | 'md',
  text: string,
  variant?: 'tooltip' | 'info',
  width?: string,
}

const Tooltip = ({
  children,
  dataTestId,
  position = 'right',
  text,
  variant,
  width,
  note,
  size,
}: PropsType) => {
  const [leftPosition, setLeft] = useState('0')
  const [topPosition, setTop] = useState('0')

  const { css, theme } = useFela({
    left: leftPosition,
    top: topPosition,
    variant,
    size,
    width,
    position,
  })
  const containerRef = useRef(null)

  const onMouseEnter = () => {
    if (!containerRef.current) return null

    const {
      top,
      left,
      width: elemWidth,
      height: elemHeight,
    } = containerRef.current.getBoundingClientRect()
    const gap = parseInt(theme.care.spacing.xxs, 10)

    let tooltipTop = 0
    let tooltipLeft = 0

    switch (position) {
      case 'top':
        tooltipTop = top - gap
        tooltipLeft = left + elemWidth / 2
        break
      case 'right':
        tooltipTop = top + elemHeight / 2
        tooltipLeft = left + elemWidth + gap
        break
      case 'left':
        tooltipTop = top + elemHeight / 2
        tooltipLeft = left - gap
        break
      case 'bottom-left':
        tooltipTop = top + elemHeight + gap
        tooltipLeft = left - 100
        break
      case 'bottom':
      default:
        tooltipTop = top + elemHeight + gap
        tooltipLeft = left + elemWidth / 2
        break
    }

    setTop(`${tooltipTop}px`)
    setLeft(`${tooltipLeft}px`)

    return null
  }

  return (
    <div
      ref={containerRef}
      onMouseEnter={onMouseEnter}
      className={css(sizeStyle, tooltipContainerStyle)}
    >
      {children}
      <Text
        as="span"
        data-testid={dataTestId}
        size="md"
        center
        extend={() =>
          textStyle({
            theme,
            left: leftPosition,
            top: topPosition,
            variant,
            width,
            position,
          })
        }
      >
        {text}&nbsp;
        {note && (
          <>
            <br />
            <br />
            {note}
          </>
        )}
      </Text>
    </div>
  )
}

export default Tooltip
