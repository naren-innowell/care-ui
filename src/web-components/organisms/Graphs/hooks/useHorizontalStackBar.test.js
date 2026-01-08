// Import the useHorizontalStackBar hook and any dependencies needed for testing
import { renderHook } from '@testing-library/react-hooks'

import useHorizontalStackBar from './useHorizontalStackBar'

describe('useHorizontalStackBar', () => {
  it('returns options object correctly', () => {
    // Define test data for the hook parameters
    const params = {
      series: [
        { name: 'Series 1', data: [30], color: '#FF0000' },
        { name: 'Series 2', data: [50], color: '#00FF00' },
        { name: 'Series 3', data: [20], color: '#0000FF' },
      ],
    }

    // Render the hook with the test data
    const { result } = renderHook(() => useHorizontalStackBar(params))

    // Extract the options object from the hook result
    const { options } = result.current

    // Verify that the options object is returned correctly
    expect(options).toEqual({
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
            formatter: expect.any(Function), // Verify that the formatter function is present
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
      series: params.series, // Ensure that the series matches the input
      legend: {
        enabled: false,
      },
    })
  })
})
