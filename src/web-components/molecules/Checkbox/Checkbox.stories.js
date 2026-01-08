import React from 'react'

import { StorybookContainer } from 'web-components'

import CheckboxComponent from './Checkbox'

export default {
  title: 'Molecules/Checkbox',
  component: CheckboxComponent,
  argTypes: {
    size: { control: 'select' },
    ariaLabel: { control: 'text' },
    dataTestId: { control: 'text' },
    inputAttributes: { control: 'object' },
  },
  render: args => (
    <StorybookContainer
      componentName="Checkbox"
      componentDescription="Checkboxes are used when more than one option can be selected"
    >
      <CheckboxComponent {...args} />
    </StorybookContainer>
  ),
}

export const Checkbox = {
  args: {
    size: 'md',
    ariaLabel: 'Checkbox',
    dataTestId: 'Checkbox',
    inputAttributes: {
      id: 'checkBoxId',
      name: 'checkBoxGroup',
      label: 'Checkbox',
      value: 'checkbox',
      checked: true,
      partial: false,
      required: false,
    },
  },
}
