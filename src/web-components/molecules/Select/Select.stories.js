import React from 'react'

import SelectComponent from './Select'

export default {
  title: 'Molecules/Select',
  component: SelectComponent,
  argTypes: {
    ariaLabel: { control: 'text' },
    dataTestId: { control: 'text' },
    id: { control: 'text' },
    labelKey: { control: 'text' },
    name: { control: 'text' },
    onBlur: { action: 'onBlur' },
    onChange: { action: 'onChange' },
    options: { control: 'object' },
    size: { control: 'text' },
    value: { control: 'text' },
    valueKey: { control: 'text' },
  },
  render: args => <SelectComponent {...args} />,
}

export const Select = {
  args: {
    ariaLabel: 'Select an option',
    dataTestId: 'select-component',
    id: 'select-id',
    labelKey: 'label',
    name: 'select-name',
    options: [
      { value: 'option1', label: 'Option 1' },
      { value: 'option2', label: 'Option 2' },
      { value: 'option3', label: 'Option 3' },
    ],
    size: 'md',
    value: 'option1',
    valueKey: 'value',
  },
}
