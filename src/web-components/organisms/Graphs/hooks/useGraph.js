// @flow

import { useTranslation } from 'react-i18next'

import { navy } from 'web-components/atoms/colors/colorTokens'

const GRAPH_COLORS = [
  navy[50],
  navy[100],
  navy[200],
  navy[300],
  navy[400],
  navy[500],
]

const tooltipFormatterForStack = (chart, translation) => {
  // eslint-disable-next-line func-names
  const tooltipContent = chart.points.reduce(function (s, point) {
    return `${s}
            <div>
              <span
                class="sharedTooltip" 
                style="background-color:${point.color};">
              </span>
              <span>${point.series.name}</span>
              <span>${
                point.series.name === '1'
                  ? translation('sign_in')
                  : translation('sign_ins')
              }: <span class="tooltipTextValue">${point.y}</span></span>
            </div>
            `
  }, `<b> ${chart.x} </b>`)

  return `<span class="contentContainer">${tooltipContent}<span>`
}

const tooltipFormatterForLine = (point) => {
  const anotherSeries = point.series.chart.series.find(
    (s) => s.colorIndex !== point.colorIndex,
  )
  const matchingPoint = anotherSeries.points.find((p) => {
    return p.y === point.y && p.x === point.x
  })
  const hasMatchingPoint = !!matchingPoint

  return `
          ${
            hasMatchingPoint
              ? `<span
                  class="sharedTooltip" 
                  style="background-color:${matchingPoint.color};">
                </span>
                <span class="tooltipText">
                  ${matchingPoint.series.name}: <span class="tooltipTextValue">${matchingPoint.y}</span> <br />
                </span>`
              : ''
          }
          <span
            class="sharedTooltip" 
            style="background-color:${point.color};">
          </span>
          <span class="tooltipText">
            ${point.series.name}: <span class="tooltipTextValue">${
    point.y
  }</span>
          </span>
          `
}

const getTooltipOptions = (graphType, translation) => {
  if (graphType === 'stack') {
    return {
      // eslint-disable-next-line func-names, object-shorthand
      formatter: function () {
        return tooltipFormatterForStack(this, translation)
      },
      distance: 24,
    }
  }

  if (graphType === 'line') {
    return {
      // eslint-disable-next-line func-names, object-shorthand
      pointFormatter: function () {
        return tooltipFormatterForLine(this)
      },
      headerFormat: '<b class="tooltipHeader">{point.x}</b><br/>',
    }
  }

  return {
    headerFormat: '<b class="tooltipHeader">{point.x}</b><br/>',
    pointFormat:
      '<span class="sharedTooltip" style="background-color: {point.color};"></span><span class="tooltipText">{point.series.name}: <span class="tooltipTextValue">{point.y}</span></span>',
  }
}

export type SeriesType = {
  data: Array<number>,
  name: string,
}

type UseStackGraphParams = {
  colors?: Array<any>,
  graphType: 'line' | 'column' | 'stack',
  series: Array<SeriesType>,
  seriesCategories: Array<string | number>,
  xAxisTitle?: string,
}

const useGraph = (params: UseStackGraphParams) => {
  const { colors, series, seriesCategories, xAxisTitle, graphType } = params

  // Localization
  const { t: translation } = useTranslation()

  const barWidthOption = graphType === 'stack' ? { pointWidth: 32 } : {}
  const tooltipOptions = getTooltipOptions(graphType, translation)

  const options = {
    title: {
      text: null,
    },
    chart: {
      type: graphType === 'stack' ? 'column' : graphType,
      style: {
        fontSize: '14px',
        fontFamily: 'Raleway',
      },
    },
    lang: {
      noData: translation('no_data_to_display'),
    },
    colors: colors || GRAPH_COLORS,
    xAxis: {
      categories: seriesCategories,
      title: xAxisTitle
        ? {
            text: xAxisTitle,
            x: 0,
            y: 50,
          }
        : null,
    },
    yAxis: {
      allowDecimals: false,
      labels: {
        enabled: true,
      },
      title: {
        text: null,
      },
      gridLineWidth: 1,
      tickAmount: 4,
      // controls the order of stacks
      reversedStacks: false,
    },
    plotOptions: {
      column: {
        stacking: graphType === 'stack' ? 'normal' : '',
        ...barWidthOption,
        pointPadding: 0,
        borderWidth: 0,
        states: {
          inactive: {
            enabled: false,
          },
        },
      },
      series: {
        animation: false,
        stickyTracking: true,
        states: {
          hover: {
            enabled: false,
          },
          inactive: {
            enabled: false,
          },
        },
        events: {
          // eslint-disable-next-line func-names, object-shorthand
          mouseOut: function () {
            this.chart.update({
              tooltip: {
                enabled: false,
              },
            })
          },
          // eslint-disable-next-line func-names, object-shorthand
          mouseOver: function () {
            this.chart.update({
              tooltip: {
                enabled: true,
              },
            })
          },
        },
      },
    },
    tooltip: {
      ...tooltipOptions,
      hideDelay: 100,
      split: graphType === 'stack',
      useHTML: true,
      backgroundColor: '#FFFFFF',
      borderColor: '#ffffff',
      borderRadius: 12,
      padding: 10,
    },
    series,
  }

  return {
    options,
  }
}

export default useGraph
