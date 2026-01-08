import React from 'react'

import { StorybookContainer } from 'web-components'

import TextNewComponent from './TextNew'

export default {
  title: 'Molecules/TextNew',
  component: TextNewComponent,
  argTypes: {
    children: { control: 'text' },
    as: {
      control: 'select',
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'a'],
    },
    typography: {
      control: 'select',
      options: [
        'display',
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'bodyLg',
        'bodyLgBold',
        'bodyLgLink',
        'bodyMd',
        'bodyMdBold',
        'bodyMdLink',
        'bodySm',
        'bodySmBold',
        'bodySmLink',
      ],
    },
    color: { control: 'select' },
  },
  render: args => (
    <StorybookContainer
      componentName="Text"
      componentDescription="Component to implement text content based on care typography."
    >
      <TextNewComponent {...args} />
    </StorybookContainer>
  ),
}

export const TextNew = {
  args: {
    as: 'h2',
    typography: 'h2',
    color: 'positive',
    children: 'Text',
  },
}
