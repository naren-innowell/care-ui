// @flow

// Custom extra breakpoint to handle small devices
export const BREAKPOINT_XS = 320 // mobile portrait and landscape
export const BREAKPOINT_SM = 321 // tablets
export const BREAKPOINT_MD = 631 // laptops
export const BREAKPOINT_LG = 1025 // big screens
export const BREAKPOINT_XL = 1441 // extra large screens

const queries = {
  xs: `@media only screen and (max-width: ${BREAKPOINT_XS}px)`,
  sm: `@media only screen and (min-width: ${BREAKPOINT_SM}px)`,
  md: `@media only screen and (min-width: ${BREAKPOINT_MD}px)`,
  lg: `@media only screen and (min-width: ${BREAKPOINT_LG}px)`,
  xl: `@media only screen and (min-width: ${BREAKPOINT_XL}px)`,
}

// Explicitly state the order that media queries should be added.
// Fela writes these as embedded styles (EG. <style media="...">),
// so we must strip "@media " from the beginning of each query.
const queryOrder: Array<string> = [
  queries.xs,
  queries.sm,
  queries.md,
  queries.lg,
  queries.xl,
].map((mq: string): string => mq.replace(/^@media /, ''))

export { queries, queryOrder }
