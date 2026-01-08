import React from 'react'

import { Box, StorybookContainer } from 'web-components'

import SimpleSelectComponent from './SimpleSelect'

export default {
  title: 'Organisms/SimpleSelect',
  component: SimpleSelectComponent,
  argTypes: {
    size: { control: { type: 'select' } },
    variant: { control: { type: 'select' } },
    dataTestIdForDropdown: { control: 'text' },
    dataTestIdForDropdownOptions: { control: 'text' },
    defaultOption: { control: 'object' },
    id: { control: 'text' },
    name: { control: 'text' },
    onChange: { action: 'onChange' },
    options: { control: 'object' },
  },
  render: (args) => (
    <StorybookContainer
      componentName="Select/Dropdown"
      componentDescription="Select/Dropdown components are triggers that will launch a dropdown, allowing for a selection.  Both have varying functionality but as a UI element, look the same"
    >
      <Box width="400px">
        <SimpleSelectComponent {...args} />
      </Box>
    </StorybookContainer>
  ),
}

export const SimpleSelect = {
  args: {
    size: 'md',
    variant: 'secondary',
    dataTestIdForDropdown: 'simple-select-dropdown',
    dataTestIdForDropdownOptions: 'simple-select-option',
    defaultOption: { label: 'Select an option', value: '' },
    id: 'simple-select-id',
    name: 'simple-select-name',
    options: [
      { label: 'Option 1', value: 'option1' },
      { label: 'Option 2', value: 'option2' },
      { label: 'Option 3', value: 'option3' },
    ],
  },
}
