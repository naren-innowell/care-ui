import React from 'react'

import CardComponent from './Card'

export default {
  title: 'Organisms/Card',
  component: CardComponent,
  argTypes: {
    children: { control: 'text' },
    footer: { control: 'text' },
    headerColor: { control: 'color' },
    selected: { control: 'boolean' },
  },
  render: args => (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <CardComponent {...args}>{args.children}</CardComponent>
    </div>
  ),
}

export const Card = {
  args: {
    children: 'Card Content',
    footer: 'Card Footer',
    headerColor: '#ddd',
    selected: false,
  },
}
