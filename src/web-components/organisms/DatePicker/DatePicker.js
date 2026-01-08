// @flow

import React, { useState } from 'react'
import { DayPicker } from 'react-day-picker'

import {
  getdateFnsLocale,
  localizedDefaultDateFormat,
} from 'shared/utils/DateFormatUtils'
import { shortDateFormat } from 'platform_web/services/dateTime'
import { Box, Button } from 'web-components'
import { CalendarIcon } from 'web-components/atoms/icons-new/index'
import DropDownMenu from 'web-components/molecules/DropDownMenu/DropDownMenu'
import TextNew from 'web-components/molecules/TextNew/TextNew'

import 'react-day-picker/dist/style.css'
import './datePicker.css'

const locale = getdateFnsLocale()

type DatePickerProps = {
  defaultMonth?: Date,
  disableAfterDate?: Date,
  disableBeforeDate?: Date,
  selectedDate?: Date | null,
  setSelectedDate: (date: Date) => void,
}

const DatePicker = (props: DatePickerProps) => {
  const {
    selectedDate,
    setSelectedDate,
    disableBeforeDate,
    disableAfterDate,
    defaultMonth,
  } = props
  const [closeDropDown, setCloseDropDown] = useState(true)

  const formattedSelectedDate =
    (selectedDate && shortDateFormat(selectedDate)) || ''

  const handleDateSelect = (date) => {
    // Prevent deselection - only allow selecting a new date
    if (date) {
      setSelectedDate(date)
    }
    setCloseDropDown(true)
  }

  return (
    <Box alignContent="center">
      <DropDownMenu
        position="end"
        closeDropDown={closeDropDown}
        setCloseDropDown={() => setCloseDropDown(true)}
        dropDownTrigger={
          <Box width="150px">
            <Button
              variant="secondary"
              onClick={() => setCloseDropDown(!closeDropDown)}
              dataTestId="datePickerButton"
              rightIcon={CalendarIcon}
              fullWidth
            >
              <TextNew
                color={formattedSelectedDate ? 'positive' : 'caption'}
                as="span"
                dataTestId="selectedDate"
              >
                {formattedSelectedDate || localizedDefaultDateFormat()}
              </TextNew>
            </Button>
          </Box>
        }
      >
        <DayPicker
          defaultMonth={defaultMonth}
          disabled={{ before: disableBeforeDate, after: disableAfterDate }}
          locale={locale}
          selected={selectedDate}
          onSelect={handleDateSelect}
          mode="single"
        />
      </DropDownMenu>
    </Box>
  )
}

export default DatePicker
