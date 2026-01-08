import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  stories: ['../src/web-components/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  core: {
    disableTelemetry: true,
  },
  viteFinal: async (config) => {
    // Add alias for web-components
    config.resolve = config.resolve || {};
    config.resolve.alias = {
      ...config.resolve.alias,
      'web-components': resolve(__dirname, '../src/web-components'),
    };
    return config;
  },
};

export default config;
