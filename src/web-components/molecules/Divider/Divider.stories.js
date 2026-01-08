import React from 'react'

import { StorybookContainer } from 'web-components'

import DividerComponent from './Divider'

export default {
  title: 'Molecules/Divider',
  component: DividerComponent,
  argTypes: {},
  render: args => (
    <StorybookContainer
      componentName="Divider"
      componentDescription="Dividers are used to help differentiate sections within the platform"
    >
      <DividerComponent {...args} />
    </StorybookContainer>
  ),
}

export const Divider = {}
