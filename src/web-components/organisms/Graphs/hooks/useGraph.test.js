// Import the useGraph hook and any dependencies needed for testing
import { renderHook } from '@testing-library/react-hooks'

import useGraph from './useGraph'

jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key) => {
      const translations = {
        no_data_to_display: 'No data to display',
      }
      return translations[key] || key
    },
  }),
}))

// Mock the navy theme colors
jest.mock('web-components/atoms/colors/colorTokens', () => ({
  navy: {
    50: '#F0F0FF',
    100: '#E6E5FF',
    200: '#C9C7FF',
    300: '#A6A3FF',
    400: '#706BFF',
    500: '#040068',
  },
}))

describe('useGraph', () => {
  it('returns options object correctly', () => {
    // Define test data for the hook parameters
    const params = {
      graphType: 'stack',
      series: [{ name: 'Series 1', data: [10, 20, 30] }],
      seriesCategories: ['Category 1', 'Category 2', 'Category 3'],
    }

    // Render the hook with the test data
    const { result } = renderHook(() => useGraph(params))

    // Extract the options object from the hook result
    const { options } = result.current

    // Verify that the options object is returned correctly
    expect(options).toEqual({
      title: {
        text: null,
      },
      chart: {
        type: 'column',
        style: {
          fontFamily: 'Raleway',
          fontSize: '14px',
        },
      },
      lang: {
        noData: 'No data to display',
      },
      colors: [
        '#F0F0FF',
        '#E6E5FF',
        '#C9C7FF',
        '#A6A3FF',
        '#706BFF',
        '#040068',
      ],
      xAxis: {
        categories: ['Category 1', 'Category 2', 'Category 3'],
        title: null,
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
        reversedStacks: false,
      },
      plotOptions: {
        column: {
          stacking: 'normal',
          pointWidth: 32,
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
            mouseOut: expect.any(Function),
            mouseOver: expect.any(Function),
          },
        },
      },
      tooltip: {
        formatter: expect.any(Function),
        backgroundColor: '#FFFFFF',
        borderColor: '#ffffff',
        borderRadius: 12,
        distance: 24,
        padding: 10,
        hideDelay: 100,
        split: true,
        useHTML: true,
      },
      series: [{ name: 'Series 1', data: [10, 20, 30] }],
    })
  })
})
