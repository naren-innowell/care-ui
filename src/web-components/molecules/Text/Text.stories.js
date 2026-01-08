import React from 'react'

import TextComponent from './Text'

export default {
  title: 'Molecules/Text',
  component: TextComponent,
  argTypes: {
    children: { control: 'text' },
    ariaLabel: { control: 'text' },
    as: {
      control: {
        type: 'select',
        options: ['p', 'span', 'div', 'h1', 'h2', 'h3'],
      },
    },
    bold: { control: 'boolean' },
    center: { control: 'boolean' },
    className: { control: 'text' },
    color: { control: { type: 'select', options: ['positive', 'title'] } },
    dataTestId: { control: 'text' },
    extend: { control: 'object' },
    margin: {
      control: {
        type: 'select',
        options: ['xxxs', 'xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl', 'xxxl'],
      },
    },
    size: { control: { type: 'select', options: ['sm', 'md', 'lg'] } },
    wrap: { control: { type: 'select', options: ['nowrap', 'wrap'] } },
  },
  render: args => <TextComponent {...args} />,
}

export const Text = {
  args: {
    children: 'Sample Text',
    ariaLabel: 'Text Label',
    as: 'p',
    bold: false,
    center: false,
    className: '',
    color: 'positive',
    dataTestId: 'textTestId',
    extend: {},
    margin: 'md',
    size: 'md',
    wrap: 'wrap',
  },
}
