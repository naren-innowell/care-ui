import React from 'react'

import { FlexContainer, StorybookContainer, Text } from 'web-components'
import theme from 'web-components/atoms'

export default {
  title: 'Atoms/Radius',
}

export const Radius = () => (
  <StorybookContainer
    componentName="Radius"
    componentDescription="Radius system based on a 2px scale. Used to add softness within the
        platform"
  >
    <FlexContainer gap="xs">
      {Object.keys(theme.radius).map(radius => (
        <div
          key={radius}
          style={{
            borderRadius: theme.radius[radius],
            border: '1px solid black',
            padding: '20px',
            marginBottom: '20px',
            display: 'flex',
            gap: '4px',
          }}
        >
          <Text center bold>
            {radius}: {theme.radius[radius]}
          </Text>
        </div>
      ))}
    </FlexContainer>
  </StorybookContainer>
)
