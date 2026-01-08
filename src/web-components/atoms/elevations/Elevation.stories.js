import React from 'react'

import { FlexContainer, StorybookContainer, Text } from 'web-components'
import theme from 'web-components/atoms'

export default {
  title: 'Atoms/Elevation',
}

export const Elevation = () => (
  <StorybookContainer
    componentName="Elevations"
    componentDescription="Elevation brings subtle attention to certain elements, indicating an
        element is interactive"
  >
    <FlexContainer gap="xs">
      {Object.keys(theme.elevation).map(level => (
        <div
          key={level}
          style={{
            boxShadow: theme.elevation[level],
            padding: '20px',
            marginBottom: '20px',
          }}
        >
          <Text center bold>
            Elevation {level}
            <br /> {theme.elevation[level]}
          </Text>
        </div>
      ))}
    </FlexContainer>
  </StorybookContainer>
)
