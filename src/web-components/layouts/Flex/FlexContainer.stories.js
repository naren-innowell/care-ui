import React from 'react'

import { StorybookContainer } from 'web-components'

import FlexContainerComponent from './FlexContainer'

export default {
  title: 'Layouts/FlexContainer',
  component: FlexContainerComponent,
  argTypes: {
    alignItems: { control: 'text' },
    boxStyle: { control: 'object' },
    direction: {
      control: {
        type: 'select',
        options: ['row', 'column', 'row-reverse', 'column-reverse'],
      },
    },
    gap: { control: 'text' },
    height: { control: 'text' },
    justifyContent: { control: 'text' },
    paddingX: { control: 'text' },
    paddingY: { control: 'text' },
    width: { control: 'text' },
    wrap: { control: { type: 'inline-radio', options: ['wrap', 'nowrap'] } },
  },
  render: (args) => {
    const { direction } = args

    const childrenList = Array.from({ length: 5 }, (_, index) => (
      <div
        key={index}
        style={{
          background: '#ccc',
          padding: '10px',
          margin: '5px',
          border: '1px solid #999',
        }}
      >
        Item {index + 1}
      </div>
    ))

    return (
      <StorybookContainer
        componentName="Flex Container"
        componentDescription="The FlexContainer component simplifies layout creation by using CSS flexbox properties for flexible and responsive designs."
      >
        <FlexContainerComponent {...args} direction={direction}>
          {childrenList}
        </FlexContainerComponent>
      </StorybookContainer>
    )
  },
}

export const FlexContainer = {
  args: {
    alignItems: 'flex-start',
    direction: 'row',
    gap: '10px',
    height: 'auto',
    justifyContent: 'flex-start',
    paddingX: '0',
    paddingY: '0',
    width: '100%',
    wrap: 'nowrap',
  },
}
