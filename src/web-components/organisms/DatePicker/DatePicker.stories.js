// DateRangePicker.stories.js

// @flow

import React, { useState } from 'react'

import { StorybookContainer } from 'web-components'

import DatePickerComponent from './DatePicker'

export default {
  title: 'Organisms/DatePicker',
  component: DatePickerComponent,
}

type ArgsType = {
  selectedDate?: Date,
  setSelectedDate?: (Date) => void,
}

const Template = (args: ArgsType) => {
  const [selectedDate, setSelectedDate] = useState()

  return (
    <StorybookContainer
      componentName="Date Picker"
      componentDescription="Simple date picker component"
    >
      <DatePickerComponent
        {...args}
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      />
    </StorybookContainer>
  )
}

export const DatePicker = Template.bind({})
