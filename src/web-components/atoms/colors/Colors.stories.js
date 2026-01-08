import React from 'react'

import { FlexContainer, StorybookContainer, Text } from 'web-components'
import theme from 'web-components/atoms'

export default {
  title: 'Atoms/Colors',
}

const ColorSection = ({ title, colors }) => (
  <>
    <Text size="lg" bold>
      {title}
    </Text>

    <FlexContainer direction="row" gap="sm" alignItems="center">
      {Object.keys(colors).map(color => (
        <div
          key={color}
          style={{
            backgroundColor: colors[color],
            padding: '20px',
            color: theme.palette.text.body,
          }}
        >
          <Text size="sm" bold color="title">
            {color}: {colors[color]}
          </Text>
        </div>
      ))}
    </FlexContainer>
  </>
)

export const Colors = () => (
  <StorybookContainer
    componentName="Colors"
    componentDescription="Flexible colour palette to achieve clean interfaces and strong brand
          experience"
  >
    <FlexContainer gap="xs">
      <ColorSection title="Surface Colors" colors={theme.palette.surface} />
      <ColorSection title="Text Colors" colors={theme.palette.text} />
      <ColorSection title="Border Colors" colors={theme.palette.border} />
      <ColorSection title="Divider Colors" colors={theme.palette.divider} />
    </FlexContainer>
  </StorybookContainer>
)
