// @flow

import React from 'react'

import { Box, FlexContainer, Text } from 'web-components'

type StorybookContainerProps = {
  children: React$Node,
  componentDescription: string,
  componentName: string,
}
const StorybookContainer = (props: StorybookContainerProps): React$Node => {
  const { componentName, componentDescription, children } = props

  return (
    <FlexContainer
      direction="column"
      gap="xs"
      style={{ border: '1px solid black' }}
    >
      {/* Description */}
      <Box marginY="lg" borderBottom="subtle">
        <Text size="lg" bold>
          {componentName}
        </Text>
        <Text size="sm">{componentDescription}</Text>
      </Box>

      {children}
    </FlexContainer>
  )
}

export default StorybookContainer
