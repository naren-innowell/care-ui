import React from 'react'

import { Box } from 'web-components'

import GridComponent from './Grid'

export default {
  title: 'Layouts/Grid',
  component: GridComponent,
  argTypes: {
    extend: { control: 'object' },
  },
  render: args => (
    <Box width="70vw">
      <GridComponent {...args}>
        <div
          style={{
            backgroundColor: 'lightgray',
            padding: '10px',
            margin: '5px',
          }}
        >
          Item 1
        </div>
        <div
          style={{
            backgroundColor: 'lightgray',
            padding: '10px',
            margin: '5px',
          }}
        >
          Item 2
        </div>
        <div
          style={{
            backgroundColor: 'lightgray',
            padding: '10px',
            margin: '5px',
          }}
        >
          Item 3
        </div>
      </GridComponent>
    </Box>
  ),
}

export const Grid = {
  args: {
    extend: null,
  },
}
