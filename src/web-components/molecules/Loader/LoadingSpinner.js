// @flow

import React from 'react'
import { useFela } from 'react-fela'

import Grid from '../../../assets/grid.svg'
import { type ThemeType } from 'web-components/atoms'

type PropTypes = {
  message?: string,
}

const spinnerStyle = ({ theme }: { theme: ThemeType }): any => ({
  width: '50px',
  fill: theme.care.palette.surface.accentLight,
})

const loaderWrapperStyle = (): any => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  justifySelf: 'center',
  alignItems: 'center',
  margin: '20% auto',
  color: '#676767',
  textAlign: 'center',
})

const loaderTitleStyle = ({ theme }: { theme: ThemeType }): any => ({
  marginTop: '10px',
  textAlign: 'center',
  ...theme.care.typography.desktop.h2,
})

const loaderSubMessageStyle = ({ theme }: { theme: ThemeType }): any => ({
  marginTop: '3px',
  textAlign: 'center',
  color: theme.care.palette.text.positive,
  ...theme.care.typography.desktop.h2,
  fontWeight: 100,
})

const LoadingSpinner = ({ message }: PropTypes): React$Node => {
  const { css } = useFela()

  const loadingText = 'Loading Innowell'

  return (
    <div data-component-id="PageLoading" className={css(loaderWrapperStyle)}>
      <Grid className={css(spinnerStyle)} />
      <div className={css(loaderTitleStyle)}>
        {loadingText}
      </div>
      {message && <p className={css(loaderSubMessageStyle)}>{message}</p>}
    </div>
  )
}

export default LoadingSpinner
