// @flow
 
import React from 'react'
import { useFela } from 'react-fela'

import {
  badgeContainer,
  betaVariantStyle,
  sizeStyle,
  variantStyle,
} from './Badge.style'

type PropTypes = {
  label: string,
  size?: 'lg' | 'md',
  variant?: 'general' | 'good' | 'moderate' | 'mild' | 'concern' | 'beta',
}

const Badge = (props: PropTypes): React$Node => {
  const { label, variant = 'general' } = props
  const { css } = useFela({ ...props })

  const ComponentElement = variant === 'beta' ? 'sup' : 'div'

  return (
    <ComponentElement
      className={css(badgeContainer, sizeStyle, variantStyle, betaVariantStyle)}
    >
      {label}
    </ComponentElement>
  )
}

export default Badge
