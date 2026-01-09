# Care UI Component Library

A React component library built with Vite, Flow, and React-Fela for the Innowell platform.

## Overview

Care UI is a comprehensive component library providing reusable React components organized by atomic design principles (atoms, molecules, organisms, and layouts). The library is built with modern tooling and supports both web components with plans for mobile components in the future.

## Features

- 🎨 **Atomic Design Structure**: Components organized as atoms, molecules, organisms, and layouts
- ⚡ **Built with Vite**: Fast development and optimized builds
- 🔷 **Flow Type Checking**: Type safety with Facebook Flow
- 🎭 **React-Fela**: CSS-in-JS styling with Fela
- 📚 **Storybook**: Interactive component documentation and development
- 📦 **Dual Format Output**: ES modules and CommonJS support
- 🚀 **GitHub Packages**: Published to npm via GitHub Packages

## Installation

```bash
npm install @naren-innowell/care-ui
# or
yarn add @naren-innowell/care-ui
```

### Peer Dependencies

This library requires the following peer dependencies:

- `react`: ^18.0.0 || ^19.0.0
- `react-dom`: ^18.0.0 || ^19.0.0
- `react-fela`: ~10.8.0

**Important**: You must install these in your consuming project:

```bash
yarn add react react-dom react-fela@~10.8.0
```

**Note**: `react-fela` is a peer dependency and must be provided by your application. The library does not bundle it, so make sure it's installed and the `RendererProvider` is set up correctly (see Setup section below).

**⚠️ CRITICAL**: You MUST wrap your application with `RendererProvider` from `react-fela`. See [SETUP_GUIDE.md](./SETUP_GUIDE.md) for detailed setup instructions.

**Troubleshooting**: If you encounter errors, see [TROUBLESHOOTING.md](./TROUBLESHOOTING.md) for solutions.

## Usage

### Setup

**If you already have a FelaProvider in your app** (like the example you showed):
- ✅ No setup needed! Just import and use components
- Components will work with your existing `FelaProvider`

**If you don't have a FelaProvider**:
- Wrap your app with `CareUIProvider` (included in the library):

```javascript
import { CareUIProvider, Box, Button, Heading } from '@naren-innowell/care-ui';

function App() {
  return (
    <CareUIProvider>
      {/* All your components */}
      <Box padding="md">
        <Heading level={1}>Welcome</Heading>
        <Button variant="primary">Click Me</Button>
      </Box>
    </CareUIProvider>
  );
}
```

**Optional: Custom Renderer**
If you want to use a custom Fela renderer with `CareUIProvider`:

```javascript
import { CareUIProvider } from '@naren-innowell/care-ui';
import { createRenderer } from 'fela';
// ... your custom plugins

const customRenderer = createRenderer({
  plugins: [/* your plugins */],
});

function App() {
  return (
    <CareUIProvider renderer={customRenderer}>
      <YourComponents />
    </CareUIProvider>
  );
}
```

### Using Components

**Important**: Always import from the package root. The package is configured to use built files only:

```javascript
// ✅ Correct - uses built files
import { Button, Box, Heading } from '@naren-innowell/care-ui';

// ❌ Incorrect - will not work (source files are not published)
// import { Button } from '@naren-innowell/care-ui/src/...'
```

Example usage:

```javascript
import { Button, Box, Heading } from '@naren-innowell/care-ui';

function MyComponent() {
  return (
    <Box padding="md">
      <Heading level={1}>Welcome</Heading>
      <Button variant="primary" onClick={() => console.log('Clicked!')}>
        Click Me
      </Button>
    </Box>
  );
}
```

### Build Configuration

This package is built and optimized for production. The published package:
- ✅ Contains only built files (`dist/`)
- ✅ Source files are excluded from the published package
- ✅ Uses ES modules (`.mjs`) and CommonJS (`.cjs`) formats
- ✅ Properly externalizes peer dependencies
- ✅ Is minified and optimized for production use

**Note for consuming projects**: If you're using a bundler (webpack, vite, etc.), make sure it respects the `exports` field in `package.json`. The package is configured to only expose built files, preventing accidental imports from source files.

## Development

### Prerequisites

- Node.js 20+
- Yarn

### Setup

```bash
# Install dependencies
yarn install

# Run Flow type checking
yarn flow

# Run ESLint
yarn lint

# Build the library
yarn build
```

### Storybook

Start the Storybook development server to view and develop components:

```bash
yarn storybook
```

This will start Storybook on `http://localhost:6006`

Build a static Storybook site:

```bash
yarn build-storybook
```

## Project Structure

```
care-ui/
├── src/
│   ├── index.js                 # Library entry point
│   └── web-components/          # Web components (future: mobile-components/)
│       ├── atoms/               # Basic building blocks
│       ├── molecules/           # Composite components
│       ├── organisms/           # Complex components
│       └── layouts/             # Layout components
├── .storybook/                  # Storybook configuration
├── dist/                         # Build output
└── package.json
```

## Building

The library is built using Vite in library mode, producing both ES modules and CommonJS formats:

```bash
yarn build
```

Output files:
- `dist/care-ui.mjs` - ES module format
- `dist/care-ui.cjs` - CommonJS format

## Publishing

The library is published to GitHub Packages. To publish:

1. Create a GitHub release
2. The CI/CD workflow will automatically build and publish the package

### Manual Publishing

```bash
# Build the library
yarn build

# Publish to GitHub Packages
npm publish
```

Make sure you have the `GITHUB_TOKEN` environment variable set or configured in `.npmrc`.

## Tech Stack

- **Build Tool**: Vite 7
- **Framework**: React 19
- **Type Checking**: Flow
- **Styling**: React-Fela with Fela plugins
- **Documentation**: Storybook 10
- **Package Manager**: Yarn
- **Linting**: ESLint with Flow plugin

## Contributing

1. Create a feature branch
2. Make your changes
3. Run `yarn flow` and `yarn lint` to ensure code quality
4. Test your changes in Storybook
5. Submit a pull request

## License

[Add your license here]

## Repository

https://github.com/naren-innowell/care-ui
