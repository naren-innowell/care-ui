// @flow

import React from 'react'
import { useFela } from 'react-fela'

import { wrapperStyle, wrapperStyleSkip } from './ProgressBar.style'

type PropsType = {
  ariaLabel?: string,
  current?: number,
  dataTestId?: string,
  size?: 'lg' | 'md',
  skippedSets?: Array<number>,
  total?: number,
  value?: number,
  variant?: 'normal' | 'skippable',
}

const ProgressBar = (props: PropsType): React$Node => {
  const {
    value,
    dataTestId,
    ariaLabel,
    size = 'md',
    variant = 'normal',
    current = 0,
    total = 0,
    skippedSets = [],
  } = props

  const { css } = useFela({ size, value })

  if (variant === 'skippable') {
    const progressBar = []

    for (let i = 0; i < total; i += 1) {
      const classNames = ['progress']

      if (i === current - 1) classNames.push('current')
      if (skippedSets.indexOf(i) !== -1 && i < current)
        classNames.push('skipped')
      else if (i < current) classNames.push('done')

      const className = classNames.join(' ')

      progressBar.push(<span key={i} className={className} />)
    }

    return (
      <div className={css(wrapperStyleSkip)} data-testid={dataTestId}>
        {progressBar}
      </div>
    )
  }

  const clampValue = (valueReceived: number, min: number, max: number): number => {
    if (valueReceived === null || valueReceived === undefined) {
      return min
    }
    return Math.max(min, Math.min(valueReceived, max))
  }

  const clampedValue = clampValue(value ?? 0, 0, 100)

  return (
    <div
      data-testid={dataTestId}
      aria-label={ariaLabel}
      className={css(wrapperStyle)}
    >
      <progress max={100} value={clampedValue} />
    </div>
  )
}

export default ProgressBar
