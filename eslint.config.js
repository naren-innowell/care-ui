import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import flowtype from 'eslint-plugin-flowtype'
import babelParser from '@babel/eslint-parser'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    plugins: {
      flowtype: flowtype,
    },
    languageOptions: {
      parser: babelParser,
      parserOptions: {
        requireConfigFile: false,
        babelOptions: {
          presets: [
            ['@babel/preset-flow', { all: true }],
            ['@babel/preset-react', { runtime: 'automatic' }],
          ],
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.browser,
        React$Node: 'readonly',
        React$Element: 'readonly',
        React$Component: 'readonly',
        SyntheticEvent: 'readonly',
        SyntheticKeyboardEvent: 'readonly',
        SyntheticInputEvent: 'readonly',
        $ReadOnlyArray: 'readonly',
      },
    },
    rules: {
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
      // Temporarily disable flowtype rules due to ESLint 9 compatibility issues
      // 'flowtype/define-flow-type': 'warn',
      // 'flowtype/use-flow-type': 'warn',
    },
    settings: {
      flowtype: {
        onlyFilesWithFlowAnnotation: true,
      },
    },
  },
])
