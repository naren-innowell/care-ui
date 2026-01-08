import React from 'react'
import { composeStories } from '@storybook/react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import * as stories from './Tooltip.stories'

const { Tooltip } = composeStories(stories)

describe('Tooltip', () => {
  it('renders a Tooltip', () => {
    render(<Tooltip />)
    const button = screen.getByRole('button', {
      name: 'Hover me',
    })

    expect(button).toBeInTheDocument()

    userEvent.hover(button)

    const tooltip = screen.getByText('Tooltip content')

    expect(tooltip).toBeInTheDocument()
  })
})
