import Head from 'next/head'
import { FunctionComponent } from 'react'
import { Button } from '@mui/material'
import Link from 'next/link'

const HomePage: FunctionComponent = () => {
  return (
    <>
      <Head>
        <title>GPT 3.5 turbo</title>
        <meta charSet='UTF-8' />
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      </Head>
    </>
  )
}

export default HomePage
