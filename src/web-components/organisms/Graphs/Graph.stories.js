import React from 'react'

import { Box, StorybookContainer } from 'web-components'

import GraphComponent from './Graph'

export default {
  title: 'Organisms/Graph',
  component: GraphComponent,
  argTypes: {
    graphType: { control: 'select' },
    xAxisTitle: { control: 'text' },
  },
  render: args => (
    <Box width="500px">
      <StorybookContainer
        componentName="Graph"
        componentDescription="Different graphs used in care platform."
      >
        <GraphComponent {...args} />
      </StorybookContainer>
    </Box>
  ),
}

const series = [
  {
    name: 'Data 1',
    data: [20, 10, 30, 25],
  },
  {
    name: 'Data 2',
    data: [10, 5, 40, 60],
  },
  {
    name: 'Data 3',
    data: [5, 8, 32, 20],
  },
  {
    name: 'Data 4',
    data: [15, 25, 12, 45],
  },
  {
    name: 'Data 5',
    data: [8, 18, 0, 14],
  },
  {
    name: 'Data 6',
    data: [12, 16, 1, 42],
  },
]

export const Graph = {
  args: {
    series,
    seriesCategories: [
      'Data 1',
      'Data 2',
      'Data 3',
      'Data 4',
      'Data 5',
      'Data 6',
    ],
    graphType: 'line',
    xAxisTitle: 'Graph X axis title',
  },
}
