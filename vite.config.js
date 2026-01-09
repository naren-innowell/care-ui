import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { vitePluginFlow } from 'vite-plugin-flow'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vitePluginFlow({ filter: /\.(js|jsx)$/ }),
    react({
      jsxRuntime: 'automatic',
      jsxImportSource: 'react',
    }),
  ],
  resolve: {
    alias: {
      'web-components': resolve(__dirname, 'src/web-components'),
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.js'),
      name: 'CareUI',
      formats: ['es', 'cjs'],
      fileName: (format) => `care-ui.${format === 'es' ? 'mjs' : 'cjs'}`,
    },
    minify: 'esbuild',
    sourcemap: false,
    rollupOptions: {
      external: (id) => {
        // Externalize React and related packages (but NOT react-fela - we bundle it)
        if (id === 'react' || id === 'react-dom' || id === 'react/jsx-runtime') {
          return true;
        }
        // Externalize any React subpath imports
        if (id.startsWith('react/') || id.startsWith('react-dom/')) {
          return true;
        }
        // Bundle react-fela, fela, and fela plugins
        return false;
      },
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react/jsx-runtime': 'react/jsx-runtime',
        },
        // Prevent source file references in production
        paths: {},
      },
    },
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
  esbuild: {
    loader: 'jsx',
    include: /src\/.*\.jsx?$/,
    exclude: [],
  },
})
