import React from 'react'

import { StorybookContainer } from 'web-components'

import HorizontalStackBarComponent from './HorizontalStackBar'

export default {
  title: 'Organisms/HorizontalStackBar',
  component: HorizontalStackBarComponent,
  argTypes: {
    title: { control: 'text' },
    series: { control: 'json' },
  },
}

const Template = args => (
  <StorybookContainer
    componentName="HorizontalStackBar"
    componentDescription="HorizontalStackBar is used in outcome reporting to visualize baseline scores and recovery trajectories."
  >
    <HorizontalStackBarComponent {...args} />
  </StorybookContainer>
)

export const HorizontalStackBar = Template.bind({})
HorizontalStackBar.args = {
  title: 'Alcohol Use',
  total: '120',
  series: [
    { name: 'Skipped', color: 'grey', data: [10] },
    { name: 'Good', color: 'green', data: [25] },
    { name: 'Mild', color: 'yellow', data: [20] },
    { name: 'Moderate', color: 'orange', data: [5] },
    { name: 'High', color: 'red', data: [40] },
  ],
}
