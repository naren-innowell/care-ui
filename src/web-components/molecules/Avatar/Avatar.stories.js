import React from 'react'

import { StorybookContainer } from 'web-components'

import AvatarComponent from './Avatar'

export default {
  title: 'Molecules/Avatar',
  component: AvatarComponent,
  argTypes: {
    avatarInitials: { control: 'array' },
    requireSupport: { control: 'boolean' },
  },
  render: args => (
    <StorybookContainer
      componentName="Avatar"
      componentDescription="Avatars are indicators on the platform that show when a CARE option has been requested, supported or awaiting action. Avatars only have one size."
    >
      <AvatarComponent {...args} />
    </StorybookContainer>
  ),
}

export const Avatar = {
  args: {
    avatarInitials: ['AB', 'CD', 'EF'],
    requireSupport: false,
  },
}
