import React from 'react'

import AddPerson from 'web-components/atoms/icons/add-person.svg'

import IconComponent from './Icon'

export default {
  title: 'Molecules/IconLegacy',
  component: IconComponent,
  argTypes: {
    as: { control: { disable: true } },
    color: { control: 'color' },
    scale: { control: 'number' },
  },
  render: args => <IconComponent {...args} />,
}

export const IconLegacy = {
  args: {
    as: AddPerson,
    scale: 1,
  },
}
