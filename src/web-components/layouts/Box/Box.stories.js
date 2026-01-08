import React from 'react'

import { StorybookContainer } from 'web-components'
import {
  getElevationOptions,
  getSpacingOptions,
} from 'web-components/atoms/themeHelpers'

import BoxComponent from './Box'

export default {
  title: 'Layouts/Box',
  component: BoxComponent,
  argTypes: {
    border: { control: 'text' },
    borderRadius: { control: 'text' },
    borderTop: { control: 'text' },
    boxShadow: { control: 'select', options: getElevationOptions() },
    height: { control: 'text' },
    marginX: { control: 'select', options: getSpacingOptions() },
    marginY: { control: 'select', options: getSpacingOptions() },
    paddingX: { control: 'select', options: getSpacingOptions() },
    paddingY: { control: 'select', options: getSpacingOptions() },
    width: { control: 'text' },
  },
  render: (args) => (
    <StorybookContainer
      componentName="Box"
      componentDescription="The Box component is a versatile and straightforward `div` element designed to apply various styles such as margins, paddings, position, and more. It serves as a foundational building block for layout and styling, allowing developers to easily manage spacing and positioning in their React applications. This component provides a clean and consistent approach to implementing common CSS properties, making it a powerful tool for creating flexible and responsive designs."
    >
      <BoxComponent {...args} />
    </StorybookContainer>
  ),
}

export const Box = {
  args: {
    children: 'Box Component',
    border: '1px solid black',
  },
}
