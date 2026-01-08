// DateRangePicker.stories.js

// @flow

import React, { useState } from 'react'

import { Box } from 'web-components'

import DateRangePickerComponent from './DateRangePicker'

export default {
  title: 'Organisms/DateRangePicker',
  component: DateRangePickerComponent,
  argTypes: {
    disableBeforeDate: { control: 'date' },
    range: { control: 'object' },
  },
}

type ArgsType = {
  range: {
    from: Date,
    to: Date,
  },
}
const Template = (args: ArgsType) => {
  const [range, setRange] = useState(args.range)

  const handleSetRange = (newRange) => {
    setRange(newRange)
    // action('setRange')(newRange)
  }

  return (
    <Box width="50vw">
      <DateRangePickerComponent
        {...args}
        range={range}
        setRange={handleSetRange}
      />
    </Box>
  )
}

export const DateRangePicker = Template.bind({})

DateRangePicker.args = {
  range: {
    from: new Date('2024-07-01'),
    to: new Date('2024-07-15'),
  },
}
