// @flow

import React from 'react'
// $FlowFixMe - react-fela types
import { RendererProvider } from 'react-fela'
// $FlowFixMe - fela types
import { createRenderer } from 'fela'
// $FlowFixMe - fela-plugin types
import embedded from 'fela-plugin-embedded'
// $FlowFixMe - fela-plugin types
import prefixer from 'fela-plugin-prefixer'
// $FlowFixMe - fela-plugin types
import fallbackValue from 'fela-plugin-fallback-value'

// Create a default renderer with required plugins
const defaultRenderer = createRenderer({
  plugins: [
    embedded(),
    prefixer(),
    fallbackValue(),
  ],
})

type PropsType = {
  children: React$Node,
  renderer?: any, // Optional custom renderer
}

/**
 * CareUIProvider wraps your app and provides Fela renderer context.
 * 
 * If your app already has a RendererProvider from react-fela,
 * you can skip this provider. Otherwise, wrap your app with this.
 * 
 * @example
 * ```jsx
 * import { CareUIProvider, Box, Button } from '@naren-innowell/care-ui';
 * 
 * function App() {
 *   return (
 *     <CareUIProvider>
 *       <Box><Button>Click me</Button></Box>
 *     </CareUIProvider>
 *   );
 * }
 * ```
 */
const CareUIProvider = ({ children, renderer }: PropsType): React$Node => {
  return (
    <RendererProvider renderer={renderer || defaultRenderer}>
      {children}
    </RendererProvider>
  )
}

export default CareUIProvider
