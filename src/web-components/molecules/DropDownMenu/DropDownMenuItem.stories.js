import React from 'react'

import { StorybookContainer } from 'web-components'

import DropDownMenuItemComponent from './DropDownMenuItem'

export default {
  title: 'Molecules/DropDownMenuItem',
  component: DropDownMenuItemComponent,
  argTypes: {
    size: { control: 'select' },
    ariaLabel: { control: 'text' },
    children: { control: 'text' },
    dataTestId: { control: 'text' },
    href: { control: 'text' },
    to: { control: 'object' },
    onClick: { action: 'clicked' },
  },
  render: args => {
    const { children, ...rest } = args

    return (
      <StorybookContainer
        componentName="DropdownMenuItem"
        componentDescription="Collection of buttons used in questionnaires only. "
      >
        <DropDownMenuItemComponent {...rest}>
          {children}
        </DropDownMenuItemComponent>
      </StorybookContainer>
    )
  },
}

export const DropDownMenuItem = {
  args: {
    size: 'md',
    children: 'DropDown Menu Item',
    isActive: true,
  },
}
