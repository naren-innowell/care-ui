import React, { useState } from 'react'

import { StorybookContainer } from 'web-components'

import SearchBarComponent from './SearchBar'

export default {
  title: 'Molecules/SearchBar',
  component: SearchBarComponent,
  argTypes: {
    size: { control: 'select' },
    ariaLabel: { control: 'text' },
    dataTestId: { control: 'text' },
    fullWidth: { control: 'boolean' },
    inputAttributes: { control: 'object' },
  },
  render: (args) => {
    const SearchBarWithState = () => {
      const [searchValue, setSearchValue] = useState(
        args.inputAttributes.value || '',
      )

      const handleChange = (event) => {
        setSearchValue(event.target.value)
        args.inputAttributes.onChange(event)
      }

      const handleOnClearSearch = () => {
        setSearchValue('')
        args.inputAttributes.onChange()
      }

      return (
        <SearchBarComponent
          {...args}
          clearSearch={handleOnClearSearch}
          inputAttributes={{
            ...args.inputAttributes,
            value: searchValue,
            onChange: handleChange,
          }}
        />
      )
    }

    return (
      <StorybookContainer
        componentName="Searchbar"
        componentDescription="The Search Bar allow users a quicker way to access information they are looking for"
      >
        <SearchBarWithState />
      </StorybookContainer>
    )
  },
}

export const SearchBar = {
  args: {
    size: 'md',
    ariaLabel: 'Search Bar',
    clearSearch: 'clearSearch',
    dataTestId: 'search-bar',
    fullWidth: false,
    inputAttributes: {
      id: 'searchId',
      name: 'searchInput',
      onChange: 'changed',
      value: '',
    },
  },
}
