// @flow

import { act, renderHook } from '@testing-library/react-hooks'
import { endOfMonth, format, startOfMonth, subMonths } from 'date-fns'

import useGraphIntervalSelector from './useGraphIntervalSelector'

jest.mock('date-fns', () => ({
  format: jest.fn(
    date => `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`,
  ),
  parse: jest.fn(date => date),
  subWeeks: jest.fn(
    (date, amount) => new Date(date.setDate(date.getDate() - amount)),
  ),
  subMonths: jest.fn(
    (date, amount) => new Date(date.setDate(date.getDate() - amount)),
  ),
  startOfWeek: jest.fn(
    date => new Date(date.setDate(date.getDate() - date.getDay())),
  ),
  startOfMonth: jest.fn(
    date => new Date(date.getFullYear(), date.getMonth(), 1),
  ),
  startOfYear: jest.fn(date => new Date(date.getFullYear(), 0, 1)),
  endOfWeek: jest.fn(
    date => new Date(date.setDate(date.getDate() + (6 - date.getDay()))),
  ),
  endOfMonth: jest.fn(
    date => new Date(date.getFullYear(), date.getMonth() + 1, 0),
  ),
  endOfYear: jest.fn(date => new Date(date.getFullYear(), 11, 31)),
}))

jest.mock('shared/utils/GraphUtils', () => ({
  getIntervalMethod: jest.fn(() => ({
    sub: jest.fn(
      (date, amount) => new Date(date.setDate(date.getDate() - amount)),
    ),
    add: jest.fn(
      (date, amount) => new Date(date.setDate(date.getDate() + amount)),
    ),
  })),
}))

describe('useGraphIntervalSelector', () => {
  const setQueryVariables = jest.fn()
  const initialProps = {
    interval: 'weekly',
    setQueryVariables,
  }

  beforeEach(() => {
    setQueryVariables.mockClear()
  })

  it('should initialize correctly', () => {
    const { result } = renderHook(() => useGraphIntervalSelector(initialProps))

    expect(result.current.isCustomInterval).toBe(false)
    expect(result.current.closeDropDown).toBe(true)
  })

  it('should toggle dropdown menu', () => {
    const { result } = renderHook(() => useGraphIntervalSelector(initialProps))

    act(() => {
      result.current.toggleDropDownMenu()
    })
    expect(result.current.closeDropDown).toBe(false)

    act(() => {
      result.current.toggleDropDownMenu()
    })
    expect(result.current.closeDropDown).toBe(true)
  })

  it('should update interval and set query variables', () => {
    const { result } = renderHook(() => useGraphIntervalSelector(initialProps))

    act(() => {
      result.current.changeInterval('monthly')
    })

    expect(setQueryVariables).toHaveBeenCalledWith({
      interval: 'monthly',
      start_date: format(startOfMonth(subMonths(new Date(), 5)), 'yyyy-MM-dd'),
      end_date: format(endOfMonth(new Date()), 'yyyy-MM-dd'),
    })
    expect(result.current.isCustomInterval).toBe(false)
  })

  it('should set custom interval', () => {
    const { result } = renderHook(() => useGraphIntervalSelector(initialProps))

    act(() => {
      result.current.changeInterval('custom')
    })

    expect(result.current.closeDropDown).toBe(false)
    expect(result.current.isCustomInterval).toBe(true)
  })

  test('should update custom date range', () => {
    const { result } = renderHook(() => useGraphIntervalSelector(initialProps))

    act(() => {
      result.current.changeInterval('custom')
    })

    act(() => {
      result.current.setRange({
        from: new Date(2024, 4, 24),
        to: new Date(2024, 5, 1),
      })
    })

    act(() => {
      result.current.updateCustomDateRange()
    })

    expect(result.current.appliedCustomDateRange).toEqual({
      from: '2024-4-24',
      to: '2024-5-1',
    })

    expect(setQueryVariables).toHaveBeenCalledWith({
      end_date: '2024-5-1',
      interval: 'custom',
      start_date: '2024-4-24',
    })
  })

  test('should handle cancel button for custom date range', () => {
    const { result } = renderHook(() => useGraphIntervalSelector(initialProps))

    act(() => {
      result.current.changeInterval('custom')
    })

    act(() => {
      result.current.setRange({
        from: new Date(2024, 4, 24),
        to: new Date(2024, 5, 1),
      })
    })

    act(() => {
      result.current.updateCustomDateRange()
    })

    act(() => {
      result.current.handleOnCancel()
    })

    expect(result.current.range).toEqual({
      from: '2024-4-24',
      to: '2024-5-1',
    })
    expect(result.current.isCustomInterval).toBe(false)
  })
})
