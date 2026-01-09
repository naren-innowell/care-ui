# Setup Guide for Consuming Applications

## Required Setup: RendererProvider

**IMPORTANT**: All components from `@naren-innowell/care-ui` require a `RendererProvider` from `react-fela` to be set up in your application.

## Step-by-Step Setup

### 1. Install Peer Dependencies

```bash
yarn add react react-dom react-fela@~10.8.0
yarn add fela fela-plugin-embedded fela-plugin-prefixer fela-plugin-fallback-value
```

### 2. Create Fela Renderer

Create a file `felaRenderer.js` (or similar) in your app:

```javascript
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

export default renderer;
```

### 3. Wrap Your App with RendererProvider

In your main app file (e.g., `App.js`, `index.js`, or `main.jsx`):

```javascript
import React from 'react';
import { RendererProvider } from 'react-fela';
import renderer from './felaRenderer'; // or wherever you put it
import { Box, Button, Heading } from '@naren-innowell/care-ui';

function App() {
  return (
    <RendererProvider renderer={renderer}>
      {/* ALL components that use care-ui must be inside this provider */}
      <Box padding="md">
        <Heading level={1}>Welcome</Heading>
        <Button variant="primary">Click Me</Button>
      </Box>
    </RendererProvider>
  );
}

export default App;
```

### 4. Common Patterns

#### Pattern 1: Single Provider at Root

```javascript
// App.js
import { RendererProvider } from 'react-fela';
import renderer from './felaRenderer';

function App() {
  return (
    <RendererProvider renderer={renderer}>
      <Router>
        <Routes>
          {/* All your routes */}
        </Routes>
      </Router>
    </RendererProvider>
  );
}
```

#### Pattern 2: Multiple Providers (Not Recommended)

If you have multiple entry points, each needs its own provider:

```javascript
// Each component tree needs its own provider
<RendererProvider renderer={renderer}>
  <ComponentTree />
</RendererProvider>
```

## Error: "The 'useFela' hook can only be used inside a 'RendererProvider'"

If you see this error, it means:

1. **Components are outside RendererProvider**: Move all components using `care-ui` inside the `RendererProvider`
2. **Provider not set up**: Add the `RendererProvider` wrapper
3. **Wrong import**: Ensure you're importing from `react-fela`, not `fela`

### Quick Fix Checklist

- [ ] `react-fela` is installed (`yarn add react-fela@~10.8.0`)
- [ ] `RendererProvider` is imported from `react-fela`
- [ ] `RendererProvider` wraps ALL components using `care-ui`
- [ ] Fela renderer is created with the required plugins
- [ ] Provider is at the root of your component tree (or at least above all `care-ui` components)

## Example: Complete Setup

```javascript
// felaRenderer.js
import { createRenderer } from 'fela';
import embedded from 'fela-plugin-embedded';
import prefixer from 'fela-plugin-prefixer';
import fallbackValue from 'fela-plugin-fallback-value';

export default createRenderer({
  plugins: [embedded(), prefixer(), fallbackValue()],
});

// App.js
import React from 'react';
import { RendererProvider } from 'react-fela';
import { BrowserRouter } from 'react-router-dom';
import renderer from './felaRenderer';
import { Box, Button } from '@naren-innowell/care-ui';

function App() {
  return (
    <RendererProvider renderer={renderer}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* More routes */}
        </Routes>
      </BrowserRouter>
    </RendererProvider>
  );
}

// HomePage.js
import { Box, Heading } from '@naren-innowell/care-ui';

function HomePage() {
  return (
    <Box padding="md">
      <Heading level={1}>Home</Heading>
    </Box>
  );
}
```

## Troubleshooting

See [TROUBLESHOOTING.md](./TROUBLESHOOTING.md) for more detailed error resolution.
