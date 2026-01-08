import React from 'react'

import { StorybookContainer } from 'web-components'
import * as ICONS from 'web-components/atoms/icons-new'

import CalloutComponent from './Callout'

const icons = Object.keys(ICONS).map(key => ICONS[key])
const iconOptions = [{ name: 'None', component: null }, ...icons]

export default {
  title: 'Organisms/Callout',
  component: CalloutComponent,
  argTypes: {
    calloutIcon: {
      control: 'select',
      options: iconOptions.map(icon => icon.name),
    },
    calloutText: { control: 'text' },
    variant: { control: 'select' },
    size: { control: 'select' },
  },
  render: args => {
    const selectedIcon = icons.find(icon => icon.name === args.calloutIcon)

    return (
      <StorybookContainer
        componentName="Callouts"
        componentDescription="Callout are highlighted sections in the app to convey information to the user. Callouts can contain icons or not"
      >
        <CalloutComponent {...args} calloutIcon={selectedIcon} />
      </StorybookContainer>
    )
  },
}

export const Callout = {
  args: {
    calloutIcon: icons[1].name,
    size: 'md',
    variant: 'warning',
    calloutText: 'Callout Text',
  },
}
