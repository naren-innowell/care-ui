import React from 'react'

import { Button, StorybookContainer } from 'web-components'

import TooltipComponent from './Tooltip'

export default {
  title: 'Molecules/Tooltip',
  component: TooltipComponent,
  argTypes: {
    size: { control: 'select' },
    variant: { control: 'select' },
    text: { control: 'text' },
    width: { control: 'text' },
  },
  render: args => (
    <StorybookContainer
      componentName="Tooltips"
      componentDescription="Tooltips appear on hover over components, such as buttons and graphs, to provide more context on that specific component"
    >
      <TooltipComponent {...args}>
        <Button variant="secondary">Hover me</Button>
      </TooltipComponent>
    </StorybookContainer>
  ),
}

export const Tooltip = {
  args: {
    size: 'md',
    variant: 'tooltip',
    text: 'Tooltip content',
    width: '400px',
  },
}
