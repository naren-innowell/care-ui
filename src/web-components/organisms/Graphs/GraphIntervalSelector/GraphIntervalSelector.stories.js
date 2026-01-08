import React from 'react'

import { Box, StorybookContainer } from 'web-components'

import GraphIntervalSelectorComponent from './GraphIntervalSelector'

export default {
  title: 'Organisms/GraphIntervalSelector',
  component: GraphIntervalSelectorComponent,
  argTypes: {
    interval: { control: 'select' },
  },
  render: args => (
    <Box width="500px">
      <StorybookContainer
        componentName="Graph Interval Selector"
        componentDescription="Interval Selector for graphs."
      >
        <GraphIntervalSelectorComponent {...args} />
      </StorybookContainer>
    </Box>
  ),
}

export const GraphIntervalSelector = {
  args: {
    interval: 'monthly',
    setQueryVariables: () => {},
  },
}
