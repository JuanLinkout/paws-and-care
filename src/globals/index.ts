import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
  }

  body {
    font-family: 'Inter', sans-serif;
    -webkit-font-smoothing: antialiased;
  }

  button, a, input, textarea {
    font-family: 'Inter', sans-serif;
    -webkit-font-smoothing: antialiased;
  }
`
