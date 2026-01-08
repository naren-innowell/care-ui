import React from 'react'

import { StorybookContainer } from 'web-components'

import TabsComponent from './Tabs'

export default {
  title: 'Molecules/Tabs',
  component: TabsComponent,
  argTypes: {
    defaultTab: { control: 'number' },
    onChange: { action: 'onChange' },
    tabs: { control: 'object' },
  },
  render: args => (
    <StorybookContainer
      componentName="Tabs"
      componentDescription="Tabs organise and support navigation between groups of related content at the same level of hierarchy"
    >
      <TabsComponent {...args} />
    </StorybookContainer>
  ),
}

export const Tabs = {
  args: {
    defaultTab: 0,
    tabs: [
      {
        content: 'Content of Tab 1',
        label: 'Tab 1',
        size: 'md',
      },
      {
        content: 'Content of Tab 2',
        label: 'Tab 2',
        size: 'md',
      },
    ],
  },
}
