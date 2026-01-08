import React from 'react'
import { composeStories } from '@storybook/react'
import { render, screen } from '@testing-library/react'

import * as stories from './Card.stories'

const { Card } = composeStories(stories)

describe('Card', () => {
  it('renders a card', () => {
    render(<Card />)
    expect(screen.getByTestId('card')).toBeInTheDocument()
    expect(screen.getByText('Card Content')).toBeInTheDocument()
    expect(screen.getByText('Card Footer')).toBeInTheDocument()
  })
})
