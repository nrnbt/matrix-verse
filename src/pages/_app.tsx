import theme from '@/site-settings/theme/mui-theme'
import { ThemeProvider } from '@mui/material'
import type { AppProps } from 'next/app'
import { FunctionComponent } from 'react'
import '../assets/styles/global.css'

const App: FunctionComponent<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
