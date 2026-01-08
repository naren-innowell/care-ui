// @flow

import React from 'react'
import { useFela } from 'react-fela'
import * as Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

import { Button } from 'web-components'
import { ChevronLeftIcon, ChevronRightIcon } from 'web-components/atoms/icons-new'

import { paginationButtonStyle } from './Graph.style'
import useGraph, { type SeriesType } from './hooks/useGraph'

import './graph.css'

type StackGraphProps = {
  colors?: Array<any>,
  graphType: 'line' | 'column' | 'stack',
  isRightPaginationDisabled?: boolean,
  onPaginateLeft?: () => void,
  onPaginateRight?: () => void,
  series: Array<SeriesType>,
  seriesCategories: Array<string | number>,
  xAxisTitle?: string,
}

const Graph = (props: StackGraphProps) => {
  const {
    colors,
    series,
    seriesCategories,
    graphType,
    onPaginateLeft,
    onPaginateRight,
    isRightPaginationDisabled,
    xAxisTitle,
  } = props

  const { css } = useFela({ ...props })

  const { options } = useGraph({
    colors,
    series,
    seriesCategories,
    graphType,
    xAxisTitle,
  })

  return (
    <>
      <div className={css(paginationButtonStyle('left'))}>
        <Button
          variant="text"
          onClick={onPaginateLeft}
          icon={ChevronLeftIcon}
        />
      </div>

      <HighchartsReact
        highcharts={Highcharts}
        options={options}
        immutable
        constructorType="chart"
      />

      <div className={css(paginationButtonStyle('right'))}>
        <Button
          variant="text"
          onClick={onPaginateRight}
          disabled={isRightPaginationDisabled}
          icon={ChevronRightIcon}
        />
      </div>
    </>
  )
}

export default Graph
