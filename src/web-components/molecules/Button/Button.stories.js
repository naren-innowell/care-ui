import React from 'react'

import { StorybookContainer } from 'web-components'
import * as ICONS from 'web-components/atoms/icons-new'

import ButtonComponent from './Button'

const icons = Object.keys(ICONS).map(key => ICONS[key])
const iconOptions = [{ name: 'None', component: null }, ...icons]

export default {
  title: 'Molecules/Button',
  component: ButtonComponent,
  argTypes: {
    variant: {
      control: {
        type: 'select',
      },
    },
    icon: {
      control: 'select',
      options: iconOptions.map(icon => icon.name),
    },
    rightIcon: {
      control: 'select',
      options: iconOptions.map(icon => icon.name),
    },
    leftIcon: {
      control: 'select',
      options: iconOptions.map(icon => icon.name),
    },
    size: { control: { type: 'select' } },
    type: {
      control: { type: 'select' },
    },
    active: { control: 'boolean' },
    ariaLabel: { control: 'text' },
    children: { control: 'text' },
    dataTestId: { control: 'text' },
    disabled: { control: 'boolean' },
    fullWidth: { control: 'boolean' },
    href: { control: 'text' },
    onClick: { action: 'clicked' },
    target: { control: 'text' },
    to: { control: 'text' },
    tooltipText: { control: 'text' },
  },
  render: args => {
    const selectedRightIcon = icons.find(icon => icon.name === args.rightIcon)
    const selectedLeftIcon = icons.find(icon => icon.name === args.leftIcon)
    const selectedIcon = icons.find(icon => icon.name === args.icon)

    return (
      <StorybookContainer
        componentName="Button"
        componentDescription="Collection of buttons including Primary, Secondary, Text and Pill variations"
      >
        <ButtonComponent
          {...args}
          leftIcon={selectedLeftIcon}
          rightIcon={selectedRightIcon}
          icon={selectedIcon}
        >
          {args.children}
        </ButtonComponent>
      </StorybookContainer>
    )
  },
}

export const Button = {
  args: {
    variant: 'primary',
    size: 'md',
    children: 'Button Text',
    type: 'button',
  },
}
