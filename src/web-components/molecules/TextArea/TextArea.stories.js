import React from 'react'

import TextAreaComponent from './TextArea'

export default {
  title: 'Molecules/TextArea',
  component: TextAreaComponent,
  argTypes: {
    cols: { control: 'number' },
    rows: { control: 'number' },
    placeholder: { control: 'text' },
    onBlur: { action: 'blurred' },
    onChange: { action: 'changed' },
    value: { control: 'text' },
    extend: { control: 'object' },
    dataTestId: { control: 'text' },
  },
  render: args => <TextAreaComponent {...args} />,
}

export const TextArea = {
  args: {
    cols: 30,
    rows: 5,
    placeholder: 'Enter text here...',
    value: '',
    extend: null,
    dataTestId: 'textareaTestId',
  },
}
