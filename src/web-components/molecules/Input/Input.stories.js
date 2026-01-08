import React, { useState } from 'react'

import { StorybookContainer } from 'web-components/'

import InputComponent from './Input'

export default {
  title: 'Molecules/Input',
  component: InputComponent,
  argTypes: {
    type: { control: 'select' },
    size: { control: 'select' },
    id: { control: 'text' },
    name: { control: 'text' },
    placeholder: { control: 'text' },
    value: { control: 'text' },
  },
  render: args => {
    const InputComponentWithValue = () => {
      const [value, setValue] = useState(args.value || '')

      const handleChange = event => {
        setValue(event.target.value)
        args.onChange(event)
      }

      return <InputComponent {...args} value={value} onChange={handleChange} />
    }

    return (
      <StorybookContainer
        componentName="Inputs"
        componentDescription="Input fields are commonly used in forms and usually require validation. They are used to gather data from users  so the platform can return relevant information"
      >
        <InputComponentWithValue />
      </StorybookContainer>
    )
  },
}

export const Input = {
  args: {
    size: 'md',
    type: 'text',
    name: 'inputName',
    placeholder: 'Enter your text',
    value: 'Input Field',
  },
}
