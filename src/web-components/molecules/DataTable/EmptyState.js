// @flow

// TODO: MOVE TO CARE-UI WHEN EMPTY STATE IS STANDARDIZED

import React from 'react'

import { Box } from 'web-components'
import TextNew from 'web-components/molecules/TextNew/TextNew'

type EmptyStatePropsType = {
  headingText: string,
  subHeadingText: string,
}

const EmptyState = (props: EmptyStatePropsType): React$Node => {
  const { headingText, subHeadingText } = props

  return (
    <Box alignContent="center" textAlign="center">
      <TextNew typography="bodyMd">{headingText}</TextNew>
      <TextNew typography="bodyMd">{subHeadingText}</TextNew>
    </Box>
  )
}

export default EmptyState
