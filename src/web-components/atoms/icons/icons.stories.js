import React from 'react'

import { Box, FlexContainer, Icon, Text } from 'web-components'
import * as ICONS from 'web-components/atoms/icons'

export default {
  title: 'Atoms/Icons',
}

export const Icons = () => (
  <FlexContainer direction="column" gap="xs">
    {/* Description */}
    <Box marginY="lg">
      <Text size="lg" bold>
        Icons
      </Text>
      <Text size="sm">
        Collection of icons and graphics used across the platform
      </Text>
    </Box>

    <FlexContainer gap="xs">
      {Object.values(ICONS).map(icon => (
        <div
          key={icon}
          style={{
            border: '1px solid black',
            padding: '12px',
          }}
        >
          <Icon as={icon} />
        </div>
      ))}
    </FlexContainer>
  </FlexContainer>
)
