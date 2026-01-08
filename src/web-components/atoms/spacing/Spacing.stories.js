import React from 'react'

import { FlexContainer, StorybookContainer, Text } from 'web-components'
import theme from 'web-components/atoms'

export default {
  title: 'Atoms/Spacing',
}

export const Spacing = () => (
  <StorybookContainer
    componentName="Spacing"
    componentDescription="Spacing system based on a 4px scale"
  >
    <FlexContainer gap="xs">
      {Object.keys(theme.spacing).map(space => (
        <div
          key={space}
          style={{
            paddingRight: theme.spacing[space],
            border: '1px solid black',
          }}
        >
          <Text center bold>
            {space}: {theme.spacing[space]}
          </Text>
        </div>
      ))}
    </FlexContainer>
  </StorybookContainer>
)
