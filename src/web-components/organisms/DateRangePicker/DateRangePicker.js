// @flow

import React from 'react'
import { DayPicker } from 'react-day-picker'

import { getdateFnsLocale } from 'shared/utils/DateFormatUtils'

import 'react-day-picker/dist/style.css'
import './dateRangePicker.css'

type RangeType = {
  from: Date,
  to: Date,
}

type DateRangePickerProps = {
  disableBeforeDate?: Date,
  range: RangeType,
  setRange: (RangeType) => void,
}

const locale = getdateFnsLocale()
const DateRangePicker = (props: DateRangePickerProps) => {
  const { range, setRange, disableBeforeDate } = props

  return (
    <DayPicker
      locale={locale}
      selected={range}
      onSelect={setRange}
      mode="range"
      defaultMonth={range?.from}
      disabled={{ after: new Date(), before: disableBeforeDate }}
      showOutsideDays
    />
  )
}

export default DateRangePicker
