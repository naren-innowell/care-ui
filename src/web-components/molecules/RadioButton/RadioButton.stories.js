import React from 'react'

import { StorybookContainer } from 'web-components'

import RadioButtonComponent from './RadioButton'

export default {
  title: 'Molecules/RadioButton',
  component: RadioButtonComponent,
  argTypes: {
    size: { control: 'select' },
    ariaLabel: { control: 'text' },
    dataTestId: { control: 'text' },
    inputAttributes: { control: 'object' },
  },
  render: (args) => (
    <StorybookContainer
      componentName="Radio buttons"
      componentDescription="Radio buttons are used for single-select options only"
    >
      <RadioButtonComponent {...args} />
    </StorybookContainer>
  ),
}

export const RadioButton = {
  args: {
    size: 'md',
    ariaLabel: 'Radio Button',
    dataTestId: 'radio-button',
    inputAttributes: {
      id: 'radioId',
      name: 'radioGroup',
      label: 'Option 1',
      value: 'option1',
      checked: true,
      type: 'radio',
      disabled: false,
    },
  },
}
