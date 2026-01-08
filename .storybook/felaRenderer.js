// @flow
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
