import theme from '@/site-settings/theme/mui-theme'
import { ThemeProvider } from '@mui/material'
import type { AppProps } from 'next/app'
import dynamic from 'next/dynamic'
import { FunctionComponent } from 'react'
import '../assets/styles/global.css'
const MatrixRain = dynamic(async () => await import('@/layouts/Matrix'), { ssr: false })

const App: FunctionComponent<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <MatrixRain>
        <Component {...pageProps} />
      </MatrixRain>
    </ThemeProvider>
  )
}

export default App
