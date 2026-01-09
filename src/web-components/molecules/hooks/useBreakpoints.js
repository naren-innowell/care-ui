// @flow

import { useWindowSize } from 'react-use'

import {
  BREAKPOINT_LG,
  BREAKPOINT_MD,
  BREAKPOINT_SM,
  BREAKPOINT_XL,
  BREAKPOINT_XS,
} from 'web-components/atoms/tokens/breakpoints'

const getBreakpoints = ({ width, height }: { width: number, height: number }): any => {
  const xs = width < BREAKPOINT_XS
  const sm = width >= BREAKPOINT_SM
  const md = width >= BREAKPOINT_MD
  const lg = width >= BREAKPOINT_LG
  const xl = width >= BREAKPOINT_XL

  return {
    width,
    height,
    xs,
    sm,
    md,
    lg,
    xl,
  }
}
const useBreakpoints = (): any => {
  const { width, height } = useWindowSize()
  const breakpoints = getBreakpoints({ width, height })

  return breakpoints
}

export default useBreakpoints
