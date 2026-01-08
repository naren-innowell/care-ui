import React from 'react'

import { Box } from 'web-components'

import ContainerComponent from './Container'

export default {
  title: 'Layouts/Container',
  component: ContainerComponent,
  argTypes: {
    children: { control: 'text' },
    extend: { control: 'null' },
  },
  render: ({ children, ...rest }) => (
    <ContainerComponent {...rest}>
      <Box width="70vw" height="50vh" border="1px solid black">
        {children}
      </Box>
    </ContainerComponent>
  ),
}

export const Container = {
  args: {
    children: 'Container Content',
  },
}
