import { globalCss } from '@stitches/react';
import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background: ${({ theme }) => theme.colors.background};
    color: white;
    -webkit-font-smoothing: antialiased;
    margin: auto;
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }
`

export const globalStyles = globalCss({
  '*': { margin: 0, padding: 0, boxSizing: 'border-box' },
  body: {
    backgroundColor: '#FAAF1D',
    '-webkit-font-smoothing': 'antialiased',
    margin: 'auto'
  },
  'body, input, textarea, button': {
    fontFamily: 'Inter, sans-serif',
    fontSize: '1rem'
  }
});