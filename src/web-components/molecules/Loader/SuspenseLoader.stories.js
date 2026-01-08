import React from 'react'

import SuspenseLoaderComponent from './SuspenseLoader'

export default {
  title: 'Molecules/SuspenseLoader',
  component: SuspenseLoaderComponent,
  argTypes: {
    message: { control: 'text' },
  },
  render: args => (
    <SuspenseLoaderComponent {...args}>
      <div>{args.message}</div>
    </SuspenseLoaderComponent>
  ),
}

export const SuspenseLoader = {
  args: {
    message: 'Loading...',
  },
}
