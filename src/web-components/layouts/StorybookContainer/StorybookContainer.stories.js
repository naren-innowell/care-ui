import React from 'react'

import StorybookContainerComponent from './StorybookContainer'

export default {
  title: 'Layouts/StorybookContainer',
  component: StorybookContainerComponent,
  argTypes: {
    componentName: { control: 'text' },
    componentDescription: { control: 'text' },
  },
  render: args => <StorybookContainerComponent {...args} />,
}

export const StorybookContainer = {
  args: {
    children: 'Storybook Container Component',
    componentName: 'Storybook Container',
    componentDescription:
      'Container component for all the story book to hold their title and definations.',
  },
}
