// @flow

import React from 'react'
import { useFela } from 'react-fela'
import { useTranslation } from 'react-i18next'

import Grid from 'react-ui/assets/images/grid.svg'

type PropTypes = {
  message?: string,
}

const spinnerStyle = ({ theme }) => ({
  width: '50px',
  fill: theme.care.palette.surface.accentLight,
})

const loaderWrapperStyle = () => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  justifySelf: 'center',
  alignItems: 'center',
  margin: '20% auto',
  color: '#676767',
  textAlign: 'center',
})

const loaderTitleStyle = ({ theme }) => ({
  marginTop: '10px',
  textAlign: 'center',
  ...theme.care.typography.desktop.h2,
})

const loaderSubMessageStyle = ({ theme }) => ({
  marginTop: '3px',
  textAlign: 'center',
  color: theme.care.palette.text.positive,
  ...theme.care.typography.desktop.h2,
  fontWeight: 100,
})

const LoadingSpinner = ({ message }: PropTypes) => {
  const { css } = useFela()

  // LOcalization
  const { t: translation } = useTranslation()

  return (
    <div data-component-id="PageLoading" className={css(loaderWrapperStyle)}>
      <Grid className={css(spinnerStyle)} />
      <div className={css(loaderTitleStyle)}>
        {translation('loading_innowell')}
      </div>
      {message && <p className={css(loaderSubMessageStyle)}>{message}</p>}
    </div>
  )
}

export default LoadingSpinner
