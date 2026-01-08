import React from 'react'

import { Button, StorybookContainer } from 'web-components'

import DropDownMenuComponent from './DropDownMenu'
import DropDownMenuItem from './DropDownMenuItem'

export default {
  title: 'Molecules/DropDownMenu',
  component: DropDownMenuComponent,
  argTypes: {
    closeDropDown: { control: 'boolean' },
    fullWidth: { control: 'boolean' },
    position: {
      control: {
        type: 'inline-radio',
        options: ['start', 'end', 'left', 'right', 'reverse'],
      },
    },
  },
  render: args => {
    const dropDownTrigger = (
      <Button variant="secondary">Toggle DropDown Menu</Button>
    )

    const children = Array.from({ length: 5 }, (_, index) => (
      <DropDownMenuItem>DropDown Menu Item {index}</DropDownMenuItem>
    ))

    return (
      <StorybookContainer
        componentName="Select/Dropdown"
        componentDescription="Select/Dropdown components are triggers that will launch a dropdown, allowing for a selection.  Both have varying functionality but as a UI element, look the same"
      >
        <DropDownMenuComponent {...args} dropDownTrigger={dropDownTrigger}>
          {children}
        </DropDownMenuComponent>
      </StorybookContainer>
    )
  },
}

export const DropDownMenu = {
  args: {
    fullWidth: false,
    position: 'start',
  },
}
