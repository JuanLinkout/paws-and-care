import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
  }

  body {
    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
  }

  button, a, input, textarea {
    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
  }
`

export { GlobalStyle }

