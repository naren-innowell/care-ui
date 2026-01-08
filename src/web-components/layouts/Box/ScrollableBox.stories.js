import React from 'react'

import { FlexContainer, StorybookContainer } from 'web-components'

import ScrollableBoxComponent from './ScrollableBox'

export default {
  title: 'Layouts/ScrollableBox',
  component: ScrollableBoxComponent,
  argTypes: {
    direction: {
      control: { type: 'inline-radio', options: ['horizontal', 'vertical'] },
    },
    maxHeight: { control: 'text' },
    maxWidth: { control: 'text' },
  },
  render: args => {
    const childrenList = Array.from({ length: 20 }, (_, index) => (
      <div
        key={index}
        style={{
          borderBottom: '1px solid #ccc',
        }}
      >
        Item {index + 1}
      </div>
    ))

    return (
      <StorybookContainer
        componentName="ScrollableBox"
        componentDescription="The ScrollableBox component is a specialized div element that enables the creation of scrollable containers. It is designed to facilitate the management of overflow content, allowing developers to build areas within their applications that can scroll vertically, horizontally, or both."
      >
        <ScrollableBoxComponent {...args}>
          <FlexContainer
            gap="sm"
            direction={args.direction === 'horizontal' ? 'row' : 'column'}
          >
            {childrenList}
          </FlexContainer>
        </ScrollableBoxComponent>
      </StorybookContainer>
    )
  },
}

export const ScrollableBox = {
  args: {
    children: 'Scrollable Box Component',
    maxHeight: '500px',
    maxWidth: '800px',
    direction: 'vertical',
  },
}
