import React from 'react'

import { Box } from 'web-components'

import GraphContainerComponent from './GraphContainer'

export default {
  title: 'Organisms/GraphContainer',
  component: GraphContainerComponent,
  argTypes: {
    heading: { control: 'text' },
    interval: { control: 'select', options: ['weekly', 'monthly', 'yearly'] },
    setQueryVariables: { control: null },
  },
}

const Template = (args) => (
  <Box width="70vw">
    <GraphContainerComponent {...args}>Graph Content</GraphContainerComponent>
  </Box>
)

export const GraphContainer = Template.bind({})
GraphContainer.args = {
  heading: 'Graph Container',
  graphInfoText: 'Information about the graph',
  queryVariables: { interval: 'monthly' },
  setQueryVariables: 'setQueryVariables',
}
