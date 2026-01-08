import React from 'react'

import { Box } from 'web-components'

import GridItemComponent from './GridItem'

export default {
  title: 'Layouts/GridItem',
  component: GridItemComponent,
  argTypes: {
    center: { control: 'boolean' },
    lg: { control: 'number' },
    md: { control: 'number' },
    sm: { control: 'number' },
    xl: { control: 'number' },
    xs: { control: 'number' },
  },
  render: args => (
    <Box width="70vw">
      <GridItemComponent {...args}>Grid Item</GridItemComponent>
    </Box>
  ),
}

export const GridItem = {
  args: {
    center: false,
    lg: 5,
    md: 3,
    sm: 2,
    xl: 6,
    xs: 1,
  },
}
