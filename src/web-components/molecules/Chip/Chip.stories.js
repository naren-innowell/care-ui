import React from 'react'

import { StorybookContainer } from 'web-components'

import ChipComponent from './Chip'

export default {
  title: 'Molecules/Chip',
  component: ChipComponent,
  argTypes: {
    label: { control: 'text' },
    variant: { control: 'select' },
    size: { control: 'select' },
    onClick: { action: 'clicked' },
  },
  render: args => (
    <StorybookContainer
      componentName="Chip"
      componentDescription="Chips can be used to categorise information and act as a way for users to easily filter information"
    >
      <ChipComponent {...args} />
    </StorybookContainer>
  ),
}

export const Chip = {
  args: {
    variant: 'primary',
    size: 'md',
    label: 'Chip Label',
  },
}
