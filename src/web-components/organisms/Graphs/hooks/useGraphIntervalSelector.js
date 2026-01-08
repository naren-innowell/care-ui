// prettier-ignore
// @flow

import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import {
  endOfMonth,
  endOfWeek,
  endOfYear,
  format,
  parse,
  startOfMonth,
  startOfWeek,
  startOfYear,
  subWeeks,
} from 'date-fns'

import { getIntervalMethod } from 'shared/utils/GraphUtils'

// Utility function for date formatting
const formatDate = (date) => format(date, 'yyyy-MM-dd')

const getStartDate = (interval) => {
  const startDate = getIntervalMethod(interval).sub(new Date(), 5)

  if (interval === 'weekly') {
    return formatDate(startOfWeek(startDate, { weekStartsOn: 1 }))
  }

  if (interval === 'monthly') {
    return formatDate(startOfMonth(startDate))
  }

  if (interval === 'yearly') {
    return formatDate(startOfYear(startDate))
  }

  return formatDate(startDate)
}

const getEndDate = (interval) => {
  if (interval === 'weekly') {
    return formatDate(endOfWeek(new Date(), { weekStartsOn: 1 }))
  }

  if (interval === 'monthly') {
    return formatDate(endOfMonth(new Date()))
  }

  if (interval === 'yearly') {
    return formatDate(endOfYear(new Date()))
  }

  return formatDate(new Date())
}

type DateRange = {
  from: Date,
  to: Date,
}

const intialCustomDateRange = {
  from: subWeeks(new Date(), 1),
  to: new Date(),
}

const intialAppliedDateRange = {
  from: format(intialCustomDateRange?.from, 'd MMM yyyy'),
  to: format(intialCustomDateRange?.to, 'd MMM yyyy'),
}

type UseGraphIntervalSelectorProps = {
  interval: string,
  setQueryVariables: ({ [string]: string }) => void,
}

const useGraphIntervalSelector = (props: UseGraphIntervalSelectorProps) => {
  const { interval, setQueryVariables } = props

  // Localization
  const { t: translation } = useTranslation()

  // We will bring Custom date back but for 152 release we are going to forward without it.
  const INTERVALS = [
    { value: 'weekly', label: translation('weekly') },
    { value: 'monthly', label: translation('monthly') },
    { value: 'yearly', label: translation('yearly') },
    // { value: 'custom', label: translation('custom') },
  ]

  // prettier-ignore
  const [range, setRange] = useState<DateRange>(intialCustomDateRange)
  // prettier-ignore
  const [isCustomInterval, setIsCustomInterval] = useState<boolean>(false)
  // prettier-ignore
  const [appliedCustomDateRange, setAppliedCustomDateRange] = useState<{ from: string, to: string }>(intialAppliedDateRange)

  // Dropdown for DateRange Selector Container
  // prettier-ignore
  const [closeDropDown, setCloseDropDown] = useState<boolean>(true)
  const toggleDropDownMenu = () => {
    setCloseDropDown((prev) => !prev)
  }

  // Update Interval for graph query
  // If custom, opens dropdown for DateRange Selector Container
  const changeInterval = (value: string) => {
    if (value === 'custom') {
      setCloseDropDown(false)
      setIsCustomInterval(true)
      return
    }

    setQueryVariables({
      interval: value,
      start_date: getStartDate(value),
      end_date: getEndDate(value),
    })
    setIsCustomInterval(false)
  }

  // Update Custom date range when applied button clicked
  const updateCustomDateRange = () => {
    const formatedStartDate = format(range?.from, 'yyyy-MM-dd')
    const formatedEndDate = format(range?.to, 'yyyy-MM-dd')

    setAppliedCustomDateRange({
      from: format(range?.from, 'd MMM yyyy'),
      to: format(range?.to, 'd MMM yyyy'),
    })

    setQueryVariables({
      interval: 'custom',
      start_date: formatedStartDate,
      end_date: formatedEndDate,
    })

    toggleDropDownMenu()
  }

  // Logic To Handle Cancel Button For Custom DateRange Selector
  // 1. If Custom Date Range is not applied, the cancel button should fallback to previous interval
  // or interval of the data displayed
  // 2. If Apply button is clicked, it remains to the custom DateRange Selector
  const handleOnCancel = () => {
    toggleDropDownMenu()

    if (interval === 'custom') return

    setRange({
      from: parse(appliedCustomDateRange.from, 'd MMM yyyy', new Date()),
      to: parse(appliedCustomDateRange.to, 'd MMM yyyy', new Date()),
    })

    setIsCustomInterval(false)
  }

  return {
    appliedCustomDateRange,
    changeInterval,
    closeDropDown,
    handleOnCancel,
    interval,
    INTERVALS,
    isCustomInterval,
    range,
    setCloseDropDown,
    setIsCustomInterval,
    setRange,
    toggleDropDownMenu,
    updateCustomDateRange,
  }
}

export default useGraphIntervalSelector
