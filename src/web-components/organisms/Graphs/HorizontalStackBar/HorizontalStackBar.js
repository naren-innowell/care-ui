// @flow

import React from 'react'
import * as Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

import { Box, FlexContainer } from 'web-components'
import TextNew from 'web-components/molecules/TextNew/TextNew'

import useHorizontalStackBar, {
  type SeriesType,
} from '../hooks/useHorizontalStackBar'

type HorizontalStackBarProps = {
  series: Array<SeriesType>,
  title: string,
  total: number,
}
const HorizontalStackBar = (props: HorizontalStackBarProps) => {
  const { series, title, total } = props
  const { options } = useHorizontalStackBar({ series })

  return (
    <Box>
      <FlexContainer justifyContent="space-between">
        <TextNew as="span" typography="bodyLgBold">
          {title}
        </TextNew>
        <TextNew as="span" typography="bodyLgBold">{`n=${total}`}</TextNew>
      </FlexContainer>

      <HighchartsReact
        highcharts={Highcharts}
        options={options}
        immutable
        constructorType="chart"
      />
    </Box>
  )
}

export default HorizontalStackBar
