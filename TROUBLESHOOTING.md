# Troubleshooting Guide

## Error: "Cannot read properties of null (reading 'useContext')"

This error occurs when `react-fela`'s `useFela` hook cannot find the Fela renderer context. This typically happens when:

### 1. Missing RendererProvider

**Problem**: Components are being used outside of the `RendererProvider`.

**Solution**: Ensure your app wraps components with `RendererProvider`:

```javascript
import React from 'react';
import { RendererProvider } from 'react-fela';
import { createRenderer } from 'fela';
import embedded from 'fela-plugin-embedded';
import prefixer from 'fela-plugin-prefixer';
import fallbackValue from 'fela-plugin-fallback-value';

const renderer = createRenderer({
  plugins: [
    embedded(),
    prefixer(),
    fallbackValue(),
  ],
});

function App() {
  return (
    <RendererProvider renderer={renderer}>
      {/* All your components that use care-ui */}
      <YourComponents />
    </RendererProvider>
  );
}

export default App;
```

### 2. Multiple React Instances

**Problem**: The library and consuming app are using different React instances.

**Solution**: 
- Ensure both use the same React version (^18.0.0 || ^19.0.0)
- Check for duplicate React installations in `node_modules`
- Use `npm ls react` or `yarn why react` to check for duplicates
- If using npm/yarn workspaces, ensure React is hoisted correctly

### 3. Library Update Required

**Problem**: After updating the library, the consuming app needs to rebuild.

**Solution**:
```bash
# Clear node_modules and reinstall
rm -rf node_modules
yarn install  # or npm install

# Rebuild your app
yarn build  # or npm run build
```

### 4. Version Mismatch

**Problem**: Version mismatch between `react-fela` in the app and library expectations.

**Solution**: Ensure you have the correct version:
```bash
yarn add react-fela@~10.8.0
```

### 5. Check Component Hierarchy

**Problem**: Components are rendered outside the `RendererProvider` tree.

**Solution**: Ensure ALL components using `care-ui` are children of `RendererProvider`:

```javascript
// ❌ Wrong - Component outside provider
function App() {
  return (
    <>
      <SomeComponent /> {/* Outside provider */}
      <RendererProvider renderer={renderer}>
        <CareUIComponent /> {/* Inside provider */}
      </RendererProvider>
    </>
  );
}

// ✅ Correct - All components inside provider
function App() {
  return (
    <RendererProvider renderer={renderer}>
      <SomeComponent />
      <CareUIComponent />
    </RendererProvider>
  );
}
```

## Verification Steps

1. **Check if `react-fela` is installed**:
   ```bash
   yarn list react-fela
   # or
   npm list react-fela
   ```

2. **Verify `RendererProvider` setup**:
   - Search your codebase for `RendererProvider`
   - Ensure it wraps your entire app or at least all components using `care-ui`

3. **Check React version compatibility**:
   ```bash
   yarn list react
   # Should show ^18.0.0 || ^19.0.0
   ```

4. **Rebuild after library update**:
   - Clear build cache
   - Reinstall dependencies
   - Rebuild the app

## Error: "Invalid hook call. Hooks can only be called inside of the body of a function component"

This error occurs when there are multiple instances of React in your application. This is a common issue when using libraries.

### Solutions:

1. **Check for Multiple React Instances**:
   ```bash
   # Check for duplicate React installations
   npm ls react
   # or
   yarn why react
   ```

2. **Ensure React is Not Bundled**:
   - The library externalizes React, but your bundler might be creating duplicates
   - For **webpack**, add to your `webpack.config.js`:
     ```javascript
     resolve: {
       alias: {
         react: path.resolve('./node_modules/react'),
         'react-dom': path.resolve('./node_modules/react-dom'),
       },
     },
     ```
   - For **Vite**, add to `vite.config.js`:
     ```javascript
     resolve: {
       dedupe: ['react', 'react-dom'],
     },
     ```

3. **Check React Versions**:
   - Ensure your app uses React ^18.0.0 || ^19.0.0 (same as library peer dependency)
   - Check for version mismatches:
     ```bash
     npm ls react react-dom
     ```

4. **Clear and Reinstall**:
   ```bash
   rm -rf node_modules
   rm package-lock.json  # or yarn.lock
   npm install  # or yarn install
   ```

5. **For Webpack Specifically**:
   - Add `externals` configuration if using the library in a webpack app:
     ```javascript
     externals: {
       react: 'React',
       'react-dom': 'ReactDOM',
     },
     ```

## Still Having Issues?

If the error persists after checking all above:

1. Check browser console for additional error messages
2. Verify the library version you're using
3. Check if there are any bundler-specific issues (webpack, vite, etc.)
4. Ensure your bundler is correctly resolving `react-fela` as an external dependency
5. Check if you have multiple `node_modules` folders (e.g., in monorepos)