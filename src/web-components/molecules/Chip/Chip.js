// @flow

import React from 'react'
import { useFela } from 'react-fela'

import { IconNew } from 'web-components'
import { CloseIcon } from 'web-components/atoms/icons-new'

import { chipContainer, sizeStyle, variantStyle } from './Chip.style'

type PropsType = {
  label: string,
  onClick: () => void,
  size?: 'lg' | 'md',
  variant?: 'primary' | 'secondary',
}

const Chip = (props: PropsType): React$Node => {
  const { label, onClick, size = 'md' } = props
  const { css } = useFela({ ...props })

  return (
    <div
      data-testid="chip"
      className={css(chipContainer, sizeStyle, variantStyle)}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(event) => {
        if (event.key === 'Delete' || event.key === 'Backspace') {
          onClick()
        }
      }}
    >
      <div>{label}</div>

      <IconNew as={CloseIcon} size={size} />
    </div>
  )
}

export default Chip
