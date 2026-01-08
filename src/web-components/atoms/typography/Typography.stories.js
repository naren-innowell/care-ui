import React from 'react'

import { FlexContainer, StorybookContainer } from 'web-components'
import theme from 'web-components/atoms'

export default {
  title: 'Atoms/Typography',
}

export const Typography = () => (
  <StorybookContainer
    componentName="Typography"
    componentDescription="Typography based on a 4px scaled"
  >
    <FlexContainer gap="xs">
      {Object.keys(theme.typography.desktop).map(textStyle => (
        <div
          key={textStyle}
          style={{
            ...theme.typography.desktop[textStyle],
            marginBottom: '20px',
            border: '1px solid black',
            padding: '12px',
          }}
        >
          {textStyle}: {theme.typography.desktop[textStyle].fontSize}
        </div>
      ))}
    </FlexContainer>
  </StorybookContainer>
)
