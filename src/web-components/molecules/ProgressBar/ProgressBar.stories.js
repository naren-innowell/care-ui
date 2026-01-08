import React from 'react'

import { StorybookContainer } from 'web-components'

import ProgressBarComponent from './ProgressBar'

export default {
  title: 'Molecules/ProgressBar',
  component: ProgressBarComponent,
  argTypes: {
    size: { control: 'select' },
    value: { control: 'number' },
    dataTestId: { control: 'text' },
    ariaLabel: { control: 'text' },
    current: { control: 'number' },
    skippedSets: { control: 'array' },
    total: { control: 'number' },
    variant: { control: 'select', options: ['normal', 'skippable'] }, // Add control for `variant`
  },
  render: args => (
    <StorybookContainer
      componentName="Progress Bar"
      componentDescription="Progress indicators inform users about the status of ongoing processes such as stage of questionnaire"
    >
      <ProgressBarComponent {...args} />
    </StorybookContainer>
  ),
}

export const ProgressBar = {
  args: {
    size: 'md',
    ariaLabel: 'Progress Bar',
    dataTestId: 'progress-bar',
    value: 50,
    variant: 'normal',
  },
}
