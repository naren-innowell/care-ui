import React from 'react';
import { RendererProvider } from 'react-fela';
import renderer from './felaRenderer';

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <RendererProvider renderer={renderer}>
        <Story />
      </RendererProvider>
    ),
  ],
};

export default preview;
