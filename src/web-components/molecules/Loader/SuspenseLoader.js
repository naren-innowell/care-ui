// @flow

import React, { type Node, Suspense } from 'react'

import LoadingSpinner from './LoadingSpinner'

type PropsType = {
  children: Node,
  message?: string,
}

const SuspenseLoader = ({ message, children }: PropsType) => {
  return (
    <Suspense fallback={<LoadingSpinner message={message} />}>
      {children}
    </Suspense>
  )
}

export default SuspenseLoader
