// @flow

import React from 'react'
import { useTranslation } from 'react-i18next'
import { format } from 'date-fns'

import {
  Box,
  Button,
  DateRangePicker,
  DropDownMenu,
  DropDownMenuItem,
  FlexContainer,
  Icon,
  SimpleSelect,
  Text,
} from 'web-components'
import ArrowDown from 'web-components/atoms/icons/arrow-down.svg'

import useGraphIntervalSelector from '../hooks/useGraphIntervalSelector'

type GraphIntervalSelectorProps = {
  interval: string,
  setQueryVariables: ({ [string]: string }) => void,
}

const GraphIntervalSelector = (props: GraphIntervalSelectorProps) => {
  const {
    changeInterval,
    closeDropDown,
    handleOnCancel,
    interval,
    INTERVALS,
    isCustomInterval,
    range,
    setCloseDropDown,
    setRange,
    toggleDropDownMenu,
    updateCustomDateRange,
  } = useGraphIntervalSelector({ ...props })

  const fromDate = range?.from ? format(range.from, 'd MMM yyyy') : ''
  const toDate = range?.to ? format(range?.to, 'd MMM yyyy') : ''

  const disableApplyButton = !(fromDate && toDate)

  const selectedIntervalOption =
    INTERVALS.find((item) => item.value === interval) || INTERVALS[1]

  // Localization
  const { t: translation } = useTranslation()

  return (
    <>
      {!isCustomInterval && (
        <Box width="220px">
          <SimpleSelect
            options={INTERVALS}
            defaultOption={selectedIntervalOption}
            onChange={changeInterval}
            name="interval"
            dataTestIdForDropdown="intervalSelector"
            dataTestIdForDropdownOptions="intervalOptions"
          />
        </Box>
      )}

      {isCustomInterval && (
        <DropDownMenu
          position="end"
          closeDropDown={closeDropDown}
          setCloseDropDown={setCloseDropDown}
          dropDownTrigger={
            <Box width="240px">
              <Button
                variant="secondary"
                onClick={toggleDropDownMenu}
                dataTestId="customDateSelector"
                fullWidth
              >
                <Box width="100%">
                  <FlexContainer
                    justifyContent="space-between"
                    alignItems="center"
                    wrap="nowrap"
                    gap="xxxs"
                  >
                    <Text size="lg">
                      {fromDate} - {toDate}
                    </Text>
                    <Icon as={ArrowDown} scale={0.5} />
                  </FlexContainer>
                </Box>
              </Button>
            </Box>
          }
        >
          <FlexContainer wrap="nowrap" gap="xxl">
            <FlexContainer direction="column" gap="xxxs">
              <DropDownMenuItem
                onClick={() => changeInterval('weekly')}
                dataTestId="intervalOptions"
              >
                {translation('weekly')}
              </DropDownMenuItem>

              <DropDownMenuItem
                onClick={() => changeInterval('monthly')}
                dataTestId="intervalOptions"
              >
                {translation('monthly')}
              </DropDownMenuItem>

              <DropDownMenuItem
                onClick={() => changeInterval('yearly')}
                dataTestId="intervalOptions"
              >
                {translation('yearly')}
              </DropDownMenuItem>

              {/* <DropDownMenuItem isActive dataTestId="intervalOptions">
                {translation('custom')}
              </DropDownMenuItem> */}
            </FlexContainer>

            <FlexContainer direction="column" alignItems="end">
              <DateRangePicker range={range} setRange={setRange} />

              <FlexContainer gap="xs">
                <Button
                  variant="text"
                  onClick={handleOnCancel}
                  dataTestId="cancel"
                >
                  {translation('cancel')}
                </Button>

                <Button
                  variant="primary"
                  onClick={updateCustomDateRange}
                  disabled={disableApplyButton}
                  dataTestId="Apply"
                >
                  {translation('apply')}
                </Button>
              </FlexContainer>
            </FlexContainer>
          </FlexContainer>
        </DropDownMenu>
      )}
    </>
  )
}

export default GraphIntervalSelector
