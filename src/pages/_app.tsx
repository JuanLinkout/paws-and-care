import React from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import { GlobalStyle } from '@globals/index'
import theme from '@globals/theme'
import { ErrorModalProvider } from '@contexts/useErrorModalContext'
import { ErrorModalWrapper } from '@components/modals/errorModal/ErrorModalWrapper'

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <ErrorModalProvider>
        <Component {...pageProps} />
        <GlobalStyle />
        <ErrorModalWrapper />
      </ErrorModalProvider>
    </ThemeProvider>
  )
}

export default App
