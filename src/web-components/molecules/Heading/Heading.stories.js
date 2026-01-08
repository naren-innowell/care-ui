import React from 'react'

import HeadingComponent from './Heading'

export default {
  title: 'Molecules/HeadingLegacy',
  component: HeadingComponent,
  argTypes: {
    level: { control: 'number' },
    color: { control: 'select', options: ['positive', 'title'] },
    margin: {
      control: 'select',
      options: ['xxxs', 'xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl', 'xxxl'],
    },
  },
  render: args => <HeadingComponent {...args}>Sample Heading</HeadingComponent>,
}

export const HeadingLegacy = {
  args: {
    level: 1,
    color: 'positive',
    margin: 'md',
  },
}
