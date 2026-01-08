// @flow

const FONT_FAMILY = 'Raleway'
const BOLD = 600
const REGULAR = 400

const commonTypography = {
  fontFamily: FONT_FAMILY,
}

const commonBodyLargeTypography = {
  ...commonTypography,
  fontSize: '16px',
  lineHeight: '24px',
  letterSpacing: 0,
}

const commonBodyMediumTypography = {
  ...commonTypography,
  fontSize: '14px',
  lineHeight: '22px',
  letterSpacing: 0,
}

const commonBodySmallTypography = {
  ...commonTypography,
  fontSize: '12px',
  lineHeight: '20px',
  letterSpacing: 0,
}

export const desktopTypography = {
  display: {
    ...commonTypography,
    fontSize: '56px',
    fontWeight: BOLD,
    lineHeight: '72px',
    letterSpacing: '-0.8px',
  },
  h1: {
    ...commonTypography,
    fontSize: '32px',
    fontWeight: BOLD,
    lineHeight: '56px',
    letterSpacing: '-0.8px',
  },
  h2: {
    ...commonTypography,
    fontSize: '24px',
    fontWeight: BOLD,
    lineHeight: '32px',
    letterSpacing: '-0.3px',
  },
  h3: {
    ...commonTypography,
    fontSize: '22px',
    fontWeight: BOLD,
    lineHeight: '32px',
    letterSpacing: '-0.15px',
  },
  h4: {
    ...commonTypography,
    fontSize: '20px',
    fontWeight: BOLD,
    lineHeight: '24px',
    letterSpacing: '-0.05px',
  },
  h5: {
    ...commonTypography,
    fontSize: '18px',
    fontWeight: BOLD,
    lineHeight: '24px',
    letterSpacing: '-0.05px',
  },
  h6: {
    ...commonTypography,
    fontSize: '18px',
    fontWeight: BOLD,
    lineHeight: '24px',
    letterSpacing: '-0.05px',
  },
  bodyLg: {
    ...commonBodyLargeTypography,
    fontWeight: REGULAR,
  },
  bodyLgBold: {
    ...commonBodyLargeTypography,
    fontWeight: BOLD,
  },
  bodyLgLink: {
    ...commonBodyLargeTypography,
    fontWeight: BOLD,
    textDecoration: 'underline',
  },
  bodyMd: {
    ...commonBodyMediumTypography,
    fontWeight: REGULAR,
  },
  bodyMdBold: {
    ...commonBodyMediumTypography,
    fontWeight: BOLD,
  },
  bodyMdLink: {
    ...commonBodyMediumTypography,
    fontWeight: BOLD,
    textDecoration: 'underline',
  },
  bodySm: {
    ...commonBodySmallTypography,
    fontWeight: REGULAR,
  },
  bodySmBold: {
    ...commonBodySmallTypography,
    fontWeight: BOLD,
  },
  bodySmLink: {
    ...commonBodySmallTypography,
    fontWeight: BOLD,
    textDecoration: 'underline',
  },
}
