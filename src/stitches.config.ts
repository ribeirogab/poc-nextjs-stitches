import { createStitches } from '@stitches/react';

export const { styled, getCssText, createTheme, globalCss } = createStitches({
  theme: {
    fonts: {
      system: 'system-ui',
    },
    colors: {
      text: 'black',
      background: 'white',
    },
    fontSizes: {
      1: '13px',
      2: '15px',
      3: '17px',
    },
  },
});

export const darkTheme = createTheme({
  colors: {
    text: 'white',
    background: 'black',
  },
});

export const GlobalStyles = globalCss({
  'html, body': {
    padding: 0,
    margin: 0,
    fontFamily:
      '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
  },

  a: {
    color: 'inherit',
    textDecoration: 'none',
  },

  '*': {
    boxSizing: 'border-box',
  },
});
