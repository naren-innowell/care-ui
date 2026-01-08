import React from 'react'

import LoadingSpinnerComponent from './LoadingSpinner'

export default {
  title: 'Molecules/LoadingSpinner',
  component: LoadingSpinnerComponent,
  argTypes: {
    message: { control: 'text' },
  },
  render: args => <LoadingSpinnerComponent {...args} />,
}

export const LoadingSpinner = {
  args: {
    message: 'Please wait...',
  },
}
