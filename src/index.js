// @flow

// Re-export all components from web-components
export * from './web-components'

// Export CareUIProvider for apps that don't have FelaProvider set up
export { default as CareUIProvider } from './CareUIProvider'
