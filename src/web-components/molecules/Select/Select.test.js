import React from 'react'
import { composeStories } from '@storybook/react'
import { render, screen } from '@testing-library/react'

import * as stories from './Select.stories'

const { Select } = composeStories(stories)

describe('Select', () => {
  it('renders a Select', () => {
    render(<Select />)
    expect(screen.getByRole('combobox')).toBeInTheDocument()
    expect(screen.getByText('Option 1')).toBeInTheDocument()
    expect(screen.getByText('Option 2')).toBeInTheDocument()
    expect(screen.getByText('Option 3')).toBeInTheDocument()
  })
})
