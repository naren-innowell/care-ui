import React from 'react'

import SectionComponent from './Section'

export default {
  title: 'Layouts/Section',
  component: SectionComponent,
  argTypes: {
    color: { control: 'color' },
  },
  render: args => <SectionComponent {...args} />,
}

export const Section = {
  args: {
    children: 'This is a section component.',
    color: '#fa1313',
  },
}
