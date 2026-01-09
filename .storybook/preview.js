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
    // eslint-disable-next-line no-unused-vars
    (Story) => (
      <RendererProvider renderer={renderer}>
        <Story />
      </RendererProvider>
    ),
  ],
};

export default preview;
