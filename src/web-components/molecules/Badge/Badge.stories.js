import React from 'react'

import { StorybookContainer, Text } from 'web-components'

import BadgeComponent from './Badge'

export default {
  title: 'Molecules/Badge',
  component: BadgeComponent,
  argTypes: {
    label: { control: 'text' },
    variant: { control: 'select' },
    size: { control: 'select' },
  },
  render: args => (
    <StorybookContainer
      componentName="Badge"
      componentDescription="Badges are used to convey dynamic information, such as a count or status. A badge can include text, labels or numbers"
    >
      {args.variant === 'beta' && (
        <Text as="h6">
          {args.label} <BadgeComponent {...args} label="BETA" />
        </Text>
      )}
      {args.variant !== 'beta' && <BadgeComponent {...args} />}
    </StorybookContainer>
  ),
}

export const Badge = {
  args: {
    label: 'Badge Label',
    variant: 'general',
    size: 'md',
  },
}
