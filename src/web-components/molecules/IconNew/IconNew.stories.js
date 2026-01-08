import React from 'react'

import { StorybookContainer } from 'web-components'
import AddPerson from 'web-components/atoms/icons/add-person.svg'

import IconNewComponent from './IconNew'

export default {
  title: 'Molecules/Icon',
  component: IconNewComponent,
  argTypes: {
    as: { control: { disable: true } },
    color: { control: 'color' },
    size: { control: 'select' },
  },
  render: args => (
    <StorybookContainer
      componentName="Icons"
      componentDescription="Collection of icons and graphics used across the platform"
    >
      <IconNewComponent {...args} />
    </StorybookContainer>
  ),
}

export const Icon = {
  args: {
    as: AddPerson,
    size: 'md',
    color: 'black',
  },
}
