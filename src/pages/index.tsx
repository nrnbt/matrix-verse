// import { Button } from '@mui/material'
import Head from 'next/head'
// import Link from 'next/link'
import { FunctionComponent } from 'react'
import dynamic from 'next/dynamic'
const MatrixRain = dynamic(async () => await import('@/components/page-components/Matrix'), { ssr: false })

const HomePage: FunctionComponent = () => {
  return (
    <>
      <Head>
        <title>GPT 3.5 turbo</title>
        <meta charSet='UTF-8' />
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      </Head>
      <MatrixRain />
    </>
  )
}

export default HomePage
