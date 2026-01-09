// @flow

import React, { Suspense } from 'react'

import LoadingSpinner from './LoadingSpinner'

type PropsType = {
  children: React$Node,
  message?: string,
}

const SuspenseLoader = ({ message, children }: PropsType): React$Node => {
  return (
    <Suspense fallback={<LoadingSpinner message={message} />}>
      {children}
    </Suspense>
  )
}

export default SuspenseLoader
