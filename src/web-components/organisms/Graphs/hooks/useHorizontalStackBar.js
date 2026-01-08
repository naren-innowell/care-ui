// @flow

import { round } from 'lodash'

export type SeriesType = {
  color: string,
  data: Array<number>,
  name: string,
}

type UseStackGraphParams = {
  series: Array<SeriesType>,
}

const useHorizontalStackBar = (params: UseStackGraphParams) => {
  const { series } = params

  const options = {
    title: {
      text: null,
    },
    chart: {
      type: 'bar',
      height: '44px',
      margin: [0, 0, 20, 0],
      spacing: 0,
      style: {
        fontSize: '14px',
        fontFamily: 'Raleway',
      },
    },
    xAxis: {
      visible: false,
    },
    yAxis: {
      visible: false,
      min: 0,
      max: 100,
      reversedStacks: false,
    },
    plotOptions: {
      series: {
        stacking: 'normal',
        animation: false,
        groupPadding: 0,
        pointPadding: 0,
        borderWidth: 0,
        dataLabels: {
          enabled: true,
          verticalAlign: 'bottom',
          crop: false,
          overflow: 'allow',
          y: 24,
          useHTML: true,
          formatter() {
            return this.y >= 1 ? `${round(this.y)}%` : '' // Appending the percentage symbol
          },
          style: {
            fontSize: '14px',
            fontWeight: 400,
            fontFamily: 'Raleway',
            color: 'rgba(0, 0, 0, 1)',
          },
        },
        states: {
          hover: {
            enabled: false,
          },
          inactive: {
            enabled: false,
          },
        },
      },
    },
    tooltip: {
      enabled: false,
    },
    series,
    legend: {
      enabled: false,
    },
  }

  return {
    options,
  }
}

export default useHorizontalStackBar
