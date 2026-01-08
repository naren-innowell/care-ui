import React from 'react'

import { FlexContainer, IconNew, StorybookContainer } from 'web-components'
import * as ICONS from 'web-components/atoms/icons-new'

export default {
  title: 'Atoms/IconsNew',
}

export const IconsNew = () => (
  <StorybookContainer
    componentName="Icons"
    componentDescription="Collection of icons and graphics used across the platform"
  >
    <FlexContainer gap="xs">
      {Object.values(ICONS).map(icon => <IconNew as={icon} size="md" />)}
    </FlexContainer>
  </StorybookContainer>
)
