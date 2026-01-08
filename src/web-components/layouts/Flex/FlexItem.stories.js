import React from 'react'

import { StorybookContainer } from 'web-components'

import FlexItemComponent from './FlexItem'

export default {
  title: 'Layouts/FlexItem',
  component: FlexItemComponent,
  argTypes: {
    alignSelf: {
      control: { type: 'inline-radio', options: ['center', 'end', 'start'] },
    },
    flex: { control: 'text' },
  },
  render: args => {
    const { children } = args

    return (
      <StorybookContainer
        componentName="Flex Item"
        componentDescription="The FlexItem component optimizes individual item alignment and distribution within a FlexContainer using CSS flexbox properties."
      >
        <FlexItemComponent {...args}>
          <div
            style={{
              background: '#ccc',
              padding: '10px',
              margin: '5px',
              border: '1px solid #999',
            }}
          >
            {children || 'Flex Item'}
          </div>
        </FlexItemComponent>
      </StorybookContainer>
    )
  },
}

export const FlexItem = {
  args: {
    alignSelf: 'center',
    flex: '1',
  },
}
